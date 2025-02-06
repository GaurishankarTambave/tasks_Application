import express, {Response, Request}  from "express";
import { ErrorMessages } from "../enum/errorMessages";
import { StatusCode } from "../enum/statusCode";
import { Authenticate } from "../controller/auth";
import cache from "..";
import { v4 as uuidv4 } from "uuid";
import config from "../config";

const router = express.Router();
export default router;

router.post('/tasks', async function (req: Request, res: any) {
    try {
        const result = await Authenticate.authenticateRequest(req, res);
        if (!result.success) {
            return result;
        }
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(StatusCode.BADREQUEST).json({ success: false, status: StatusCode.BADREQUEST,message: ErrorMessages.BODYMISSING });
        }
        const missingRequiredFieldInBody: any[] = [];
        config.taskFields.forEach((element: any) => {
            !Object.keys(req.body).includes(element) ? missingRequiredFieldInBody.push(element) : '';
        });
        if (missingRequiredFieldInBody.length > 0) {
            return res.status(StatusCode.BADREQUEST).json({ success: false, status: StatusCode.BADREQUEST,message: `${ErrorMessages.REQUIREDFIELDMISSSING} ${missingRequiredFieldInBody.join(', ')}` });     
        }
        // duplicate task name validation
        const keys = cache.keys();
        const allTasks = keys.map((key) => cache.get(key));
        if (allTasks.some((element: any) => element.name === req.body.name)) {
            return res.status(StatusCode.BADREQUEST).json({ success: false, status: StatusCode.BADREQUEST,message: ErrorMessages.DUPLICATETASKNAME });
        }
        // unique id generation
        const id = uuidv4();
        let cachResult = cache.set(`${id}`, { id: id, ...req.body });
        if (!cachResult) {
            return cachResult;
        }

        res.status(StatusCode.CREATED).json({ data: {name: req.body.name, id: id}, statusCode: StatusCode.CREATED, success: true, message: 'Task added successfully'});
    } catch (error) {
        res.status(StatusCode.SERVERERROR).send(ErrorMessages.SERVERERROR);
    }
});

router.get('/tasks/:id', async function (req: Request, res: any) {
    try {
        const result = await Authenticate.authenticateRequest(req, res);
        if (!result.success) {
            return result;
        }
        let getCache: any = cache.get(`${req.params.id}`);
        if (!getCache || Object.keys(getCache).length === 0) {
            return res.status(StatusCode.BADREQUEST).json({ success: false, status: StatusCode.NOTFOUND,message: ErrorMessages.TASKNOTFOUND });
        }
        res.status(StatusCode.SUCCESS).json({ data: getCache, statusCode: StatusCode.SUCCESS , success: true, message: 'Task retrieved successfully'});
    } catch (error) {
        res.status(StatusCode.SERVERERROR).send(ErrorMessages.SERVERERROR);
    }
});

router.get('/tasks', async function (req: Request, res: any) {
    try {
        const result = await Authenticate.authenticateRequest(req, res);
        if (!result.success) {
            return result;
        }
        const keys = cache.keys();
        const allTasks = keys.map((key) => cache.get(key));
        res.status(StatusCode.SUCCESS).json({ data: allTasks, count: allTasks.length, statusCode: StatusCode.SUCCESS, success: true, message: 'Task list retrieved successfully'});
    } catch (error) {
        res.status(StatusCode.SERVERERROR).send(ErrorMessages.SERVERERROR);
    }
});

router.delete('/tasks/:id', async function (req: Request, res: any) {
    try {
        const result = await Authenticate.authenticateRequest(req, res);
        if (!result.success) {
            return result;
        }
        let getCache: any = cache.get(`${req.params.id}`);
        if (!getCache || Object.keys(getCache).length === 0) {
            return res.status(StatusCode.BADREQUEST).json({ success: false, status: StatusCode.NOTFOUND,message: ErrorMessages.TASKNOTFOUND });
        }
        cache.del(`${req.params.id}`);
        res.status(StatusCode.SUCCESS).json({ data: {name: getCache.name, id: req.params.id}, statusCode: StatusCode.SUCCESS , success: true, message: 'Task deleted successfully'});
    } catch (error) {
        res.status(StatusCode.SERVERERROR).send(ErrorMessages.SERVERERROR);
    }
});

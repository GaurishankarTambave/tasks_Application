import express, {Response, Request}  from "express";
import jwt from "jsonwebtoken";
import { ErrorMessages } from "../enum/errorMessages";
import { StatusCode } from "../enum/statusCode";
import { DataTypes } from "../enum/dataTypes";
const router = express.Router();
export default router;

router.post('/token', async function (req: any, res: any) {
    try {
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(StatusCode.BADREQUEST).json({ success: false, status: StatusCode.BADREQUEST,message: ErrorMessages.BODYMISSING });
        }
        if (!req.body.username) {
            return res.status(StatusCode.BADREQUEST).json({ success: false, status: StatusCode.BADREQUEST,message: ErrorMessages.USERNAMEMISSING });
        }
        if (typeof req.body.username !== DataTypes.STRING) {
            return res.status(StatusCode.BADREQUEST).json({ success: false, status: StatusCode.BADREQUEST,message: ErrorMessages.INVALIDDATATYPE });
        }
        const body = req.body;
        const secretKey: any = process.env.JWT_SECRET;
        const token = jwt.sign({username: body.username}, secretKey, {expiresIn: '1h'});
        res.status(StatusCode.CREATED).json({ success: true, message: 'Token generated successfully', data: {token: token}, statusCode: StatusCode.CREATED });
    } catch (error) {
        return res.status(StatusCode.SERVERERROR).json({ success: true, status: StatusCode.SERVERERROR,message: ErrorMessages.SERVERERROR });
    }
});
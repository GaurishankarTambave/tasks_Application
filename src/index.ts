import express, { Request, Response} from "express";
import os from 'os';
import bodyParser from 'body-parser';
import authRouter from "./api/auth";
import taskRouter from "./api/task";
const app = express();
app.use(bodyParser.json());
app.use('/', authRouter);
app.use('/', taskRouter);
require('dotenv').config();
import NodeCache from "node-cache";
const cache = new NodeCache({ stdTTL: 0 });
export default cache;

app.get('/', async (req: any, res: any, next: any) => {
    const result: any = {
		name: 'api-v1-tasks-application',
		apiStartedAt: new Date(),
		host: os.hostname()
	};
	res.send(JSON.stringify(result));
});

app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}`);
});
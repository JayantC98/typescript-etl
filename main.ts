import express, { Request, Response } from 'express'
import {WebSocketServer} from "ws";


const app = express()
const port = "8080"

app.post('/etl', (req: Request, res: Response) => {
    // add handler
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
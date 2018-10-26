import * as express from "express";
import { Routes } from "./Routes";

export class App {
    
    private app: express.Application;

    constructor(){
        console.log('ghfjg',Routes);
        this.app = express();
        this.app.use((<any>Routes).getRoutes());
    }

    start(){
        this.app.listen(8000, () => {
            console.log("Server is running on http://localhost:8000");
        });
    }
}
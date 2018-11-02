import * as express from "express";
import { Routes } from "./Routes";
import * as open from "open";
import { DefaultController } from "../controllers/DefaultController";
export class App {
    
    private app: express.Application;

    public static controllers = [
        DefaultController,
    ]

    constructor(){
        this.app = express();
        this.app.use((<any>Routes).getRoutes());
    }

    start(){
        this.app.listen(8000, () => {
            console.log("Server is running on http://localhost:8000");
            open('http://localhost:8000/');
        });
    }
}
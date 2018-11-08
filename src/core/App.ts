import * as express from "express";
import { Routes } from "./Routes";
import * as open from "open";
import { DefaultController } from "../controllers/DefaultController";
import * as config from "config";
const port = config.get('app.port');
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
        this.app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
            open(`http://localhost:${port}/`);
           
        });
    }
}
import * as express from "express";

export class App {
    private app: express.Application;

    constructor(){
        this.app = express();
    }

    start(){
        this.app.listen(8000, () => {
            console.log("Server is running on http://localhost:8000");
        });
    }
}
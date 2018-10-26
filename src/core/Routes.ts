import { Router } from "express";
import { DefaultController } from "../controllers/defaultController";
const allRoutes:IRoute[] = require('../routes.json')

export enum HTTPVerb {
    GET    = 'get',
    POST   = 'post',
    PUT    = 'put',
    PATCH  = 'patch',
    DELETE = 'delete',
    ALL    = 'all'

}

export class Routes {
    static getRoutes() {
        let router = Router();
        
        for (const route of allRoutes) {
            let controller
            
            if (
                typeof route !== 'object'
                || !~Object.values(HTTPVerb).indexOf(route.method)
                || !route.controller
            ) {
                throw new Error('An issue with the route.json file')
            }
            let method = route.method
            let path   = route.path

            router[method](path, DefaultController.index)

        }

        return router;
    }
}

interface IRoute {
    method    : string;
    path      : string;
    controller: string;
}

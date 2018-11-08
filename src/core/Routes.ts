import { Router } from "express";
import { App } from "./App";
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
            if (
                typeof route !== 'object'
                || !~Object.values(HTTPVerb).indexOf(route.method)
                || !route.controller
            ) {
                throw new Error('An issue with the route.json file')
            }
            
            let fn         = route.controller.split(':')
            let controller = this.getController(fn[0]);
            if(!controller || fn.length < 2){
                console.warn('Error in route', route);
                
            } else {
                let method = route.method
                let path   = route.path

                router[method](path, controller[fn[1]]);
            }
        }

        return router;
    }

    private static getController(ctrlName: string){
        for(let item of App.controllers){
            if(item.name === ctrlName){
                return item;
            }
        }

        return null;
    }
}

interface IRoute {
    method    : string;
    path      : string;
    controller: string;
}

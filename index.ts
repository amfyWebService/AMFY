import { App } from "./src/core/App";
import * as config from "config";

let ormConfig = config.get('orm');

new App().start();
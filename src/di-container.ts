import { createContainer, asValue, asClass,  Lifetime } from "awilix";
import LoggerService from './services/logger';

const container = createContainer();

container.register("loggerService", asClass(LoggerService, {lifetime:Lifetime.SINGLETON}));

export default container
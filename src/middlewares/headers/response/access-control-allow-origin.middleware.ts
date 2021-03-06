import { Request, Response } from "express";
import { ConfigService } from "../../../services/config/config.service";
import { AbstractMiddleware, ExMiddleware } from "express-dependency-injection";

/**
 * Middleware pour configurer le Access-Control-Allow-Headers
 */
@ExMiddleware()
export class AccessControlAllowOriginMiddleware extends AbstractMiddleware {
    
    public run(req: Request, res: Response) {
        const config = new ConfigService();
        res.header("Access-Control-Allow-Origin", config.getServerConfig().allowOrigin);
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        
    }
}
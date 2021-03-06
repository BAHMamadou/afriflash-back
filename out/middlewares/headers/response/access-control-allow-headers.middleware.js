"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_dependency_injection_1 = require("express-dependency-injection");
/**
 * Middleware implementation for Express Response Access-Control-Allow-Headers setter
 */
let AccessControlAllowHeadersMiddleware = class AccessControlAllowHeadersMiddleware extends express_dependency_injection_1.AbstractMiddleware {
    run(_req, res) {
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    }
};
AccessControlAllowHeadersMiddleware = __decorate([
    express_dependency_injection_1.ExMiddleware()
], AccessControlAllowHeadersMiddleware);
exports.AccessControlAllowHeadersMiddleware = AccessControlAllowHeadersMiddleware;
//# sourceMappingURL=access-control-allow-headers.middleware.js.map
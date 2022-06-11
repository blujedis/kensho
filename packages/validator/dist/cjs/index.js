"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
/**
 * @see https://www.w3resource.com/javascript/form/email-validation.php#:~:text=To%20get%20a%20valid%20email,zA%2DZ0%2D9.!
 */
__exportStar(require("./lib/types"), exports);
__exportStar(require("./lib/init"), exports);
var init_1 = require("./lib/init");
Object.defineProperty(exports, "default", { enumerable: true, get: function () { return __importDefault(init_1).default; } });
//# sourceMappingURL=index.js.map
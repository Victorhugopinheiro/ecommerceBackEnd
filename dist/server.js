"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use((req, res, next) => {
    if (req.originalUrl === "/webhook") {
        next;
    }
    else {
        express_1.default.json()(req, res, next);
    }
});
app.use((0, cors_1.default)());
app.use(routes_1.router);
app.use((err, req, res, next) => {
    if (err instanceof Error) {
        res.status(400).json({ message: err.message });
    }
    res.status(500).json({
        status: "error",
        message: "Internal server error"
    });
});
app.listen(3333, () => console.log("server online"));

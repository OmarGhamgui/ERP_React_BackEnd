"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connectDb = require("./DA/DAManager/DBConnection");
const index_1 = require("./DA/index");
const index_2 = require("./controllers/index");
const index_3 = require("./routes/index");
connectDb();
const app = express_1.default();
const router = express_1.default.Router();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/', router);
index_3.StudentRouter(router, new index_2.StudentService(new index_1.StudentDA()));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Application started successfully on port ${PORT}.`));
//# sourceMappingURL=server.js.map
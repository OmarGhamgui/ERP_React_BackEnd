"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRouter = void 0;
const StudentRouter = (router, service) => {
    router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield service.getStudents();
            res.status(200).send(data);
        }
        catch (err) {
            res.status(500).send({ "err": err });
        }
    }));
    router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const data = yield service.getStudent(id);
            res.status(200).send(data);
        }
        catch (err) {
            res.status(500).send({ "err": err });
        }
    }));
    router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { name, email, age } = req.body;
            const result = yield service.createStudent({ name, email, age });
            res.status(200).send(result);
        }
        catch (err) {
            console.log(err);
            res.status(500).send(err);
        }
    }));
    router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { name, email, age } = req.body;
            const { id } = req.params;
            const result = yield service.updateStudent({ name, email, age, id });
            res.status(200).send(result);
        }
        catch (error) {
            res.status(500).send(error);
        }
    }));
    router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const result = yield service.deleteStudent(id);
            res.status(200).send(result);
        }
        catch (err) {
            res.status(500).send(err);
        }
    }));
};
exports.StudentRouter = StudentRouter;
//# sourceMappingURL=StudentRoute.js.map
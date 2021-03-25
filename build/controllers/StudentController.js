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
exports.StudentController = void 0;
class StudentController {
    constructor(studentDA) {
        this.studentDA = studentDA;
    }
    // public async getStudents() {
    //     try {
    //         const data = await this.studentDA.getStudents();
    //         return data;
    //     }
    //     catch (err) {
    //         console.log(err);
    //     }
    // }
    // public async getStudent(id: string) {
    //     try {
    //         const data = await this.studentDA.getStudent(id);
    //         return data;
    //     } catch (error) {
    //         throw error;
    //     }
    // }
    createStudent(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.studentDA.createStudent(Object.assign({}, data));
                return result;
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.StudentController = StudentController;
exports.default = { StudentController };
//# sourceMappingURL=StudentController.js.map
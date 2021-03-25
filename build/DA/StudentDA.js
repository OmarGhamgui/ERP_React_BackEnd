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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentDA = void 0;
const Student_1 = __importDefault(require("../models/Student"));
class StudentDA {
    StudentDA() { }
    // public async getStudents() {
    //     const query = "select * from student"
    //     try {
    //         const data = await this.ReadData(query);
    //         return data;
    //     }
    //     catch (err) {
    //         throw err;
    //     }
    // }
    // public async getStudent(id: string) {
    //     const query = "select * from student where id  = ?";
    //     try {
    //         const data = await this.ReadData(query, [id]);
    //         return data;
    //     }
    //     catch (err) {
    //         throw err;
    //     }
    // }
    createStudent({ name, email, age }) {
        return __awaiter(this, void 0, void 0, function* () {
            return Student_1.default.create({
                name, email, age
            })
                .then((data) => {
                return data;
            })
                .catch((error) => {
                throw error;
            });
        });
    }
}
exports.StudentDA = StudentDA;
//# sourceMappingURL=StudentDA.js.map
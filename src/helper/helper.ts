

import { MysqlError } from "mysql";
/*
import multer from 'multer';
import fs from 'fs';
import mkdirp from 'mkdirp';
import io from 'socket.io';
import { response } from "express";
const Recorder = require('./Recorder').Recorder

import path from 'path';*/


//Global variables


// initialisation function at runtime

// DATA BASE Helper
export interface IDBManager {
    ReadData(query: string, paramCollection: (number | string | boolean)[]): Promise<any | MysqlError>

    InsertOrUpdateData(query: string, paramCollection: (number | string | boolean)[]): Promise<any | MysqlError>

    DeleteData(query: string, paramCollection: (number | string | boolean)[]): Promise<any | MysqlError>
}

export type MySqlType = MysqlError | any;



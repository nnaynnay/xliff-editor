import { Injectable } from '@angular/core';

@Injectable()
export class Logger {

    constructor() { }

    log(...msg) { console.log(msg); }
    error(...msg) { console.error(msg); }
    warn(...msg) { console.warn(msg); }
}
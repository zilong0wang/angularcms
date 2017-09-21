import {Injectable} from '@angular/core';

@Injectable()
export class ConfigService {
    config = [];

    constructor() {
        this.setOption('isLogin', false);
    }

    setOption(option, value) {
        this.config[option] = value;
    }

    getConfig() {
        return this.config;
    }
}
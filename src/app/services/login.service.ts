import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class LoginService {
    user = { name: "user", pass: "123" }
    res =
        {
            log: false,
            code: 0,
            token:"jwtTestToken"
        }
    constructor() { }

    login(data) {
       
        if (data.username == this.user.name && data.password == this.user.pass) {
            this.res.log = true;
            this.res.code = 1;
        }
        return of(this.res)

    }


}
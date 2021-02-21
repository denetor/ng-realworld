import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    private readonly route = 'users';

    constructor(private http: HttpClient) {}

    getMyself() {
        return this.http.get(environment.apiUrl + '/' + this.route + '/myself');
    }
}

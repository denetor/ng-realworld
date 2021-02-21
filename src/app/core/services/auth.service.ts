import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginDto} from '../../store/models/login.model';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly route = 'auth';

    constructor(private http: HttpClient) {}

    authenticate(dto: LoginDto) {
        return this.http.post(environment.apiUrl + '/' + this.route + '/login', dto);
    }
}

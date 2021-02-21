import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    private readonly route = 'users';

    constructor(private http: HttpClient) {}


    public getAll(): Observable<any> {
        return this.http.get(environment.apiUrl + this.route);
    }


    getMyself(): Observable<any> {
        return this.http.get(environment.apiUrl + '/' + this.route + '/myself');
    }


    public getOne(id): Observable<any> {
        return this.http.get(environment.apiUrl + this.route + '/' + id);
    }


    public getOneByEmail(email): Observable<any> {
        return this.http.get(environment.apiUrl + this.route + '/by-email/' + email);
    }


    public findOneByResetPasswordToken(token): Observable<any> {
        return this.http.get(environment.apiUrl + this.route + '/by-resetpasswordtoken/' + token);
    }


    public findBySearchText(searchText): Observable<any> {
        if (searchText.trim().length >= 2) {
            return this.http.get(environment.apiUrl + this.route + '/by-searchtext/' + searchText);
        } else {
            return new Observable<any>();
        }
    }


    public insert(entity): Observable<any> {
        return this.http.post(environment.apiUrl + this.route, entity);
    }


    public update(entity): Observable<any> {
        return this.http.patch(environment.apiUrl + this.route + '/' + entity.id, entity);
    }
}

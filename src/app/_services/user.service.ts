import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { inject } from "@angular/core/testing";

@Injectable()
export class UserService{
    constructor(private _httpClient: HttpClient, @Inject('API_BASE_URL') private apiBaseUrl: string){}
    public name = "eddie";

    getUserData(): any{
        var headers = new HttpHeaders({apiKey: "a3fd6fa3-def7-4611-9317-5288d71b2f67"})
        // let apiUrl = this.apiBaseUrl;
        return this._httpClient.get(this.apiBaseUrl + 'Portfolio', {headers: headers});
    }
}
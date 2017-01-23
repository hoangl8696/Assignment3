import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DigitransitService {

  constructor(private http: Http) { }

  fetchRoutes = (stop:string) => {

    const url: string = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';
    const headers = new Headers({ 'Content-Type' : 'application/graphql' });
    const options = new RequestOptions ({ headers: headers});

    let data = `
    {
      stops(name: "${stop}") {
        patterns{
          name
        }
      }
    }`;

    return this.http.post(url,data,options).map( (resp) => resp.json() );
  }
}
import { Http, Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {
  private mod: any = {};
  private newVariable: any = [];

  constructor(private http: Http) { 
    
  }

  getJson = () => {
    this.http.get('tsconfig.json').subscribe((res:Response) => {
    const someVariable = res.json();
    console.log(someVariable);
    this.mod = someVariable.compilerOptions;
    }
    );
  }


  getMedia = () => {
    this.http.get('http://media.mw.metropolia.fi/wbma/media').subscribe((res2:Response) => {
    this.newVariable = res2.json();
    console.log(this.newVariable);
    }
    );
  }

  ngOnInit() {
    this.getJson();
    this.getMedia();
  }

}
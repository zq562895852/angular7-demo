import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
/*设置请求的基地址，方便替换*/
const baseurl = '/api';//启用代理服务

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public restServer;
  // public http;
  constructor(private Http:HttpClient) { 
    // this.http = Http;
    this.restServer = baseurl;
  }

  
  public get(url, params?: Object, cb?: Function,options?: Object) {
    let httpParams = new HttpParams();
    const vm = this;
    if (params) {
      for (const key in params) {
        if (params[key] === false || params[key]) {
          httpParams = httpParams.set(key, params[key]);
        }
      }
    }
    this.Http.get(this.restServer + url, {params: httpParams})
      .subscribe(data => {
        cb(data);
      });
  }
  public post(url, data?: Object, cb?: Function, options?: Object) {
    const vm = this;
    this.Http.post(this.restServer + url, data, options)
      .subscribe(res => {
        cb(res);
      });
  }
  public put(url, data?: Object, cb?: Function, options?: Object) {
    const vm = this;
    this.Http.put(this.restServer + url, data, options)
      .subscribe(res => {
        cb(res);
      });
  }

}

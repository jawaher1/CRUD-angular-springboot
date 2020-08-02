/*import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
  
})
export class ApiService {

  baseurl = "http://127.0.0.1:8080";
 httpOptions = {
    headers: new HttpHeaders(
    { 
      'Access-Control-Allow-Origin':'*',
       'Content-Type': 'application/json'
    })
}
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json', mode: 'no-cors' });

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get(this.baseurl + '/springboot-crud-rest/api/v1/employees',this.httpOptions)
    //{headers: this.httpHeaders});
  }
  getOneUser(id): Observable<any> {
    return this.http.get(this.baseurl + '/springboot-crud-rest/api/v1/employees' + id +'/',this.httpOptions)
    //{headers: this.httpHeaders});
  }
  public upload(formData) {
    return this.http.post<any>(this.baseurl + '/springboot-crud-rest/api/v1/employees' , formData);
  }
 
 update(id, data) {
  return this.http.put<any>(this.baseurl + '/springboot-crud-rest/api/v1/employees' + id +'/', data);
}
 delete(id) {
  return this.http.delete(this.baseurl + '/springboot-crud-rest/api/v1/employees' + id +'/');
}


}*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  httpOptions = {
    headers: new HttpHeaders(
    { 
      'Access-Control-Allow-Origin':'*',
       'Content-Type': 'application/json'
    })}
  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/employee';
  //private baseUrl = ` ${environment.host}:${environment.port}${environment.prefix}`

  constructor(private http: HttpClient) { }

  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`,this.httpOptions);
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    console.log(`id: ${id}`);
    console.log(value);
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  public upload(formData) {
    console.log(formData)
    return this.http.post<any>(this.baseUrl , formData);
  }
}

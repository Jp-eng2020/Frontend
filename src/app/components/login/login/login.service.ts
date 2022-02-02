import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetailAuth } from 'src/app/components/login/login/UserDetails';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private response: UserDetailAuth = new UserDetailAuth();

  private readonly API = 'http://localhost:8080/usuario/oauth'
  private readonly APIUSER = 'http://localhost:8080/usuario/'
  constructor(private http: HttpClient,   private router: Router) { }


  userAdminEmitter = new EventEmitter<boolean>();
  userEmitter = new EventEmitter<boolean>();

  login(user: any){

    this.userAdminEmitter.emit(false);
    this.userEmitter.emit(false);
    this.setLocalStorage("token", "")
    this.setLocalStorage("roles", "")

     this.http.post<UserDetailAuth>(this.API, user).subscribe(data =>{
       console.log(data.token);
      this.setLocalStorage("token", data.token);
      this.response.role = data.role
      console.log(data.role);
      var listRoles = data.role.split(",")

      if (listRoles.includes("ROLE_ADMIN")) {
        this.setLocalStorage("roles", "ROLE_ADMIN")
        this.userAdminEmitter.emit(true);
        console.log("opa")
      } else {

        this.setLocalStorage("roles", "ROLE_USER")
        this.userEmitter.emit(true);
      }
      this.router.navigate(['/'])
  }
    
     
    );

  }

  headerOptions() {

    let authorizationData = 'Basic ' + this.getLocalStorage("token");
    const headerOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': authorizationData
      })
    };
    return headerOptions
  }

  private setLocalStorage(key: string, value: string) {

    localStorage.setItem(key, value)

  }


  private getLocalStorage(key: string): String | null {

    return localStorage.getItem(key)

  }

}

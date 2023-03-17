
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  addEmpURL : string;
  getEmpURL : string;
  updateEmpUrl : string;
  deleteEmpUrl : string;

  constructor(private http : HttpClient) {

    this.addEmpURL = 'http://localhost:9091/user/addUser';
    this.getEmpURL = 'http://localhost:9091/user/getAll';
    this.updateEmpUrl = 'http://localhost:9091/user/updateUser';
    this.deleteEmpUrl = 'http://localhost:9091/user/deleteUserById';

   }

   addUser(emp : User): Observable<User> {
     return this.http.post<User>(this.addEmpURL,emp);
   }

   getAllUser(): Observable<User[]>{
     return this.http.get<User[]>(this.getEmpURL);
   }

   updateUser(emp :User) : Observable<User>{
     return this.http.put<User>(this.updateEmpUrl, emp);
   }

   deleteUser(emp : User) : Observable<User> {
     return this.http.delete<User>(this.deleteEmpUrl+'/'+emp.id);
   }
  

}
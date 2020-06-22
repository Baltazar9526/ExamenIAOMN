import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import bcrypt from 'bcryptjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  validUser;
  public userData$: Observable<any>;
  constructor() {}
  loginByEmail(users: any, user: any) {
    for(const element of users){
      if (element.Email === user.email){
        this.validUser = element;
        break;
      }
    };
    if (this.validUser){
      if (bcrypt.compareSync(user.password, this.validUser.Password)){
        this.userData$ = this.validUser;
        alert(`Bienvenido ${this.validUser.Username}.`);
      }else{
        alert('Usuario y/o Contraseña no validos');
      }
    }else{
      alert('Usuario y/o Contraseña no Validos. valid user');
    }
  }
}
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from './../../../shared/services/auth.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.scss']
})
export class IniciarSesionComponent implements OnInit {
  email;
  password;
  users = [];
  flag = true;
  userList: Observable<any[]>;
  constructor(db: AngularFireDatabase, public aS: AuthService) {
    this.userList = db.list('/users').valueChanges();
    this.userList.forEach(item => {
      this.users.push(item);
    });    
  }
  ngOnInit(): void {}
  simplification(): any {
    if(this.flag){
      this.users = this.users[0];
      this.flag = false;
    }
    return this.users;
  }
  inicioSesion(){
    var user = {
      email: this.email,
      password: this.password
    }
    this.aS.loginByEmail(this.simplification(), user);
  }
}
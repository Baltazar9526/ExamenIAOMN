import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { User } from 'src/app/models/users';
import bcrypt from 'bcryptjs';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  tempEmail;
  tempName;
  tempPassword;
  tempFoto;
  tempRol;
  user: User;
  userlist: AngularFireList<User>;
  constructor(db: AngularFireDatabase) {
    this.userlist = db.list('/users');
  }
  ngOnInit(): void {}
  registrarUsuario(): void {
    this.userlist.push({
      Email: this.tempEmail,
      Password: bcrypt.hashSync(this.tempPassword, 10),
      Username: this.tempName,
      Foto: this.tempFoto,
      Rol: this.tempRol
    });
    alert("Usuario Creado de forma correcta!");
  }
}
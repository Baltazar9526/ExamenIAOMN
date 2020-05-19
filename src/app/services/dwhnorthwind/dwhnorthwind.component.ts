import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
const URL_API = environment.API.EndPoint.Northwind;
@Component({
  selector: 'app-dwhnorthwind',
  templateUrl: './dwhnorthwind.component.html',
  styleUrls: ['./dwhnorthwind.component.scss']
})
export class DWHNorthwindComponent implements OnInit {
  datosAPI: any;
  constructor(private http: HttpClient) {}
  getTop5(dimension: String, orden: String){
    //return this.http.get(`${URL_API}Top5/${dimension}/${orden}`);
  }
  getSerieHistorica(dimension: String, orden: String){
    //return this.http.get(`${URL_API}Top5/${dimension}/${orden}`)
  }
  getCustumers(){
    //return this.http.get(`./assets/json/clientes.json`);
  }
  ngOnInit(): void {}
}
import { Component, OnInit } from '@angular/core';
import {ProviderServiceService} from '../services/provider-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listprovide',
  templateUrl: './listprovide.component.html',
  styleUrls: ['./listprovide.component.css']
})
export class ListprovideComponent implements OnInit {

  providers: any;
  constructor(private service: ProviderServiceService, private router: Router) { }
  ngOnInit() {
  this.service.listProviders().subscribe(
  response => {
  this.providers = response;
  }
  );

}
deleteProvider(myObj:any) {
  //console.log(this.provider);
  this.service.deleteProvider(myObj).subscribe(response => {
  console.log(response);
  this.refreshListProviders();
  })
  }
  refreshListProviders() {
  this.service.listProviders().subscribe(
  response => {
  this.providers = response;
  }
  );
  }
  
  updateProvider(myObj:any) {
  this.router.navigate(['updateProvider' + '/' + myObj['id']]);
  }
}

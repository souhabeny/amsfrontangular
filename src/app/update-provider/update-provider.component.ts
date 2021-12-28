import { Component, OnInit } from '@angular/core';
import {ProviderServiceService} from '../services/provider-service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-update-provider',
  templateUrl: './update-provider.component.html',
  styleUrls: ['./update-provider.component.css']
})
export class UpdateProviderComponent implements OnInit {

 id:any;
 providerToUpdate:any;
 name:any;
 email:any;
adress:any;
  constructor(private service: ProviderServiceService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
      this.id = params.get('id');
      }
      );
      this.providerToUpdate = this.service.getProvider(this.id).subscribe(
      response => {
      console.log(Object.values(response)[3]);
      this.name = Object.values(response)[1];
      this.email = Object.values(response)[2];
      this.adress = Object.values(response)[3];
      }
      );
  }

updateProvider() {
this.providerToUpdate = {
'name': this.name,
'email': this.email,
'address': this.adress,
'id': this.id
}
this.service.updateProvider(this.providerToUpdate).subscribe(
  response => {
  console.log(response);
  }
  );
  this.router.navigate(['listProvider']);
}
}

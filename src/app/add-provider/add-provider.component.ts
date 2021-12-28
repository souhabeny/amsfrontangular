import { Component, OnInit } from '@angular/core';
import {ProviderServiceService} from '../services/provider-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.css']
})
export class AddProviderComponent implements OnInit {
  provider: any;
  constructor(private service: ProviderServiceService, private router : Router) { }


  ngOnInit(): void {
  }
  createProvider(myform:any) {
    this.service.createProvider(myform).subscribe(
    response => {
    console.log(response);
    }
    );
    this.router.navigate(['listProvider']);
    }
}

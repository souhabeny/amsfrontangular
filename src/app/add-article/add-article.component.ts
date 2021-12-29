import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ArticleService} from '../services/article.service';
import {ProviderServiceService} from '../services/provider-service.service';
@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  provider: any;
  providers: any;
  constructor(private service: ArticleService, private router : Router,private serviceprovider: ProviderServiceService) { }


  ngOnInit(): void {
    
      this.serviceprovider.listProviders().subscribe(
      response => {
      this.providers = response;
      }
      );
  }
  createArticle(myform:any) {
    this.service.createArticle(myform).subscribe(
    response => {
    console.log(myform);
    this.router.navigate(['listArticle']);
    }
   
    );
   
    }

}

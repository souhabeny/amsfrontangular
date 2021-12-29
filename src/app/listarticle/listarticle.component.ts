import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ArticleService} from '../services/article.service';
@Component({
  selector: 'app-listarticle',
  templateUrl: './listarticle.component.html',
  styleUrls: ['./listarticle.component.css']
})
export class ListarticleComponent implements OnInit {

 articles: any;
  constructor(private service: ArticleService, private router: Router) { }
  ngOnInit() {
  this.service.listArticles().subscribe(
  response => {
  this.articles = response;
  }
  );

}
deleteArticle(myObj:any) {
  //console.log(this.provider);
  this.service.deleteArticle(myObj).subscribe(response => {
  console.log(response);
  this.refreshListArticles();
  })
  }
  refreshListArticles() {
  this.service.listArticles().subscribe(
  response => {
  this.articles = response;
  }
  );
  }
  
  updateArticle(myObj:any) {
  this.router.navigate(['updateArticle' + '/' + myObj['id']+'/'+myObj['provider'].id]);
  
  }

}

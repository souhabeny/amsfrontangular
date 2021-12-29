import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../services/article.service';
import {ProviderServiceService} from '../services/provider-service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {
  articleId:any;
  providerId:any;
  article:any;
  label:any;
  price:any;
  picture:any;
  constructor(private route: ActivatedRoute, private articleService:ArticleService, private router: Router) { }

 
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.providerId = params.get('id_provider');
        this.articleId = params.get('id');
      }
    );
    this.article = this.articleService.getArticle(this.articleId).subscribe(
      response => {
        //console.log(response);
        this.label = Object.values(response)[1];
        this.price = Object.values(response)[2];
        this.picture = Object.values(response)[3];
      }
    );
  }

 
  updateArticle(){
    this.article = {
      'label': this.label,
      'price': this.price,
      'picture': this.picture,
      'id': this.articleId
    }
    this.articleService.updateArticle(this.article,this.articleId,this.providerId).subscribe(
      data => {this.router.navigate(['listArticle']);}
    );
  }

}

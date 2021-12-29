import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  urlArticle = 'http://127.0.0.1:8080/articles';
  article: any;
  constructor(private Http: HttpClient) { }
  listArticles() {
  return this.Http.get(this.urlArticle + '/list');
  }
  createArticle(myform:any) {
  this.article = {
  'label': myform.value.articleLabel,
  'picture': myform.value.articlePic,
  'price': myform.value.articlePrice,
  'provider_id': myform.value.provider_id,
  }
  return this.Http.post(this.urlArticle + '/add/'+this.article['provider_id'], this.article);
  }
  
  updateArticle(myObj:any, articleId:any, provierId:any) {
    return this.Http.put(this.urlArticle  + '/update/' + provierId + '/' + articleId, myObj);
  }
  deleteArticle(myObj:any) {
  return this.Http.delete(this.urlArticle + '/delete/' + myObj['id'], myObj)
  }
  getArticle(id:number) {
  return this.Http.get(this.urlArticle + '/' + id)
  }
}

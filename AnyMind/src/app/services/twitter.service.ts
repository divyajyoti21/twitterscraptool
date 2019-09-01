import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

const url = 'http://am-twitter-scrape.herokuapp.com/';
const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
  })
};

@Injectable()
export class TwitterService {

  constructor(private http : HttpClient) { }

  getTweetsByHashTag(hashtag) : Observable<any> {
      let getTweetsByHashTagUri = '/hashtags/' + hashtag;
      return this.http.get(getTweetsByHashTagUri,httpOptions)
      .pipe(
        retry(2)
      );
  }

  getTweetsByUser(user) {
    let getTweetsByUserUri = '/users/' + user;
      return this.http.get(getTweetsByUserUri,httpOptions)
      .pipe(
        retry(2)
      );
  }

  }
    







import { Component } from '@angular/core';
import { TwitterService } from '../../services/twitter.service';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { PagerService } from '../../services/pagination.service';
import 'rxjs/add/operator/map'
import {NgForm} from '@angular/forms';
	
@Component({
	selector: 'hashtag-search',
	templateUrl: './hashtag.component.html',
	styleUrls: ['./hashtag.component.css']
})


export class HashtagComponent {

	private allItems: any;
    pager: any = {};
    pagedItems: any[];

	constructor(private http: HttpClient, private twitterService : TwitterService, private pagerService: PagerService) { }

    ngOnInit() {
		if(localStorage.getItem('hash')) {
			this.allItems = JSON.parse(localStorage.getItem('hash'));
			this.setPage(1);
		}
	}

	fetchTwitterServiceData(param) {
		if(param.length != 0) {
		this.twitterService.getTweetsByHashTag(param).subscribe((data) => {
			this.allItems = data;
			this.setPage(1);
			localStorage.setItem('hash', JSON.stringify(this.allItems));
		},(err: HttpErrorResponse) => {
			if (err.error instanceof Error) {
			} else {
			  window.alert("Server Side Error. Please try again");
			}
		  })    
		}
	}
	
	onSubmit(data : NgForm) {
		this.fetchTwitterServiceData(data.value.txtSearch);

	}

    setPage(page: number) {
        this.pager = this.pagerService.getPager(this.allItems.length, page);

        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
}


import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TwitterService } from '../../services/twitter.service';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { PagerService } from '../../services/pagination.service';
import 'rxjs/add/operator/map'
import {NgForm} from '@angular/forms';
@Component({
	selector: 'user-search',
	changeDetection: ChangeDetectionStrategy.Default,
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})


export class UserComponent {

	private allItems: any;
    pager: any = {};
	pagedItems: any[];

	constructor(private http: HttpClient, private twitterService : TwitterService, private pagerService: PagerService) {
	}
	
	ngOnInit() {
		if(localStorage.getItem('user')) {
			this.allItems = JSON.parse(localStorage.getItem('user'));
			this.setPage(1);
		}
    }
	
	fetchTwitterService(param) {
		if(param.length != 0) {
		this.twitterService.getTweetsByUser(param).subscribe((data) => {
			this.allItems = data;
			this.setPage(1);
			localStorage.setItem('user', JSON.stringify(this.allItems));
		}, (err: HttpErrorResponse) => {
			if (err.error instanceof Error) {
			} else {
			  window.alert("Server Side Error. Please try again");
			}
		  })
		}
	}

	onSubmit(data : NgForm) {
		this.fetchTwitterService(data.value.txtSearch);
	}

	setPage(page: number) {
        this.pager = this.pagerService.getPager(this.allItems.length, page);

        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
}

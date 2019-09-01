
import { Component } from '@angular/core';
import { TwitterService } from '../../services/twitter.service';
import { PagerService } from '../../services/pagination.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [TwitterService, PagerService]
})


export class AppComponent {

	constructor() {
	}
}

import { Component, EventEmitter, Output } from '@angular/core';


@Component({
	selector: 'search-tab',
	templateUrl: './searchtab.component.html',
	styleUrls: ['./searchtab.component.css'],
	providers: []
})


export class SearchTabComponent {

	constructor() {
    }
    
    @Output() searchdata = new EventEmitter<boolean>();
    didVote = false;
  
    onSubmit(searchparam: any) {
      this.searchdata.emit(searchparam);
    }
}

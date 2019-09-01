import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Modules
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { AppComponent } from './components/index/app.component';
import { UserComponent } from './components/user/user.component';
import { HashtagComponent } from './components/hashtag/hashtag.component';
import { SearchTabComponent } from './components/searchtab/searchtab.component';
// Services
import { TwitterService } from './services/twitter.service';
import { PagerService } from './services/pagination.service';

//Pipes
import { TrimText } from './pipes/trim-text.pipe';
import { ZeroSymbol } from './pipes/zero-symbol.pipe';
import { HashtagLimit } from './pipes/hashtag-limit.pipe';
import { DateFormat } from './pipes/date-format.pipe';

// Modules
import { AppRoutingModule } from './/app-routing.module';
import { InterceptorModule } from './/interceptor.module';
import { PageNotFound } from './components/pagenotfound/pagenotfound.component';


@NgModule({
	declarations: [
	AppComponent,
	UserComponent,
	SearchTabComponent,
	HashtagComponent,
	PageNotFound,
	TrimText,
	ZeroSymbol,
	DateFormat,
	HashtagLimit
	],
	imports: [
	BrowserModule,
	RouterModule,
	HttpClientModule,
	HttpClientJsonpModule,
	FormsModule,
	ReactiveFormsModule,
	BrowserAnimationsModule,
	AppRoutingModule,
	InterceptorModule,
	],
	providers: [TwitterService, PagerService],
	bootstrap: [AppComponent]
})

// enableProdMode();

export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { HashtagComponent } from './components/hashtag/hashtag.component';
import { PageNotFound } from './components/pagenotfound/pagenotfound.component';
const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'hashtag', component: HashtagComponent },
  { path: '', redirectTo: '/hashtag', pathMatch: 'full'},
  { path: '**', component: PageNotFound}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

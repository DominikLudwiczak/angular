import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './page/all/all.component';
import { NewestComponent } from './page/newest/newest.component';

const routes: Routes = [
  { path: 'news', component: NewestComponent },
  { path: 'all', component: AllComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

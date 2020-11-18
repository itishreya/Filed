import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { MainpageComponent } from './mainpage/mainpage.component';

const routes: Routes = [{ path: '', component: MainpageComponent},{ path: 'details', component: DetailsComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

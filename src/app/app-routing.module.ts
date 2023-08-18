import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { MainBodyTopComponent } from './main-body-top/main-body-top.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: MainBodyTopComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

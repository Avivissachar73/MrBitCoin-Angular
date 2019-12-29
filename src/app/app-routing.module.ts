import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: 'contact/edit/:_id',
    component: ContactEditComponent
  },
  {
    path: 'contact/edit',
    component: ContactEditComponent
  },
  {
    path: 'contact/:_id',
    component: ContactDetailsComponent
  },
  {
    path: 'signup',
    component: SignupPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
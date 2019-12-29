import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MoveListComponent } from './cmps/move-list/move-list.component';
import { MovePreviewComponent } from './cmps/move-preview/move-preview.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactService } from './services/contact.service';
import { UserService } from './services/user.service';
import { MoveService } from './services/move.service';
import { AppFooterComponent } from './cmps/app-footer/app-footer.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { MoneySenderComponent } from './cmps/money-sender/money-sender.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    HomePageComponent,
    MoveListComponent,
    MovePreviewComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactEditComponent,
    ContactDetailsComponent,
    SignupPageComponent,
    ContactPageComponent,
    AppFooterComponent,
    ContactFilterComponent,
    MoneySenderComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ContactService, UserService, MoveService],
  bootstrap: [AppComponent]
})
export class AppModule { }

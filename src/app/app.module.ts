import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainBodyTopComponent } from './main-body-top/main-body-top.component';
import { ContactComponent } from './contact/contact.component';
import { BottomPageComponent } from './bottom-page/bottom-page.component';
import { AboveBottomComponent } from './above-bottom/above-bottom.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainBodyTopComponent,
    ContactComponent,
    BottomPageComponent,
    AboveBottomComponent,
    HomeComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

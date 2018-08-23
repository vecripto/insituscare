import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { JoinusComponent } from './joinus/joinus.component';
import { AppRoutes } from './app.routes';
import { NewsComponent } from './home/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContactComponent,
    ServicesComponent,
    HomeComponent,
    JoinusComponent,
    NewsComponent
  ],
  imports: [
    AppRoutes,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

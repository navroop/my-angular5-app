import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// routes
import {appRoutes} from './routes';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ThumbnailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

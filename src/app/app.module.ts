import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatFormFieldModule, MatCardModule, MatRippleModule, MatLabel } from '@angular/material';
import { ListModule } from './modules/list/list.module';
import { HomeComponent } from './home/home.component';
import { FeedModule } from './modules/feed/feed.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatRippleModule,
    ListModule,
    FeedModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

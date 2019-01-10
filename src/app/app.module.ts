import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent } from './page/component/carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    
    // CarouselComponent,
  ],
  imports: [

    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  
    BrowserAnimationsModule,
    
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

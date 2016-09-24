import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';

import { FirebaseModule } from './firebase';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FirebaseModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule, MdCardModule, MdToolbarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

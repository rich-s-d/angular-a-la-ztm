// Modules glue our app together.
// Are are dependencies and Angular groups them by feature to help keeps things orgainised.
// Basically an enhanced version fo JS's module system. 

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// ngModule decorator adds metadata to the class which basically tells Angular that we are creating a module.
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

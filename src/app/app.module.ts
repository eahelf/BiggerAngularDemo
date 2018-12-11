import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
// includes the new-cmp created in cmd

@NgModule({
   declarations: [
      AppComponent,
      NewCmpComponent // will act as child
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [AppComponent] //Main app is given
})

export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';

//Exporting firebase config
export const firebaseConfig = {
  apiKey: 'AIzaSyD5K7d5tVpYlVH-VCE81HJiedF_4CKSSrg',
  authDomain: 'businesscontact-86f36.firebaseapp.com',
  databaseURL: 'https://businesscontact-86f36.firebaseio.com',
  storageBucket: 'businesscontact-86f36.appspot.com'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

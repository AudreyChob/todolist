import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
export const firebaseConfig = {
  apiKey: "AIzaSyBf7NCpAa8bXiZOAIni3nLNadngxxIED1s",
  authDomain: "todolist-bbcb5b.firebaseapp.com",
  databaseURL: "https://todolist-bbcb5b.firebaseio.com",
  projectId: "todolist-bbcb5b",
  storageBucket: "todolist-bbcb5b.appspot.com",
  messagingSenderId: "486632956520",
  appId: "1:486632956520:web:246e6856def6b2533d51dd"
};
// import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';




@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SpeechRecognition,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

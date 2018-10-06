import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { DetalhesPage } from '../pages/detalhes/detalhes';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { ListaAnimaisService } from '../service/ListaAnimais.service';

var config = {
    apiKey: "AIzaSyC46O9rGxbkhFpPP1fKVz22fM09E168Diw",
    authDomain: "adoteumamigo-d5751.firebaseapp.com",
    databaseURL: "https://adoteumamigo-d5751.firebaseio.com",
    projectId: "adoteumamigo-d5751",
    storageBucket: "adoteumamigo-d5751.appspot.com",
    messagingSenderId: "1042546417223"
  };


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetalhesPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule.enablePersistence(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetalhesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ListaAnimaisService
  ]
})
export class AppModule {}

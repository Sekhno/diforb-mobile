import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {AudioProvider} from "../providers/audio/audio";

import { initializeApp } from "firebase/app";
import {environment} from "../environments/environment";
import config from '../../capacitor.config';
import {LoginButtonComponent} from "./components/login-button.component";
import { domain, clientId, callbackUri } from './auth.config';

const app = initializeApp(environment.firebaseConfig);

@NgModule({
  declarations: [AppComponent, LoginButtonComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain,
      clientId,
      authorizationParams: {
        redirect_uri: callbackUri,
      },
      // For using Auth0-Angular with Ionic on Android and iOS,
      // it's important to use refresh tokens without the falback
      useRefreshTokens: true,
      useRefreshTokensFallback: false,
    }),
  ],
  providers: [
    AudioProvider,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

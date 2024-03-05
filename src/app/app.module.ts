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
import {TrainerProgressService} from "./services/trainer-progress.service";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { Media } from '@ionic-native/media/ngx';

const app = initializeApp(environment.firebaseConfig);

@NgModule({
  declarations: [AppComponent, LoginButtonComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
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
    Media,
    AudioProvider,
    TrainerProgressService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

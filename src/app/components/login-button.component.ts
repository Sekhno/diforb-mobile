import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-login-button',
  template: `<ion-button class="ion-padding" (click)="login()">Get Started</ion-button>`,
  styles: ['ion-button { width: 100% }']
})
export class LoginButtonComponent {
  constructor(public auth: AuthService) {}

  login() {
    this.auth
      .loginWithRedirect({
        async openUrl(url: string) {
          return Browser.open({ url, windowName: '_self' });
        }
      })
      .subscribe();
  }
}

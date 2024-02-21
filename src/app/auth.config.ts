import { isPlatform } from '@ionic/angular';
import config from '../../capacitor.config';

export const domain = 'dev-w3q10a2c186zzydt.us.auth0.com';
export const clientId = 'mgF1uD4X7piz8Qy27ZChvpXBk7vNZdx0';
const { appId } = config;

// Use `auth0Domain` in string interpolation below so that it doesn't
// get replaced by the quickstart auto-packager
const auth0Domain = domain;
const iosOrAndroid = isPlatform('hybrid');
console.log('domain', domain);
console.log('clientId', clientId);

console.log('iosOrAndroid', iosOrAndroid)

export const callbackUri = iosOrAndroid
  ? `${appId}://${auth0Domain}/capacitor/${appId}/callback`
  : 'http://localhost:4200';

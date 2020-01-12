import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder,NativeGeocoderOptions,NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';

import { HomeComponent } from './home/home.component';
import { ChoiceComponent } from './pages/choice/choice.component';
import { MapComponent } from './pages/map/map.component';
import { PropertyDetailsPipe } from './pages/postAds/property-details.pipe';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { OrderByPipe } from './_service/order-by.pipe';
import { AgePipe } from 'src/app/_service/age.pipe';
import { Connectivity } from './_provider/connectivity-service.service';
// import { GoogleMaps } from './_provider/google-maps.service';
import { Network } from '@ionic-native/network/ngx';
import { LocationSelect } from './pages/location-select/location-select.page';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [AppComponent,
    HomeComponent,
    ChoiceComponent,
    MapComponent,
    PropertyDetailsPipe,
    LocationSelect
    
  ],
  entryComponents: [LocationSelect],
  imports: [BrowserModule, IonicModule.forRoot(),
    IonicStorageModule.forRoot({
      name: '__roommatedb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }), HttpClientModule, AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAWasxIddWK4mSe7YBixfrsuAiwDhxVQEs',
      libraries: ['places']
    })
  ],
  providers: [
    StatusBar,
    Geolocation,
    NativeGeocoder,
    SplashScreen,

    Connectivity,
    // GoogleMaps,
    Network,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

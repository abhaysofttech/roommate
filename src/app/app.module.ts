import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { HomeComponent } from './home/home.component';
import { ChoiceComponent } from './pages/choice/choice.component';
import { MapComponent } from './pages/map/map.component';
import { PropertyDetailsPipe } from './pages/postAds/property-details.pipe';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent,
    HomeComponent,
    ChoiceComponent,
    MapComponent,
    PropertyDetailsPipe
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),HttpClientModule, AppRoutingModule],
  providers: [
    StatusBar,
    Geolocation,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

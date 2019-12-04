import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChoiceComponent } from './pages/choice/choice.component';
import { MapComponent } from './pages/map/map.component';

const routes: Routes = [
  {
    path: 'home',
    // loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    component:HomeComponent
  },
  {
    path:'map',
    component:MapComponent
  },
  {
    path:'choice',
    component:ChoiceComponent
  },
    {
    path: 'property-details',
    loadChildren: () => import('./pages/postAds/property-details/property-details.module').then( m => m.PropertyDetailsPageModule)
  },
  {
    path: 'location-details',
    loadChildren: () => import('./pages/postAds/location-details/location-details.module').then( m => m.LocationDetailsPageModule)
  },
  {
    path: 'rent-details',
    loadChildren: () => import('./pages/postAds/rent-details/rent-details.module').then( m => m.RentDetailsPageModule)
  },
  {
    path: 'amenities',
    loadChildren: () => import('./pages/postAds/amenities-details/amenities-details.module').then( m => m.AmenitiesDetailsPageModule)
  },
  {
    path: 'ads-images',
    loadChildren: () => import('./pages/postAds/ads-images/ads-images.module').then( m => m.AdsImagesPageModule)
  },
  {
    path: 'post-ads',
    loadChildren: () => import('./pages/postAds/post-ads/post-ads.module').then( m => m.PostAdsPageModule)
  },
  {
    path: 'ads',
    loadChildren: () => import('./pages/search/ads/ads.module').then( m => m.AdsPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'trial',
    loadChildren: () => import('./pages/trial-getdata/trial-getdata.module').then( m => m.TrialGetdataPageModule)
  },  {
    path: 'demo',
    loadChildren: () => import('./demo/demo.module').then( m => m.DemoPageModule)
  }




  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrSdkModule } from "@bloomreach/ng-sdk";
import { ContentComponent } from './components/content/content.component';
import {ContainerComponent} from "./components/container.component";
import {MyComponentComponent} from "./components/mycomponent/mycomponent.component";
import {BannerComponent} from "./components/banner/banner.component";
import {SharedBannerComponent} from "./components/sharedbanner/sharedbanner.component";

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ContainerComponent,
    MyComponentComponent,
    BannerComponent,
    SharedBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrSdkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

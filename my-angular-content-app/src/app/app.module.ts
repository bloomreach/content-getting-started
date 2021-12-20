import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrSdkModule } from "@bloomreach/ng-sdk";
import { ContentComponent } from './components/content/content.component';
import {ContainerComponent} from "./components/container.component";

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ContainerComponent
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

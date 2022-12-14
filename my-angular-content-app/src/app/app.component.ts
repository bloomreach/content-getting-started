import {Component} from '@angular/core';
import axios from "axios";
import {ContentComponent} from "./components/content/content.component";
import {TYPE_CONTAINER_NO_MARKUP} from "@bloomreach/spa-sdk";
import {ContainerComponent} from "./components/container.component";
import {MyComponentComponent} from "./components/mycomponent/mycomponent.component";
import {BannerComponent} from "./components/banner/banner.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'my-angular-content-app';
  configuration = {
    path: `${window.location.pathname}${window.location.search}`,
    endpoint: 'https://sandbox-sales02.bloomreach.io/delivery/site/v1/channels/getting-started/pages',
    httpClient: axios
  }
  mapping = {
    'Content': ContentComponent,
    'MyComponent': MyComponentComponent,
    'Banner': BannerComponent,
    [TYPE_CONTAINER_NO_MARKUP]: ContainerComponent
  }
}

import {ContainerComponent} from "./components/container.component";
import {ContentComponent} from "./components/content/content.component";

import {Component} from '@angular/core';
import axios from "axios";
import {TYPE_CONTAINER_NO_MARKUP} from "@bloomreach/spa-sdk";
import {MyComponentComponent} from "./components/mycomponent/mycomponent.component";


@Component({
  selector: 'app-root',
  // template: `
  //   <br-page [configuration]="configuration" [mapping]="mapping">
  //     <main>
  //       <ng-container brComponent="main"></ng-container>
  //     </main>
  //   </br-page>`,
  templateUrl: 'app.component.html'
})
export class AppComponent {

  title = 'my first angular app'

  configuration = {
    path: `${window.location.pathname}${window.location.search}`,
    endpoint: 'https://kenan.bloomreach.io/delivery/site/v1/channels/getting-started/pages',
    httpClient: axios
  }
  mapping = {
    'Content': ContentComponent,
    'MyComponent': MyComponentComponent,
    // [TYPE_CONTAINER_NO_MARKUP]: ContainerComponent,
  }
}

import {Component} from '@angular/core';
import axios from "axios";
import {ContentComponent} from "./components/content/content.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'my-angular-content-app';
  configuration = {
    path: `${window.location.pathname}`,
    endpoint: 'https://kenan.bloomreach.io/delivery/site/v1/channels/getting-started/pages',
    httpClient: axios
  }
  mapping = {'Content': ContentComponent}
}

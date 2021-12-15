import {Component, Input} from '@angular/core';
import {Component as BrComponent, Document, Page,} from "@bloomreach/spa-sdk";

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
})
export class MyComponentComponent {

  @Input() component!: BrComponent;
  @Input() page!: Page;

  get properties() {
    return this.component.getParameters<any>();
  }

}


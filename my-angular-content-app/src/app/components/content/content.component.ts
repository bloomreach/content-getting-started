import {Component, Input} from '@angular/core';
import {Component as BrComponent, Document, Page,} from "@bloomreach/spa-sdk";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
})
export class ContentComponent {

  @Input() component!: BrComponent;
  @Input() page!: Page;

  get document() {
    return this.page.getDocument<Document>()?.getData<any>();
  }

}

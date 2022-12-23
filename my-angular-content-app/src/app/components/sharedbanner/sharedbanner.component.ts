import {Component, Input} from '@angular/core';
import {ContainerItem as BrComponent, Content, ImageSet, Page, Reference,} from "@bloomreach/spa-sdk";

@Component({
  selector: 'app-shared-banner',
  templateUrl: './sharedbanner.component.html',
})
export class SharedBannerComponent {

  @Input() component!: BrComponent;
  @Input() page!: Page;
  safeHTML?: Promise<string | null>;

  get document() {
    return this.page.getContent<Content>(this.component.getProperties<{ document: Reference }>().document);
  }

  get content() {
    return this.document?.getData<BannerDocumentModel>();
  }

  get imageSrc() {
    return this.content && this.page.getContent<ImageSet>(this.content.image)?.getOriginal()?.getUrl();
  }

  get link() {
    return this.content && this.page.getContent(this.content.ctalink)?.getUrl();
  }

}

interface BannerDocumentModel {
  title: string
  text: { value: string }
  image: Reference
  ctalabel: string
  ctalink: Reference
  //contentType: string
}

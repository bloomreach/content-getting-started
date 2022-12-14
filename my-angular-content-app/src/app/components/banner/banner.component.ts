import {Component, Input} from '@angular/core';
import {ContainerItem as BrComponent, ImageSet, Page, Reference,} from "@bloomreach/spa-sdk";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
})
export class BannerComponent {

  @Input() component!: BrComponent;
  @Input() page!: Page;
  safeHTML?: Promise<string | null>;


  get content() {
    return this.component.getContent<BannerComponentModel>(this.page);
  }

  get imageSrc() {
    return this.content && this.page.getContent<ImageSet>(this.content.image)?.getOriginal()?.getUrl();
  }

  get link() {
    return this.content && this.page.getContent(this.content.ctalink)?.getUrl();
  }

}

interface BannerComponentModel {
  title: string
  text: { value: string }
  image: Reference
  ctalabel: string
  ctalink: Reference
  //contentType: string
}

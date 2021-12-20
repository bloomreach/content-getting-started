import {Component, Input} from '@angular/core';
import {Component as BrComponent, Page} from '@bloomreach/spa-sdk';

@Component({
  selector: 'app-container',
  template: `
    <div style="min-width: 100px;">
      <ng-container *ngFor="let child of component.getChildren()">
        <ng-container [brComponent]="child"></ng-container>
      </ng-container>
    </div>`
})
export class ContainerComponent {
  @Input() component!: BrComponent;
  @Input() page!: Page;
}

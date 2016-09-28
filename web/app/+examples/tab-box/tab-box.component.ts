import { Component, ViewEncapsulation } from '@angular/core';
import { StTab } from './../../../../components';

@Component({
   selector: 'tab-box-example',
   template: require('./tab-box.component.html'),
   styles: [require('./tab-box.component.scss')],
   encapsulation: ViewEncapsulation.None
})

export class TabBoxComponent {
   tabs: StTab[];
   selectedTab: StTab;

   constructor() {
      this.tabs = [
         {
            label: 'Tab1',
            active: true
         }, {
            label: 'Tab2',
            active: false
         }
      ];

      this.selectedTab = this.tabs[0];
   }

   onSelectTab(tab: StTab): void {
      this.selectedTab = tab;
   }
}

import {RouterModule} from '@angular/router';
import {LayoutComponent} from './layout.component';
import {
  ModalComponent,
  MainComponent,
  InputComponent,
  InfoBoxComponent,
  ModificableListComponent,
  SpinnerComponent,
  FooterComponent,
  InfoCardComponent,
  RegexpComponent,
  VerticalMenuComponent,
  ListComponent,
  TooltipComponent,
  HorizontalTabComponent,
  TabBoxComponent
} from '../+examples';

export const routing = RouterModule.forChild([
  {
    path: '', component: LayoutComponent, children: [
      { path: '', redirectTo: 'main' },
      { path: 'main', component: MainComponent },
      { path: 'modal', component: ModalComponent },
      { path: 'input', component: InputComponent },
      { path: 'info-box', component: InfoBoxComponent },
      { path: 'spinner', component: SpinnerComponent },
      { path: 'modificable-list', component: ModificableListComponent },
      { path: 'footer', component: FooterComponent },
      { path: 'info-card', component: InfoCardComponent },
      { path: 'regexp', component: RegexpComponent },
      { path: 'vertical-menu', component: VerticalMenuComponent },
      { path: 'list', component: ListComponent },
      { path: 'tooltip', component: TooltipComponent },
      { path: 'horizontal-tab', component: HorizontalTabComponent },
      { path: 'tab-box', component: TabBoxComponent }
    ]
  }
]);

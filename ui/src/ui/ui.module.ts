import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIComponent } from './ui.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UIComponent],
  entryComponents: [UIComponent]
})
export class UIModule {
  static entry = UIComponent;
}

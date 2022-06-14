import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MyCommonModule } from '../tooltip/tooltip.module';
import { ButtonComponent } from './button/button.component';
import { ImageComponent } from './image/image.component';
import { LabelComponent } from './label/label.component';

@NgModule({
  declarations: [ImageComponent, LabelComponent, ButtonComponent],
  exports: [ImageComponent, LabelComponent, ButtonComponent],
  imports: [MyCommonModule, CommonModule, TranslateModule],
})
export class ComponentModule {}

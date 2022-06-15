import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MyCommonModule } from '../tooltip/tooltip.module';
import { ButtonComponent } from './button/button.component';
import { ImageComponent } from './image/image.component';
import { LabelComponent } from './label/label.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DropBoxesComponent } from './drop-boxes/drop-boxes.component';
import { RadiioButtonsComponent } from './radiio-buttons/radiio-buttons.component';

@NgModule({
  declarations: [
    ImageComponent,
    LabelComponent,
    ButtonComponent,
    DropBoxesComponent,
    RadiioButtonsComponent,
  ],
  exports: [
    ImageComponent,
    LabelComponent,
    ButtonComponent,
    DropBoxesComponent,
    RadiioButtonsComponent,
  ],

  imports: [
    MyCommonModule,
    CommonModule,
    TranslateModule,
    IonicModule,
    FormsModule,
  ],
})
export class ComponentModule {}

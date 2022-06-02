import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TooltipDirective } from '../tooltip/tooltip.directive';
import { LongPressModule } from 'ionic-long-press';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MatTooltipModule,
    NgbModule,
    LongPressModule
  ],
  declarations: [HomePage,TooltipDirective]
})
export class HomePageModule {}

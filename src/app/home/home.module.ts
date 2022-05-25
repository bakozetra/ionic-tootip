import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TooltipModule } from 'ng2-tooltip-directive';
import { MatTooltipModule } from '@angular/material/tooltip';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    TooltipModule,
    MatTooltipModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}

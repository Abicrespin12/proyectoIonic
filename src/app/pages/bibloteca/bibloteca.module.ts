import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BiblotecaPageRoutingModule } from './bibloteca-routing.module';

import { BiblotecaPage } from './bibloteca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BiblotecaPageRoutingModule
  ],
  declarations: [BiblotecaPage]
})
export class BiblotecaPageModule {}

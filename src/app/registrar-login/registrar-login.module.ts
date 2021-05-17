import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarLoginPageRoutingModule } from './registrar-login-routing.module';

import { RegistrarLoginPage } from './registrar-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarLoginPageRoutingModule
  ],
  declarations: [RegistrarLoginPage]
})
export class RegistrarLoginPageModule {}

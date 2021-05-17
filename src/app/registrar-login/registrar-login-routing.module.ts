import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarLoginPage } from './registrar-login.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarLoginPageRoutingModule {}

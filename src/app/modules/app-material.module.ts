import { NgModule } from '@angular/core';

import {
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatMenuModule
} from '@angular/material';

const modules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatMenuModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}

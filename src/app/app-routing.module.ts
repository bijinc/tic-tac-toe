import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { BoardComponent } from './board/board.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

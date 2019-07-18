import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { BoardComponent } from './board/board.component';
import { MenuComponent } from './menu/menu.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: MenuComponent },
  { path: 'play', component: BoardComponent },
  { path: 'leaderboard', component: LeaderboardComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

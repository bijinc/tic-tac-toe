import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatButtonModule, MatExpansionModule, MatCardModule, MatInputModule, MatSnackBarModule} from '@angular/material';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './/app-routing.module';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    MenuComponent,
    LeaderboardComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    AppRoutingModule
  ],
  exports: [
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatExpansionModule, MatCardModule, MatInputModule, MatSnackBarModule, MatButtonToggleModule, MatRadioModule } from '@angular/material';

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
    MatButtonToggleModule,
    MatRadioModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonToggleModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

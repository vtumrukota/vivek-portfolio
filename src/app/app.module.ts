import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutMeComponent } from './homepage/about-me/about-me.component';
import { ModalComponent } from './modal/modal.component';
import { GithubDialogComponent } from './homepage/about-me/github-dialog/github-dialog.component';
import { LinkedinDialogComponent } from './homepage/about-me/linkedin-dialog/linkedin-dialog.component';
import { LinkedInService } from './homepage/about-me/linkedin-dialog/linkedin-dialog.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    AboutMeComponent,
    ModalComponent,
    GithubDialogComponent,
    LinkedinDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // Angular Material Components
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,
  ],
  providers: [
    LinkedInService
  ],
  entryComponents: [
    GithubDialogComponent,
    LinkedinDialogComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

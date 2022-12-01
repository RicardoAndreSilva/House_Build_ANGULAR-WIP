import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { IndexComponent } from './index/index.component';
import { CardsComponent } from './cards/cards.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { AboutComponent } from './about/about.component';
import { ReviewComponent } from './review/review.component';
import { ProjectComponent } from './project/project.component';
import { NavSocialComponent } from './nav-social/nav-social.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceComponent } from './service/service.component';
import { AuthorComponent } from './author/author.component';
import { AreaNelsonComponent } from './area-nelson/area-nelson.component';
import { AreaGrotaComponent } from './area-grota/area-grota.component';
import { AreaJeffersonComponent } from './area-jefferson/area-jefferson.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    ProjectsComponent,
    IndexComponent,
    CardsComponent,
    HighlightsComponent,
    AboutComponent,
    ReviewComponent,
    ProjectComponent,
    NavSocialComponent,
    BackToTopComponent,
    FooterComponent,
    ServiceComponent,
    AuthorComponent,
    AreaNelsonComponent,
    AreaGrotaComponent,
    AreaJeffersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

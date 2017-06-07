import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// automactily component created
import { AppComponent } from './app.component';
import { AppRoutingModule } from "app/app.routing.module";

// import of tried
import { StickyNavModule } from 'ng2-sticky-nav';

// my components of view
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CardHomeComponent } from './shared/card-home/card-home.component';

// my components generics
import { PersonalCardComponent } from './shared/personal-card/personal-card.component';
import { SimpleCardComponent } from './shared/simple-card/simple-card.component';
import { DetailShotsComponent } from './detail-shots/detail-shots.component';
import { SimpleImageComponent } from './shared/simple-image/simple-image.component';
import { PersonalCardHorizontalComponent } from "./shared/personal-card-horizontal/personal-card-horizontal.component";

// my services
import { DribbbleServiceService } from "app/providers/dribbble-service.service";
import { CollapseCardComponent } from './shared/collapse-card/collapse-card.component';
import { AvatarComponent } from './shared/avatar/avatar.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { PaginacaoComponent } from './shared/paginacao/paginacao.component';

@NgModule({
  declarations: [
    AppComponent,
    CardHomeComponent,
    HomeComponent,
    PersonalCardComponent,
    SimpleCardComponent,
    ProfileComponent,
    DetailShotsComponent,
    SimpleImageComponent,
    PersonalCardHorizontalComponent,
    CollapseCardComponent,
    AvatarComponent,
    LoadingComponent,
    PaginacaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    StickyNavModule,

    AppRoutingModule,
  ],
  providers: [DribbbleServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

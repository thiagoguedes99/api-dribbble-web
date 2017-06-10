import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from "app/pages/home/home.component";
import { PersonalCardComponent } from "app/shared/personal-card/personal-card.component";
import { SimpleCardComponent } from "app/shared/simple-card/simple-card.component";
import { ProfileComponent } from "app/pages/profile/profile.component";
import { SimpleImageComponent } from "app/shared/simple-image/simple-image.component";
import { PersonalCardHorizontalComponent } from "app/shared/personal-card-horizontal/personal-card-horizontal.component";
import { DetailShotsComponent } from "app/pages/detail-shots/detail-shots.component";
import { CollapseCardComponent } from "app/shared/collapse-card/collapse-card.component";
import { AvatarComponent } from "app/shared/avatar/avatar.component";
import { LoginComponent } from "app/pages/login/login.component";



const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    {path: 'detail/:id', component: DetailShotsComponent},
    {path: 'profile/:id', component: ProfileComponent},
    { path: 'personal', component: PersonalCardComponent },
    {path: 'simple', component: SimpleCardComponent},
    {path: 'image', component: SimpleImageComponent},
    {path: 'coments', component: PersonalCardHorizontalComponent},
    {path: 'colla', component: CollapseCardComponent},
    {path: 'avatar', component: AvatarComponent},
    {path: 'login', component: LoginComponent}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
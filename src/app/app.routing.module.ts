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
import { AuthGuard } from "app/guards/auth.guard";
import { NotFoundComponent } from "app/pages/not-found/not-found.component";



const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    {path: 'login', component: LoginComponent},
    {path: 'about', loadChildren: 'app/pages/about/about.module#AboutModule'},
    {path: 'detail/:id', component: DetailShotsComponent},
    {path: 'profile/:id', component: ProfileComponent},
    {path: '**', component: NotFoundComponent}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
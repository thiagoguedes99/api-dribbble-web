import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutRoutingModule } from 'app/pages/about/about.routing.module';
import { AboutComponent } from 'app/pages/about/about.component';

@NgModule({
    declarations: [
        AboutComponent        
    ],
    imports: [
        CommonModule,
        AboutRoutingModule
    ],
})

export class AboutModule {}
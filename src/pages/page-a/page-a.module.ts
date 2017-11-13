import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageAPage } from './page-a';

@NgModule({
  declarations: [
    PageAPage,
  ],
  imports: [
    IonicPageModule.forChild(PageAPage),
  ],
})
export class PageAPageModule {}

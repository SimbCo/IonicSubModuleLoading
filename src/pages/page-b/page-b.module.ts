import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageBPage } from './page-b';

@NgModule({
  declarations: [
    PageBPage,
  ],
  imports: [
    IonicPageModule.forChild(PageBPage),
  ],
})
export class PageBPageModule {}

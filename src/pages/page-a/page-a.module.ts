import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageAPage } from './page-a';
import { PageBPage } from '../page-b/page-b';

@NgModule({
  declarations: [
    PageAPage,
    PageBPage
  ],
  imports: [
    IonicPageModule.forChild(PageAPage),
  ],
  entryComponents: [
    PageBPage
  ]
})
export class PageAPageModule {}

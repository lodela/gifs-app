import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardListItemComponent } from './components/card-list/card-list-item/card-list-item.component';
import { Limited100Pipe } from './helpers/pipes/limited100.pipe';

@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent,
    CardListItemComponent,
    Limited100Pipe,
  ],
  imports: [CommonModule],
  exports: [HomePageComponent],
})
export class GifsModule {}

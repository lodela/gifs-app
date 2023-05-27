import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Place } from '../../helpers/interfaces/gifs-card.interface';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  public places: Place[] = [];
  constructor(private gifsService: GifsService) {}

  ngOnInit(): void {
    this.places = this.gifsService.Places;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input
      type="text"
      name=""
      id=""
      class="form-control"
      placeholder="buscar gifs"
    />
  `,
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent {}

import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

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
      #txtTagInput
      (keyup.enter)="searchTag()"
    />
  `,
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  searchTag(): void {
    const newTag = this.tagInput.nativeElement.value;
    console.log({ newTag });
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limited100',
})
export class Limited100Pipe implements PipeTransform {
  constructor() {}

  transform(value: string, args?: { limit: number }): string {
    if (value === null || value === undefined) {
      return '';
    }
    const limit = args?.limit || 100;
    if (value.length <= limit) {
      return value;
    }
    const trimmed = value.substring(0, limit) + '...';
    return `${trimmed} Read more`;
  }
}

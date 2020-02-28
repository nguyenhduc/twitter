import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'take' })
export class TakePipe implements PipeTransform {
  transform(value: any, amount: number): any {
    if (value.length === 0 || value.length <= amount) {
      return value;
    }
    return value.slice(0, amount);
  }
}

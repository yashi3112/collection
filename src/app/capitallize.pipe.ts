import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitallize'
})
export class CapitallizePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

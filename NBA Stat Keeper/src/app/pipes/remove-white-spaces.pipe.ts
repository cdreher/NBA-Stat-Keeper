import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeWhiteSpaces'
})
export class RemoveWhiteSpacesPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    return value.replace(/\s/g, "-");
  }

}

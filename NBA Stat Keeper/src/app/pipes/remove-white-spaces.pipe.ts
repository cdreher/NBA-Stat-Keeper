import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeWhiteSpaces'
})
export class RemoveWhiteSpacesPipe implements PipeTransform {

  // Create custom pipe to remove white space from a string.
  transform(value: string, args?: any): string {
    return value.replace(/\s/g, "-");
  }

}

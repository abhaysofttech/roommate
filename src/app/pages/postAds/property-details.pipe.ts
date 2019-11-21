import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'propertyDetails'
})
export class PropertyDetailsPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}

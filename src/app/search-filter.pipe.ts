import { Pipe, PipeTransform } from '@angular/core';
import { Students } from './students';

// A Pipe transform interface
@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  // Invokes the transform method with the value of a binding as the first argument,
  // and any parameters as the second argument in list form.
  transform(student: Students[] , searchvalue: string): Students[] {
    if (!student || !searchvalue) {
      return student;
    }
    // Use filter to search data by first name and last name.
    return student.filter(data =>
      data.firstName.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase()) ||
      data.lastName.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase())
    );
  }
}

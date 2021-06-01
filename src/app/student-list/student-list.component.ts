import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Students } from '../students';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Students[];
  searchValue: string;
  tagValue: string;

  constructor(private studentService: StudentService,
              private router: Router) {
  }

  ngOnInit(){
    this.getStudents();
  }

  private getStudents(){
    this.studentService.getStudentList().subscribe(data => {
      this.students = data.students;
      this.students.forEach(x => x['avg'] = x.grades.reduce((prev, next) => prev + +next, 0) / x.grades.length);
    });
  }
}

@Pipe({
  name: 'average'
})
export class AvgPipe implements PipeTransform {
  transform(items: any[]): any {
    return items.reduce((a, b) => a + +b, 0) / items.length;
  }
}

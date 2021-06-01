export class Students {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  pic: string;
  skill: string;
  grades: number[];
  avg: number;

  constructor(a?) {
    if (a) {
      this.firstName = a.firstName;
      this.id = a.id;
      this.lastName = a.lastName;
      this.email = a.email;
      this.company = a.company;
      this.pic = a.pic;
      this.skill = a.skill;
      this.grades = a.grades;
      this.avg = a.avg;
    }
  }
}

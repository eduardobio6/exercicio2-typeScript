export class Person {
  firstname: string;
  middlename: string;
  lastname: string;
  age: number;
  email: Array<string> = ['gmail@gmail.com', 'hotmail@hotmail.com'];

  constructor(name: string, mname: string,lname: string, yourage: number) {
    this.firstname = name;
    this.middlename = mname;
    this.lastname = lname;
    this.age = yourage;
    
  }

  getFullname() {
    return 'Seu nome é: ' + this.firstname + ' ' + this.middlename + ' ' + this.lastname;
  }

  getBirthdayYear() {
    return 2022 - this.age;
   }
   
}

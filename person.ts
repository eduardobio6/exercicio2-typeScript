class person {
  firstname: string;
  middlename: string;
  age: number;
  constructor(name: string, mname: string, yourage: number) {
    this.firstname = name;
    this.middlename = mname;
    this.age = yourage;
  }

  getFullname() {
    return 'My name is: ' + this.firstname + ' ' + this.middlename;
  }

  getBirthdayYear() {
    return 2022 - this.age;
  }

  List: Array<string> = [];
}

import Student from "./Student";
import Language from "./Language";
import Teaching from "./Teaching";

class School {
  private _id: number;
  private _city: string;
  private _capacity: number;
  private _teaching: Teaching[];
  private _students: Student[];

  constructor(id: number, city: string, capacity: number, teaching: Teaching[], students: Student[]) {
    this._id = id;
    this._city = city;
    this._capacity = capacity;
    this._teaching = teaching;
    this._students = students;
  }

  get id() {
    return this._id;
  }

  get city() {
    return this._city;
  }

  get capacity() {
    return this._capacity;
  }

  get teaching() {
    return this._teaching;
  }

  get students() {
    return this._students;
  }

  addStudent(student: Student) {
    if (this._capacity === 0) {
      throw new Error("School is full");
    } else {
      this._capacity--;

      const newStudent = new Student(
        Math.floor(Math.random() * 1000),
        student.firstname,
        student.lastname,
        student.birthday,
        student.address,
        this._id
      );
      this._students.push(newStudent);
      return newStudent;
    }
  }

  removeStudent(student: Student) {
    const index = this._students.findIndex(
      (s) => s.id === student.id
    );
    if (index !== -1) {
      this._students.splice(index, 1);
      this._capacity++;
    } else {
      throw new Error("Student not found");
    }
  }

  addLanguage(language: Language) {
    // Vérifiez si la langue est déjà enseignée
    const index = this._teaching.findIndex(
      (teaching) =>
        teaching.school_id === this._id && teaching.language_id === language.id
    );

    if (index === -1) {
      const newTeaching = new Teaching(this._id, language.id);
      this._teaching.push(newTeaching);
      return newTeaching;
    } else {
      throw new Error("Language already taught");
    }
  }

  removeLanguage(language: Language) {
    // Remove language from school languages remove language_id from school_id in the teaching table
    const index = this._teaching.findIndex(
      (teaching) =>
        teaching.school_id === this._id && teaching.language_id === language.id
    );
    if (index !== -1) {
      this._teaching.splice(index, 1);
    } else {
      throw new Error("Language not found");
    }
  }

  getStudents() {
    return this._students.filter((student) => student.school_id === this._id);
  }
}

export default School;

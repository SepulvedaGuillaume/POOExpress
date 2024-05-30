import { Request, Response } from "express";
import School from "../entities/School";
import Student from "../entities/Student";
import Language from "../entities/Language";

const schools: School[] = [];

const createTestSchool = async (req: Request, res: Response): Promise<any> => {
  try {
    const school: School = new School(
      Math.floor(Math.random() * 1000),
      "Test School First",
      2,
      [],
      []
    );

    const student1: Student = new Student(
      Math.floor(Math.random() * 1000),
      "John",
      "Doe",
      new Date("1990-01-01"),
      "123 Test St",
      school.id
    );

    const student2: Student = new Student(
      Math.floor(Math.random() * 1000),
      "Jane",
      "Doe",
      new Date("1990-01-01"),
      "123 Test St",
      school.id
    );

    const language1: Language = new Language(
      Math.floor(Math.random() * 1000),
      "French"
    );
    const language2: Language = new Language(
      Math.floor(Math.random() * 1000),
      "English"
    );

    // Add students to the school
    school.addStudent(student1);
    school.addStudent(student2);

    // Add languages to the school
    school.addLanguage(language1);
    school.addLanguage(language2);

    schools.push(school);

    res.status(200).json(school);
  } catch (error) {
    return res.status(500).send("An error occurred");
  }
};

const endYear = async (req: Request, res: Response): Promise<any> => {
  try {
    const oldSchool: School = schools[0];
    
    // Create a new school
    const newSchool: School = new School(
      Math.floor(Math.random() * 1000),
      "Test School Second",
      2,
      [],
      []
    );

    // Transfer students to the new school and remove them from the old school
    oldSchool.students.forEach((student) => {
      newSchool.addStudent(student);
      oldSchool.removeStudent(student);
    });


    // Transfer languages to the new school we have school_id and language_id
    oldSchool.teaching.forEach((teaching) => {
      const language: Language = new Language(teaching.language_id, "");
      newSchool.addLanguage(language);
    });

    schools.push(newSchool);
    res.status(200).json({ oldSchool, newSchool });
  } catch (error) {
    return res.status(500).send("An error occurred");
  }
};

export { createTestSchool, endYear };

import { Subjects } from './subjects/Teacher';
import { Subjects as SubjectNamespace } from './subjects/Subject';
import { Subjects as CppNamespace } from './subjects/Cpp';
import { Subjects as ReactNamespace } from './subjects/React';
import { Subjects as JavaNamespace } from './subjects/Java';

export const cpp = new CppNamespace.Cpp();
export const java = new JavaNamespace.Java();
export const react = new ReactNamespace.React();

export const cTeacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10
};

console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

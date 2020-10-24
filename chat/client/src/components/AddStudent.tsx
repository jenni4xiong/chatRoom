import React, { useState } from 'react';
import '../styles/AddStudent.css';

interface IStudent {
  name: string,
  grade: string,
  age: string,
  picture: string,
}

interface IStudentProps {
  addStudent: (student: IStudent) => void,
}

const AddStudent = (props: IStudentProps): JSX.Element => {
  const [name, setName] = useState<string>('')
  const [grade, setGrade] = useState<string>('')
  const [age, setAge] = useState<string>('')
  const [picture, setPicture] = useState<string>('')

  return (
    <form className="container">
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
      </label>
      <label>
        Grade:
        <input type="text" value={grade} onChange={(e) => setGrade(e.target.value)}></input>
      </label>
      <label>
        Age:
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)}></input>
      </label>
      <label>
        Picture:
        <input type="text" value={picture} onChange={(e) => setPicture(e.target.value)}></input>
      </label>
      <button type="submit">Add Student</button>
    </form>
  );
}

export default AddStudent;
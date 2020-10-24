import React, { useEffect, useState } from 'react';
import AddStudent from './AddStudent'
import StudentList from './StudentList';
import StudentProfile from './StudentProfile';
import '../styles/App.css';
import axios from 'axios';

interface IStudent {
  name: string,
  grade: string,
  age: string,
  picture: string,
}

const App = (): JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [studentList, setStudentList] = useState<IStudent[]>([])

  useEffect(() => {
    getStudents()
  })

  const toggleShowModal = (): void => {
    const newShowModal = !showModal
    setShowModal(newShowModal);
  }

  const getStudents = (): any => {
    axios.get('http://localhost:8080/students')
      .then((response) => console.log(response.data))
      .catch((err) => console.log('err', err))
  }

  const addStudent = (student: IStudent): void => {
    axios.post('http://localhost:8080/students', student)
      .then(() => getStudents())
      .catch((err) => console.log('err', err))
  }

  return (
    <div className="column-container">
      <AddStudent addStudent={addStudent} />
      <div>
        <StudentList toggleShowModal={toggleShowModal} studentList={studentList} />
        {showModal ? <StudentProfile /> : null}
      </div>
    </div>
  );
}

export default App;

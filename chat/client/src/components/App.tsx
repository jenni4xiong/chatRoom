import React, { useState } from 'react';
import AddStudent from './AddStudent'
import StudentList from './StudentList';
import StudentProfile from './StudentProfile';
import '../styles/App.css';

interface IStudent {
  name: string,
  grade: string,
  age: string,
}

const App = (): JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [studentList, setStudentList] = useState<IStudent[]>([
    { name: 'Jennifer', grade: '11', age: '12' },
    { name: 'Allan', grade: '12', age: '11' },
    { name: 'Allan', grade: '15', age: '21' }
  ])

  const toggleShowModal = (): void => {
    const newShowModal = !showModal
    setShowModal(newShowModal);
  }

  return (
    <div className="column-container">
      <AddStudent />
      <div>
        <StudentList toggleShowModal={toggleShowModal} studentList={studentList} />
        {showModal ? <StudentProfile /> : null}
      </div>
    </div>
  );
}

export default App;

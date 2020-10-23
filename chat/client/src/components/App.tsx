import React, { useState } from 'react';
import AddStudent from './AddStudent'
import StudentList from './StudentList';
import StudentProfile from './StudentProfile';
import '../styles/App.css';

const App = (): JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(false)

  const toggleShowModal = (): void => {
    const newShowModal = !showModal
    setShowModal(newShowModal);
  }

  return (
    <div className="column-container">
      <AddStudent />
      <div>
        <StudentList toggleShowModal={toggleShowModal} />
        {showModal ? <StudentProfile /> : null}
      </div>
    </div>
  );
}

export default App;

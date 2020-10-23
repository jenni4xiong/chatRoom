import React from 'react';
import '../styles/StudentList.css';

interface IStudentListProps {
  toggleShowModal: () => void
}

const StudentList = (props: IStudentListProps): JSX.Element => {
  return (
    <span className="container">
      Hello StudentList
    </span>
  );
}

export default StudentList;
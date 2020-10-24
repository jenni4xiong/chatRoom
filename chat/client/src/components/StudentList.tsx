import React from 'react';
import '../styles/StudentList.css';

interface IStudent {
  name: string,
  grade: string,
  age: string,
  picture: string,
}

interface IStudentListProps {
  toggleShowModal: () => void,
  studentList: IStudent[]
}

const StudentList = (props: IStudentListProps): JSX.Element => {

  return (
    <table className="container">
      <thead>
        <tr>
          <th>Name</th>
          <th>Grade</th>
          <th>Age</th>
        </tr>
      </thead>
    </table>
  );
}

export default StudentList;
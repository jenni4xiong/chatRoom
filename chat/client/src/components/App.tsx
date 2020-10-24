import React, { useEffect, useState } from 'react';
import AddStudent from './AddStudent'
import StudentList from './StudentList';
import StudentProfile from './StudentProfile';
import '../styles/App.css';
import axios from 'axios';

interface IStudent {
  id: string,
  name: string,
  grade: string,
  age: string,
  picture: string,
}

const App = (): JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [studentList, setStudentList] = useState<IStudent[]>([])
  const [page, setPage] = useState<number>(1)
  const [limit, setLimit] = useState<number>(15)
  const [sortBy, setSortBy] = useState<string | null>(null)
  const [order, setOrderBy] = useState<number | null>(null)
  // const [totalPages, setTotalPages] = useState<number>(0)

  useEffect(() => {
    getStudents()
  })

  // const changePage = (direction: string): void => {
  //   if (direction === 'next') {
  //     if (page)
  //       setPage(page + 1)
  //   } else {
  //     if (page > 1) {
  //       setPage(page - 1)
  //     }
  //   }
  // }

  const toggleShowModal = (): void => {
    const newShowModal = !showModal
    setShowModal(newShowModal);
  }

  const getStudents = (): any => {
    if (sortBy && order) {
      axios.get(`http://localhost:8080/students?page=${page}&limit=${limit}&sortBy=${sortBy}&order=${order}`)
        .then((response) => setStudentList(response.data))
        .catch((err) => console.log('err', err))
    } else {
      axios.get(`http://localhost:8080/students?page=${page}&limit=${limit}`)
        .then((response) => setStudentList(response.data))
        .catch((err) => console.log('err', err))
    }
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

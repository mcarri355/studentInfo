// College.jsx
import React, { useState } from 'react';
import StudentList from '../props/StudentList';
import data from '../data.json';
import '../css/College.css';

function College() {
  const [students, setStudents] = useState(data);
  const [newStudent, setNewStudent] = useState({
    first_name: '',
    last_name: '',
    age: '',
    college: '',
  });

  const addStudent = () => {
    setStudents([...students, newStudent]);
    setNewStudent({
      first_name: '',
      last_name: '',
      age: '',
      college: '',
    });
  };

  const handleInputChange = (e) => {
    setNewStudent({
      ...newStudent,
      [e.target.name]: e.target.value,
    });
  };

  const deleteStudent = (index) => {
    const updatedStudents = [...students];
    updatedStudents.splice(index, 1);
    setStudents(updatedStudents);
  };

  return (
    <div className="container">
      <h1>Student Information</h1>
      <div className="form-container">
        <form onSubmit={(e) => { e.preventDefault(); addStudent(); }}>
          <label>
            First Name: 
            <input
              type="text"
              name="first_name"
              value={newStudent.first_name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Last Name: 
            <input
              type="text"
              name="last_name"
              value={newStudent.last_name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Age: 
            <input
              type="text"
              name="age"
              value={newStudent.age}
              onChange={handleInputChange}
            />
          </label>
          <label>
            College:
            <input
              type="text"
              name="college"
              value={newStudent.college}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit" className='updateBtn'>Add Person</button>
        </form>
      </div>

      <div className="card-container">
        {students.map((student, index) => (
          <div key={index} className="card">
            <p>Name: {student.first_name} {student.last_name}</p>
            <p>Age: {student.age}</p>
            <p>College: {student.college}</p>
            <button className='updateBtn' onClick={() => deleteStudent(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default College;

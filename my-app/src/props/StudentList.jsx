import React from 'react';
import Student from '../components/Student';

function StudentList({ students }) {
  return (
    <div>
      <h2>Student List</h2>
      {students.map((student, index) => (
        <Student key={index} student={student} />
      ))}
    </div>
  );
}

export default StudentList;
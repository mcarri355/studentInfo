import React from 'react';

function Student({ student }) {
  const { first_name, last_name, age, college } = student;

  return (
    <div>
      <p>Name: {first_name} {last_name}</p>
      <p>Age: {age}</p>
      <p>College: {college}</p>
      <hr />
    </div>
  );
}

export default Student;
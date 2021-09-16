import React from "react";

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Total = ({ course }) => {
  const parts = course.parts
  const sum = parts.reduce((pv, cv) => pv + cv.exercises, 0)

  return (
    <p><strong>total of {sum} exercises</strong></p>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = ({ course }) => {
  const parts = course.parts

  return (
    <div>
      {
        parts.map(part => <Part key={part.id} part={part} />)
      }
    </div>
  )
}

const Course = ({ courses }) => {
  return (
    <div>
      {
        courses.map(course => {
          return (
            <div key={course.id}>
              <Header course={course}></Header>
              <Content course={course}></Content>
              <Total course={course}></Total>
            </div>
          )
        })
      }
    </div>
  )
}

export default Course
import React from "react";
import { getCourses } from "../api/courseApi";

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: []
    };
  }
  render() {
    return <h2>Courses</h2>;
  }
}

export default CoursesPage;
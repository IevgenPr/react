import React from "react";

// class compoent
class AboutPage extends React.Component {
  render() {
    return (
      // empty brackets imply using React.Fragment inside
      <>
        <h2>About</h2>
        <p>This app uses React.</p>
      </>
    );
  }
}

export default AboutPage;

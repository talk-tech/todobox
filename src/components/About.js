import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/About.css";

function About() {
  return (
    <section>
      <Container>
        <p className="h2 text-center about-header">About</p>
        <h1 className="text-center">
          {" "}
          <span className="todo-brand-name">TODO</span>
          <span className="box-brand-name">-BOX 📦</span>
        </h1>
      </Container>
      <Container className="about-section-container">
        <h6 className="text-center">
          TodoBOX is a user-friendly task management application designed to{" "}
          <br />
          help you organize your daily activities effortlessly. With an <br />
          intuitive interface and a range of features, TodoBOX aims to make your
          life easier.
        </h6>
        <Row className="col-container">
          <Col lg={10}>
            <h3>Key Features:</h3>
            <p>
              About TodoBOX App: TodoBOX is a user-friendly task management
              application designed to help you organize your daily activities
              effortlessly. With an intuitive interface and a range of features,
              TodoBOX aims to make your life easier. Key Features: Add and
              Manage Tasks: Easily add new tasks with details like task name,
              time, and date. TodoBOX simplifies task entry with a
              straightforward form. Visual Appeal: Enjoy an engaging visual
              experience with a carousel of images that enhance the overall
              aesthetics of the app. Real-Time Feedback: Receive immediate
              feedback upon adding a task, with a success message confirming
              your task's addition to the list. Effective Task Editing: Edit
              your tasks at any time with a simple click. TodoBOX lets you
              modify the task name, time, and date effortlessly. Responsive
              Design: Access TodoBOX on various devices, thanks to its
              responsive design, ensuring a seamless experience on mobile,
              tablet, or desktop.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;

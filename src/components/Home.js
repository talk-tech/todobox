import { Container, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert"; // Import Alert from react-bootstrap
import "../styles/Home.css";
import Image1 from "../images/1.jpg"; 
import Image0 from "../images/image-0.jpg"; 
import Image3 from "../images/image-2.jpg"; 
import Image4 from "../images/image-3.jpg"; 
import { useState } from "react";

function Home({ AddTodo, todobox }) {
  const [input, setInput] = useState({ task: "", date: "", complete: false });
  const [todoAdded, setTodoAdded] = useState(false); // State to track todo added message

  function InputTaker(evt) {
    let { name, value } = evt.target;
    setInput((copyOfInput) => {
      return { ...copyOfInput, [name]: value };
    });
  }

  function HandleSubmit(e) {
    e.preventDefault();
    AddTodo(input);
    setInput({ task: "", date: "", complete: false }); // Clear the input fields
    setTodoAdded(true); // Set the todo added message to true
    setTimeout(() => setTodoAdded(false), 3000); // Hide the message after 3 seconds
  }

  return (
    <section>
      <Container className="home-container-1">
        <p className="h2 text-center home-main-header">
          Welcome to <span className="todobox-span">TodoBOX</span>
        </p>
        <Col xs={10} sm={6} md={6} lg={4}>
          <Carousel className="carousel-box">
            <Carousel.Item>
              <img
                src={Image1}
                className="img-fluid carousel-image"
                text="First slide"
                alt="main1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={Image0}
                className="img-fluid carousel-image"
                text="First slide"
                alt="main1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={Image3}
                className="img-fluid carousel-image"
                text="First slide"
                alt="list3"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={Image4}
                className="img-fluid carousel-image"
                text="First slide"
                alt="calender4"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Container>
      <Container className="form-container">
        <Col sm={8} md={6} lg={6} className="form-container-1">
          {todoAdded && (
            <Alert variant="success">Todo added to the list!</Alert>
          )}
          <Form onSubmit={HandleSubmit}>
            <Form.Group controlId="formTodo">
              <Form.Label className="todo-text">Write Todo Notes</Form.Label>
              <Form.Control
                type="text"
                value={input.task}
                name="task"
                className="todo-box"
                onChange={InputTaker}
                placeholder="Enter your todo notes"
              />
            </Form.Group>
            <Form.Group controlId="formDate">
              <Form.Label className="todo-text">Set Date</Form.Label>
              <Form.Control
                type="date"
                value={input.date}
                name="date"
                onChange={InputTaker}
              />
            </Form.Group>

            <button className="smooth-button" type="submit">
              Submit
            </button>
          </Form>
        </Col>
      </Container>
    </section>
  );
}

export default Home;

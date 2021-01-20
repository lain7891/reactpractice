import React, {useState} from "react";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";


const Signup = () => {

  // 1. HOOKS
  // const [state, setState] = useState({
  //   userName: "",
  //   password: ""
  // });

  // Use below if you don't want to spread the object

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="mt-4">
        <h2>Sign Up</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <Container className="mt-3 px-5">
          <Row className="form-group">
            <Col size="12">
              <input className="form-control" type="text" placeholder="Username" name="username" 
              // onChange={(e)=> setState({...state, username: e.target.value})} Option that uses the spread ibject
              // created the two separate states on line 17 and 18 and you can then call it as such below
              onChange={(e) => setUserName(e.target.value)} />
            </Col>
          </Row>
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Col>
          </Row>
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </Container>
        <Container className="mt-4">
          <h3>Name: {username}</h3>
          <p>Password: {password}</p>
        </Container>
      </form>
    </div>
  );
};

export default Signup;

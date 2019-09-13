import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    console.log(this);
    this.PostData = this.PostData.bind(this);
  }

  PostData() {
    fetch("http://localhost:3000/SignIn", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.email.value,
        password: this.password.value
      })
    })
      .then(response => response.json())
      .then(res => {
        alert("it's good!", res.newUser);
        this.props.history.push("/");
      })
      .catch(error => console.error("Ошибка:", error));
  }

  render() {
    return (
      <div className="Main">
        <h1> Sign In </h1>{" "}
        <p>
          {" "}
          Don 't have an account? <Link to={"/Registration"}>Create one</Link>
        </p>{" "}
        <div className="UserData">
          <div className="group">
            <input
              ref={ref => {
                this.email = ref;
              }}
              className="input"
              type="text"
              required
            />
            <span className="bar"> </span> <label> E - mail </label>
          </div>{" "}
          <div className="group">
            <input
              ref={ref => {
                this.password = ref;
              }}
              className="input"
              type="password"
              required
            />
            <span className="bar"> </span> <label> Password </label>
          </div>{" "}
        </div>{" "}
        <button className="btn" onClick={this.PostData.bind(this)}>
          Sign In{" "}
        </button>{" "}
      </div>
    );
  }
}

export default SignIn;

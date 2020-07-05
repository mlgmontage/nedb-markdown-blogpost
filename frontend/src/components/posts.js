import React, { Component } from "react";
import axios from "../axios";
import { Row } from "react-bootstrap";

class Posts extends Component {
  render() {
    return (
      <Row>
        <h2>Posts</h2>
      </Row>
    );
  }

  componentDidMount() {
    axios.get(`/posts`).then((response) => {
      console.log(response.data);
    });
  }
}

export default Posts;

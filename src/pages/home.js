import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography } from "@material-ui/core";
import MotionDiv from "../components/motion";

const Home = () => {
  return (
    <Container className="contain">
      <MotionDiv>
        <Typography component="h1" variant="h2">
          Welcome to Home!
        </Typography>
      </MotionDiv>
      <Typography component="h2" variant="h5">
        It's Home safe Home!
      </Typography>
      <Link to="/about">About</Link>
    </Container>
  );
};

export default Home;

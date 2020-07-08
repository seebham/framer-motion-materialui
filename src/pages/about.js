import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography } from "@material-ui/core";
import MotionDiv from "../components/motion";

const About = () => {
  return (
    <Container className="contain">
      <MotionDiv>
        <Typography component="h1" variant="h2">
          Who Am I?
        </Typography>
      </MotionDiv>
      <Typography component="h2" variant="h5">
        Go back to home!
      </Typography>
      <Link to="/">Home</Link>
    </Container>
  );
};

export default About;

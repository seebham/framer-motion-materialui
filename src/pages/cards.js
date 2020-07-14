import React from "react";
import {
  makeStyles,
  Container,
  Box,
  TextField,
  Button
} from "@material-ui/core";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    overflowX: "auto"
  },
  boxes: {
    minWidth: "70vw",
    minHeight: 200,
    border: "1px solid #000",
    marginRight: 10,
    marginLeft: 10
  }
}));

const Cards = () => {
  const classes = useStyles();
  const [input, setInput] = React.useState("");
  const [matches, setMatches] = React.useState(["Solo", "Duo", "Squad"]);

  const boxContainer = {
    show: {
      x: 0,
      transition: {
        staggerChildren: 0.5,
        ease: "backIn"
      }
    },
    hide: { x: "120vw" }
  };
  const boxes = {
    show: { x: 0 },
    hide: { x: "120vw" }
  };
  return (
    <Container className="contain">
      <motion.div variants={boxContainer} initial="hide" animate="show">
        <Box className={classes.container}>
          {matches &&
            matches.map(match => (
              <motion.div key={match} variants={boxes}>
                <Box className={classes.boxes}>{match}</Box>
              </motion.div>
            ))}
        </Box>
      </motion.div>
      <TextField
        type="text"
        variant="outlined"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <Button onClick={e => setMatches(prev => [...prev, input])}>Add</Button>
      <Link to="/">Home</Link>
    </Container>
  );
};

export default Cards;

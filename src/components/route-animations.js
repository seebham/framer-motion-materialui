import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export const AniRoutes = ({
  children,
  exitBeforeEnter = true,
  initial = false
}) => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter={exitBeforeEnter} initial={initial}>
      <Switch location={location}>{children}</Switch>
    </AnimatePresence>
  );
};

const Transitions = {
  in: {
    opacity: 1,
    y: 0,
    overflow: "visible",
    transition: {
      delayChildren: 0.5
    }
  },
  out: {
    opacity: 0,
    y: -100,
    overflow: "hidden"
  }
};

export const TransitRoutes = ({ children, exact, path }) => {
  return (
    <Route exact={exact} path={path}>
      <motion.div
        key={path}
        variants={Transitions}
        initial="out"
        animate="in"
        exit="out"
      >
        {children}
      </motion.div>
    </Route>
  );
};

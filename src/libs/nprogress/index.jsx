/**
 * @version 3.0.0
 * @author Trejocode - Tane Morgan, Sergio Trejo
 * @description Componente Progress
 */

import { useNProgress } from "@tanem/react-nprogress";
import PropTypes from "prop-types";
import React from "react";
import Bar from "./bar";
import Container from "./container";
import Spinner from "./spinner";

const Progress = ({ isAnimating }) => {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating,
  });

  return (
    <Container isFinished={isFinished} animationDuration={animationDuration}>
      <Bar progress={progress} animationDuration={animationDuration} />
      <Spinner />
    </Container>
  );
};

Progress.propTypes = {
  isAnimating: PropTypes.bool.isRequired,
};

export default Progress;

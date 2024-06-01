/**
 * @description Componente Progress
 */

import { Fragment } from "react";
import Bar from "./Bar";
import Spinner from "./Spinner";
import Container from "./Container";
import { useNProgress } from "@tanem/react-nprogress";
import type { TypeProgressProps } from "@/ts/nprogress";

const Progress = ({ isAnimating }: TypeProgressProps): JSX.Element => {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating,
  });

  return (
    <Container isFinished={isFinished} animationDuration={animationDuration}>
      <Fragment>
        <Bar progress={progress} animationDuration={animationDuration} />
        <Spinner />
      </Fragment>
    </Container>
  );
};
export default Progress;

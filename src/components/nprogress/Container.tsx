/**
 * @description Componente Container
 */

import type { TypeContainerProps } from "@/ts/nprogress";

const Container = ({
  children,
  isFinished,
  animationDuration,
}: TypeContainerProps): JSX.Element => (
  <div
    style={{
      opacity: isFinished ? 0 : 1,
      pointerEvents: "none",
      transition: `opacity ${animationDuration}ms linear`,
    }}
  >
    {children}
  </div>
);

export default Container;

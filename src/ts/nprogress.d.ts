/**
 * @description Tipado del componente Progress
 */

export type TypeProgressProps = {
  isAnimating: boolean;
};

export type TypeBarProps = {
  progress: number;
  animationDuration: number;
};

export type TypeContainerProps = {
  isFinished: boolean;
  children: JSX.Element;
  animationDuration: number;
};

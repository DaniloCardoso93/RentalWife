import { ReactNode } from "react";
import { TransitionStyled } from "./styles";

interface IAnimate {
  children: ReactNode;
}

export const Transition = ({ children }: IAnimate) => {
  const transitions = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <TransitionStyled
      variants={transitions}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
      className="animatedPage"
    >
      {children}
    </TransitionStyled>
  );
};

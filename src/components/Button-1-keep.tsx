import { MouseEvent } from "react";

interface Props {
  children: string;
  classes: string;
  onClick: (e: MouseEvent) => void;
}

function Button({ children, classes, onClick }: Props) {
  //   const handleClick = (e: MouseEvent) => console.log("Clicked:", e.target);

  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
}

export default Button;

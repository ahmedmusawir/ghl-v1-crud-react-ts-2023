import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState, MouseEvent } from "react";

interface Props {
  onClick: () => void;
}

function Like({ onClick }: Props) {
  const [status, setStatus] = useState(false);

  const handleClick = (e: MouseEvent) => {
    e.stopPropagation(); // Stop the event from bubbling up
    setStatus(!status);
    onClick();
  };

  return (
    <div className="float-right" onClick={handleClick}>
      {status && <AiFillHeart color="red" size={"2rem"} />}
      {!status && <AiOutlineHeart color="red" size={"2rem"} />}
    </div>
  );
}

export default Like;

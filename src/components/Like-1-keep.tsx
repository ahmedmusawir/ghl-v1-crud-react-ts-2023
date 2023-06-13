import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

function Like() {
  const [status, setStatus] = useState(false);

  return (
    <div className="float-right">
      {status && (
        <AiFillHeart
          color="red"
          size={"2rem"}
          onClick={() => setStatus(true)}
        />
      )}
      {!status && (
        <AiOutlineHeart
          color="red"
          size={"2rem"}
          onClick={() => setStatus(false)}
        />
      )}
    </div>
  );
}

export default Like;

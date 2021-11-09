import React from "react";
import { useState } from "react";

function Count() {
  const [like, setLike] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setLike(like + 1);
        }}
      >
        💖{like}
      </button>
    </div>
  );
}

export default Count;

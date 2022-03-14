import { useEffect, useState } from "react";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";

export function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  useEffect(() => {
    console.log("like is updated", like);
  }, [like]);
  return (
    <div className="counter-container">
      {/* <button onClick={() => setLike(like + 1)} className="bt-sz-lg">
        👍{like}
      </button> */}
      <IconButton
        aria-label="like movie"
        onClick={() => setLike(like + 1)}
        className="bt-sz-lg"
        color="primary"
      >
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>
      <IconButton
        aria-label="dislike movie"
        onClick={() => setDisLike(disLike + 1)}
        className="bt-sz-lg"
        color="error"
      >
        <Badge badgeContent={disLike} color="error">
          👎
        </Badge>
      </IconButton>
    </div>
  );
}

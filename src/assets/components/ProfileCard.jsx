import { useState } from "react";

function ProfileCard({ name, title, description }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div style={style.card}>
      <h2>{name}</h2>
      <h3>{title}</h3>
      <p>{showMore ? description : description.substring(0, 100) + "....."}</p>
      <button style={style.button} onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show less" : "Show More"}
      </button>
    </div>
  );
}

const style = {
  card: {
    width: "400px",
    height: "300px",
    backgroundColor: "pink",
    padding: "30px",
    borderRadius: "15px",
    marginBottom: "20px",
  },
  button: {
    borderColor: "black",
    borderWidth: "2px",
    borderStyle: "solid",
  },
};
export default ProfileCard;

import { useState, useEffect } from "react";

const Functional = () => {
  const [number, setNumber] = useState(23);
  const [name, setName] = useState("Asilbek");

  const plus = () => {
    setNumber((prev) => prev + 1);
  };

  const minus = () => {
    setNumber((prev) => prev - 1);
  };

  const changeName = () => {
    setName("Muslimbek");
  };

  /* useEffect(() => {
    console.log('component did mount/update');
  }); */

  useEffect(() => {
    console.log("component did mount");
  }, []);

  /* useEffect(() => {
    console.log("number or name changed");
  }, [number, name]); */

  return (
    <div>
      <div>Functional Component {number}</div>
      <div>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
      </div>
      <br /> <br />
      <div>{name}</div>
      <div>
        <button onClick={changeName}>Change Name</button>
      </div>
    </div>
  );
};

export default Functional;

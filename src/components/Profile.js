import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log("useEffect");
  // }, []);

  return (
    <>
      {/* {console.log("return")} */}
      <h1>this is Profile function</h1>
      {/* <h3>{props.name}</h3>
      <h3>{props.xyz}</h3>
      <h3>Count : {count}</h3>
      <button
        onClick={() => {
          setCount(1);
        }}
      >
        Submit
      </button> */}
    </>
  );
};

export default Profile;

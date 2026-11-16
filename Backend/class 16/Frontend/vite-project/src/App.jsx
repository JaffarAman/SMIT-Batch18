import axios from "axios";
import React, { useRef } from "react";

const App = () => {
  const inputRef = useRef(null);

  const submitHandler = async () => {
    try {
      console.log(inputRef.current.files[0]);
      // form data
      const file = inputRef.current.files[0];
      const formData = new FormData();
      formData.append("profilePic", file);

      const response = await axios.post(
        "http://localhost:5000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      console.log("response", response);

      // // Display the key/value pairs
      // for (const pair of formData.entries()) {
      //   console.log(pair[0], pair[1]);
      // }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <input type="file" ref={inputRef} />
      <button onClick={submitHandler}>Submit!</button>
    </div>
  );
};

export default App;

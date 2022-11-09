import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Wrapper from "Wrapper";
import { RouterProvider } from "react-router-dom";
import { BaseRouter } from "BaseRouter";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getMembers();
  }, []);

  const getMembers = async () => {
    try {
      const route = "http://localhost:5000/members";
      const res = await axios.get(route);
      setData(res.data.members);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper>
      <RouterProvider router={BaseRouter()} />
    {/* <div>
      {data.map((member, index) => (
        <p key={index}>{member}</p>
      ))}
    </div> */}
    </Wrapper>
  );
}

export default App;

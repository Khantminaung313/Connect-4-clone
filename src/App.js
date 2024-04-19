import "./App.css";
import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => console.log(json));
    };

    fetchData();
  });
  return <></>;
};

export default App;

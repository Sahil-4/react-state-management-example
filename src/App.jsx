import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import List from "./Components/List";
import { fetchData } from "./API";

function App() {
  // State for the user data and filtered results
  const [allUsers, setAllUsers] = useState([]);
  const [results, setResults] = useState([]);

  // Function to update results 
  const updateData = (plan) => {
    if (plan === "All") {
      setResults(allUsers);
      return;
    }

    const data = allUsers.filter((user) => {
      return user.subscription.plan === plan;
    });

    setResults(data);
  };

  // Function to fetch data from the API
  const getData = async () => {
    const data = await fetchData();
    console.log(data);
    setAllUsers(data);
    setResults(data);
  };

  // Effect hook to fetch data on component mount
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar updateFunction={updateData} />
      <List users={results} />
    </>
  );
}

export default App;

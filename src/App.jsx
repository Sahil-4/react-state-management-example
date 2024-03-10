import "./App.css";
import Navbar from "./Components/Navbar";
import List from "./Components/List";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getData } from "./Store/Slices/usersSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

// are we getting data 
// lets add a console log and check 

  return (
    <>
      <Navbar />
      <List />
    </>
  );
}

export default App;

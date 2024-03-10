import { useDispatch } from "react-redux";
import { updateFunction } from "../Store/Slices/usersSlice";

function Navbar() {
  const dispatch = useDispatch();

  return (
    <div className="navbar">
      <span>React State Management Tutorial</span>

      <ul>
        <li onClick={() => dispatch(updateFunction("All"))}>All</li>
        <li onClick={() => dispatch(updateFunction("Basic"))}>Basic Plan</li>
        <li onClick={() => dispatch(updateFunction("Gold"))}>Gold Plan</li>
        <li onClick={() => dispatch(updateFunction("Student"))}>Student Plan</li>
        <li onClick={() => dispatch(updateFunction("Premium"))}>Premium Plan</li>
      </ul>
    </div>
  );
}

export default Navbar;

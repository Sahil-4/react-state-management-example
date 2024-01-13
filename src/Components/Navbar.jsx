
function Navbar({ updateFunction }) {
  // updateFunction needs type : All, Basic, Gold, Student, Premium 

  return (
    <div className="navbar">
      <span>React State Management Tutorial</span>

      <ul>
        <li onClick={() => updateFunction("All")}>All</li>
        <li onClick={() => updateFunction("Basic")}>Basic Plan</li>
        <li onClick={() => updateFunction("Gold")}>Gold Plan</li>
        <li onClick={() => updateFunction("Student")}>Student Plan</li>
        <li onClick={() => updateFunction("Premium")}>Premium Plan</li>
      </ul>
    </div>
  );
}

export default Navbar;

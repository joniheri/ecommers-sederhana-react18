import React, { useContext, useState } from "react";
import { GlobalContext } from "../Contexts/GlobalContext";

export default function About(props) {
  const [globalState, globalDispatch] = useContext(GlobalContext);

  const handleLogin = () => {
    globalDispatch({
      type: "PROCESS_LOGIN",
    });
  };

  // Search
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const data = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "David Johnson" },
    { id: 4, name: "Sarah Davis" },
  ];
  const handleChange = (event) => {
    setSearchInput(event.target.value);
    searchInData(event.target.value);
  };
  const searchInData = (searchInput) => {
    const results = data.filter((item) =>
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchResults(results);
  };
  // end Search

  return (
    <div className="container">
      <h1>About </h1>
      <p style={{ textAlign: "justify" }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro tenetur
        eveniet aliquid voluptate, culpa ex veritatis aut, esse voluptatem quos
        quidem repellat assumenda eaque maiores minus explicabo saepe expedita
        unde? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Consectetur velit minus voluptatibus blanditiis, possimus eos quam
        recusandae aperiam magni nesciunt dolor eveniet laborum perferendis iure
        eum! Mollitia neque iure accusamus?
      </p>
      <button onClick={handleLogin} className="btn btn-success mb-3">
        Login
      </button>
      <input
        type="text"
        className="form-control"
        placeholder="Seacrh..."
        value={searchInput}
        onChange={handleChange}
      />
      <ul>
        {searchResults.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

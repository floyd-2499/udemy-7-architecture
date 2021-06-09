import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from './components/Header'

const items = [
  {
    title: "What is React?",
    content: "React is a front-end JS framework",
  },
  {
    title: "Why use React?",
    content: " Some demo text ",
  },
  {
    title: "DEMO question",
    content: " Some demo text here ",
  },
];

const options = [
  {
    label: "Color Red",
    value: "red",
  },
  {
    label: "Color Green",
    value: "Green",
  },
  {
    label: "Color Blue",
    value: "Blue",
  },
];

// const showAccordion = () => {
//   if (window.location.pathname === "/") {
//     return <Accordion items={items} />;
//   }
// };
// const showList = () => {
//   if (window.location.pathname === "/list") {
//     return <Search />;
//   }
// };
// const showDropdown = () => {
//   if (window.location.pathname === "/dropdown") {
//     return <Dropdown />;
//   }
// };
// const showTranslate = () => {
//   if (window.location.pathname === "/translate") {
//     return <Translate />;
//   }
// };

// const showComponent = (route, component) => {
//   return window.location.pathname === route ? component : null;
// }

const App = () => {
    const [selected, setSelected] = useState(options[0]);
  //   const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <Header />
      {/* <button onClick={()=> setShowDropdown(!showDropdown)}>Toggle Dropdown</button> */}
      {/* <Accordion items={items}/> */}
      {/* <Search /> */}
      {/* {  showDropdown ? (
                <Dropdown
                selected={selected}
                onSelectedChange={setSelected}
                options={options}
              /> ) : null
      } */}
      {/* {showAccordion()}
      {showList()}
      {showDropdown()}
      { showTranslate()} */}
      {/* <Translate /> */}
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown 
        label = "Select a color"
        options = {options}
        selected = {selected}
        onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;

import React from "react";

const Homepage = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <EmployeeList />
    </div>
  );
};

const Header = () => {
  return <h1>Employee List</h1>;
};

const SearchBar = () => {
  return <input type="text" placeholder="Search for an employee" />;
};

const EmployeeList = () => {
  return (
    <ul>
      <EmployeeListItem name="Leonardo da Vinci" jobTitle="Manager" />
      <EmployeeListItem name="Michelangelo" jobTitle="Developer" />
      <EmployeeListItem name="Vincent van Gogh" jobTitle="Designer" />
    </ul>
  );
};

const EmployeeListItem = ({ name, jobTitle }) => {
  return (
    <li>
      <h2>{name}</h2>
      <p>{jobTitle}</p>
    </li>
  );
};

export default Homepage;

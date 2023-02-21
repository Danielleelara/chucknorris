import React, { useEffect, useState } from "react";
import Filter from "../components/Filter";
import Makes from "./Makes";

interface ChuckProps {
  value?: string;
  created_at?: string;
  categories?: string;
}

const Home = () => {
  return (
    <div
      style={{
        background: "white",
        textAlign: "center",
        margin: "100px auto",
        color: "red",
      }}
    >
      <h1>Piadas do Chuck Norris</h1>
      <Filter />
      <Makes />
    </div>
  );
};

export default Home;

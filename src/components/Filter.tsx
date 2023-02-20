import React, { useEffect, useState } from "react";

interface ChuckProps {
  value?: string;
  created_at?: string;
  categories?: string;
}

const Filter = () => {
  const [selectValue, setSelectValue] = useState("");
  const [dados, setDados] = useState<ChuckProps>();
  const [category, setCategory] = useState([]);

  const getDetails = async () => {
    try {
      const res = await fetch(`api/jokes/random?category=${selectValue}`, {
        method: "GET",
      });
      const response = await res.json();
      setDados(response);
      return await response;
    } catch (error) {
      console.log(error);
    }
  };

  const getCategory = async () => {
    try {
      const res = await fetch(`api/jokes/categories`, {
        method: "GET",
      });
      const response = await res.json();
      setCategory(response);
      return await response;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div
      style={{
        background: "white",
        textAlign: "center",
        margin: "0 auto",
        color: "green",
      }}
    >
      <h1>Escolha uma piada por categoria </h1>
      <label
        htmlFor="categoria"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "0 100px",
        }}
      >
        {/* Categorias:
        {category.map((category: string) => (
          <p>{category}</p>
        ))} */}
      </label>
      {/* <input
        type="text"
        id="categoria"
        name="categoria"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      /> */}
      <select
        name="categoria"
        id="categoria"
        onChange={(e) => setSelectValue(e.target.value)}
        style={{
          margin: "20px",
          background: "gray",
          color: "pink",
          width: "10%",
          height: "30px",
          fontSize: "20px",
          borderRadius: "10px",
          alignItems: "center",
          textAlign: "center",
          textTransform: "capitalize",
        }}
      >
        {category.map((category: string) => (
          <option value={category}>{category}</option>
        ))}
      </select>

      <button
        onClick={getDetails}
        style={{
          marginTop: "20px",
          background: "black",
          color: "white",
          width: "10%",
          height: "30px",
          fontSize: "20px",
          borderRadius: "10px",
          alignItems: "center",
        }}
      >
        Pesquisar
      </button>
      <p>{dados?.value || "sem registro"}</p>
      <p>Criada em : {dados?.created_at || "sem registro"}</p>
      <p>
        Categoria: {!!dados?.categories ? dados?.categories[0] : "sem registro"}
      </p>
    </div>
  );
};

export default Filter;

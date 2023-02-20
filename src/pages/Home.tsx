import React, { useEffect, useState } from "react";
import Filter from "../components/Filter";

interface ChuckProps {
  value?: string;
  created_at?: string;
  categories?: string;
}

const Home = () => {
  //   const [dados, setDados] = useState<ChuckProps>();

  //   const getDados = async () => {
  //     try {
  //       const res = await fetch(`api/jokes/random`, {
  //         method: "GET",
  //       });
  //       const response = await res.json();
  //       console.log(response);
  //       setDados(response);
  //       return await response;
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   useEffect(() => {
  //     getDados();
  //   }, []);

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
      {/* <p>{dados?.value || "sem registro"}</p>
      <p>Criada em : {dados?.created_at || "sem registro"}</p>
      <p>
        Categoria: {!!dados?.categories ? dados?.categories[0] : "sem registro"}
      </p>
      <div>
        <button
          onClick={() => getDados()}
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
          Nova Piada
        </button> */}
      {/* </div> */}
    </div>
  );
};

export default Home;

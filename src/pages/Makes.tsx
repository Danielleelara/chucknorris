import React, { useEffect, useState } from "react";

interface ProductsProps {
  name?: string;
  id?: string;
  price?: string;
}

const Makes = () => {
  const [products, setProducts] = useState([]);
  const [marca, setMarcas] = useState("");

  const getProducts = async () => {
    try {
      const res = await fetch(`/products.json?brand=${marca}`, {
        method: "GET",
      });
      const response = await res.json();
      setProducts(response);
    } catch (error) {
      alert("Não foram encontrados produtos dessa marca");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <h2>Maquiagens</h2>
      <input
        type="text"
        value={marca}
        onChange={(e) => setMarcas(e.target.value)}
      ></input>
      <button
        onClick={getProducts}
        style={{
          margin: "20px",
          background: "black",
          color: "white",
          width: "10%",
          height: "30px",
          fontSize: "20px",
          borderRadius: "10px",
          alignItems: "center",
        }}
      >
        Pesquise
      </button>
      {products &&
        products?.map((prod: ProductsProps, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "50%",
                background: "gray",
                margin: "0 auto",
                padding: "0 20px",
              }}
            >
              <p
                style={{
                  color: "red",
                  fontSize: "20px",

                  marginRight: "20px",
                }}
              >
                Nome: {prod?.name || "deu ruim"}
              </p>
              <p
                style={{
                  color: "red",
                  fontSize: "20px",
                }}
              >
                Valor: {prod?.price || "deu ruim"}
              </p>
            </div>
          );
        })}
    </>
  );
};

export default Makes;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";

function Accueil() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllProduct();
    console.log("data", data);
  }, []);

  const getAllProduct = async () => {
    await fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setData(res.products));
  };

  return (
    <div>
      <Header />
      <div style={{ margin: 80 }}>
        {data.map((item) => {
          return (
            <nav className="navigation1">
              <ul key={item.id}>
                <li>
                  <Link to={`/detail/${item.id}`}>{item.category}</Link>
                </li>
              </ul>
            </nav>
          );
        })}
      </div>
    </div>
  );
}

export default Accueil;

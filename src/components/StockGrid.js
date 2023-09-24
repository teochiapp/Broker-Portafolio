import React, { useEffect, useState } from "react";
import axios from "axios";

const StockGrid = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // URL de la API
    const apiUrl =
      "https://api.polygon.io/v1/open-close/QCOM/2023-09-21?adjusted=true&apiKey=1A6Y5ubfS5BuUBP1XF6uUUoUyqhAVYX8";

    // Realiza la solicitud GET a la API
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error al cargar los datos:", error);
      });
  }, []);

  const gananciaPorcentual = data
    ? (((data.close - data.open) / data.open) * 100).toFixed(2)
    : null;

  return (
    <section className="game-section">
      {data ? (
        <div className="stock-table">
          <h2 className="line-title">{data.symbol}</h2>
          <p>Precio apertura: {data.open}</p>
          <p>Precio cierre: {data.close}</p>
          <p>Precio Mínimo: {data.low}</p>
          <p>Precio Máximo: {data.high}</p>
          <p style={{ color: gananciaPorcentual >= 0 ? "green" : "red" }}>
            Ganancia: {gananciaPorcentual}%
          </p>
        </div>
      ) : (
        <p>No se encontraron datos disponibles.</p>
      )}

      <h2 className="line-title">Tus compradas</h2>
      <div className="grid">
        <div
          className="item"
          style={{ backgroundImage: "url(/logos/qualcomm.png)" }}
        >
          <div className="item-desc">
            <h3>Qualcomm</h3>
            <p>
              Fundamentales insuperables, y técnicos decentes. Mucha oportunidad
              a largo plazo. Sector tecnológico. Mejor marca de procesadores
              para celulares y firmó con APPLE hasta 2030 el día de mi compra.
            </p>
          </div>
        </div>
        <div
          className="item"
          style={{ backgroundImage: "url(/logos/disney.png)" }}
        >
          <div className="item-desc">
            <h3>Disney</h3>
            <p>
              Precios en mínimos históricos y muy probable que rebote
              fuertemente pronto. La empresa no está mal fundamentalmente como
              parece. Aprovechar que nadie las quiere AHORA.
            </p>
          </div>
        </div>
        <div
          className="item"
          style={{ backgroundImage: "url(/logos/hershey.png)" }}
        >
          <div className="item-desc">
            <h3>Hershey</h3>
            <p>
              Recomendación de Andy. El Arcor de EEUU, primero en su rubro de
              snacks. Precios muy baratos y fundamentales excelentes.
            </p>
          </div>
        </div>
        <div
          className="item"
          style={{ backgroundImage: "url(/logos/vista.png)" }}
        >
          <div className="item-desc">
            <h3>Vista</h3>
            <p>
              Recomendación de Andy. El Arcor de EEUU, primero en su rubro de
              snacks. Precios muy baratos y fundamentales excelentes.
            </p>
          </div>
        </div>
        <div
          className="item"
          style={{ backgroundImage: "url(/logos/arkk.png)" }}
        >
          <div className="item-desc">
            <h3>ARKK</h3>
            <p>
              Recomendación de Andy. El Arcor de EEUU, primero en su rubro de
              snacks. Precios muy baratos y fundamentales excelentes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StockGrid;

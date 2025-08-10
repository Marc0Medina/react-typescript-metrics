import React, { useState } from "react";

type Metric = {
  title: string;
  value: number;
  description: string;
};

const initialMetrics: Metric[] = [
  { title: "Usuarios activos", value: 1200, description: "En la última hora" },
  { title: "Tasa de conversión", value: 5, description: "Porcentaje (%)" },
  { title: "Sesiones diarias", value: 3200, description: "Promedio diario" },
];

export const App: React.FC = () => {
  const [metrics, setMetrics] = useState<Metric[]>(initialMetrics);

  const refreshMetrics = () => {
    setMetrics((m) =>
      m.map((metric) => ({
        ...metric,
        value: Math.floor(metric.value * (0.8 + Math.random() * 0.4)),
      }))
    );
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      <h1>Dashboard sencillo</h1>
      <div
        style={{
          display: "flex",
          gap: 20,
          flexWrap: "wrap",
          maxWidth: 600,
        }}
      >
        {metrics.map(({ title, value, description }) => (
          <div
            key={title}
            style={{
              border: "1px solid #ccc",
              borderRadius: 8,
              padding: 16,
              minWidth: 150,
              boxShadow: "2px 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{title}</h3>
            <p style={{ fontSize: 32, margin: "8px 0" }}>{value}</p>
            <small>{description}</small>
          </div>
        ))}
      </div>
      <button
        onClick={refreshMetrics}
        style={{
          marginTop: 20,
          padding: "10px 20px",
          fontSize: 16,
          cursor: "pointer",
        }}
      >
        Refrescar métricas
      </button>
    </div>
  );
};

export default App;

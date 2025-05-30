import { useEffect, useState } from "react";
import "./index.css";

const animais = [
  { nome: "Cachorro", info: "O cachorro é conhecido como o melhor amigo do homem.", image: "dog.webp" },
  { nome: "Gato", info: "Os gatos dormem em média 12 a 16 horas por dia.", image: "gato.jpg" },
  { nome: "Elefante", info: "Os elefantes têm excelente memória e vivem em grupos.", image: "elefante.webp" },
  { nome: "Tartaruga", info: "Tartarugas podem viver mais de 100 anos.", image: "tartaruga.jpg" },
];

function App() {
  const [invertido, setInvertido] = useState(false);
  const [animalInfo, setAnimalInfo] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === "p") {
        setInvertido((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className={`app ${invertido ? "invertido" : ""}`}>
      <h1>🐾 Bem-vindo ao Mundo Animal!</h1>
      <p>Pressione <strong>P</strong> para girar o site. Clique em um animal para saber mais!</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
        {animais.map((animal, index) => (
          <button key={index} className="fixo" onClick={() => setAnimalInfo(animal)}>
            {animal.nome}
          </button>
        ))}
      </div>

      {animalInfo && (
        <div style={{
          marginTop: '2rem',
          background: 'rgba(255,255,255,0.9)',
          padding: '1rem',
          borderRadius: '12px',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          maxWidth: '500px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <h2>{animalInfo.nome}</h2>
          <img
            src={animalInfo.image}
            alt={animalInfo.nome}
            style={{
              width: '100%',
              maxHeight: '300px',
              objectFit: 'cover',
              borderRadius: '12px',
              marginBottom: '1rem'
            }}
          />
          <p>{animalInfo.info}</p>
        </div>
      )}
    </div>
  );
}

export default App;

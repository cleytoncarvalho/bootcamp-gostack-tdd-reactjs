import React, { useState, useEffect } from "react";

const TechList = () => {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState("");

  useEffect(() => {
    const techsStorage = localStorage.getItem("techs");

    if (techsStorage) {
      setTechs(JSON.parse(techsStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("techs", JSON.stringify(techs));
  }, [techs]);

  function handleSubmit(e) {
    e.preventDefault();

    setTechs([...techs, newTech]);
    setNewTech("");
  }

  return (
    <form onSubmit={handleSubmit} data-testid="tech-form">
      <ul data-testid="tech-list">
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <label htmlFor="tech">Tech</label>
      <input
        type="text"
        id="tech"
        value={newTech}
        onChange={e => setNewTech(e.target.value)}
      />

      <button>Adicionar</button>
    </form>
  );
};

export default TechList;

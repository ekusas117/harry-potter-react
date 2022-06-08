// empleado-app/index.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Personaje from "../detail-card/DetailCard";
import './MainList.css'

function MainList() {
  const [personajes, setTodos] = useState([]);
  const { id } = useParams();

  const fetchApi = async () => {
    let url = 'http://hp-api.herokuapp.com/api/characters';
    if(id !== 'all') {
      url += '/'+ id;
    }
    
    const response = await fetch(url);
    const json = await response.json();
    console.log(id)
    setTodos(json);
  };
  
  useEffect(() => {
    fetchApi();
    console.log('update');
  }, [id]);
  

  return (
        <>
            {(() => {
              if (personajes.length > 0) {
                return (
                  <div key={personajes.name} className="cards-container">
                    {
                      personajes.map((personaje) => {
                        return <Personaje personaje={personaje}/>
                      })
                    }
                  </div>
                );
              } else {
                return <p className="text-center">Cargando personajes...{personajes}</p>;
              }
            })()}
        </>
  )
}

export default MainList
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const Cards = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    /**************************************************
     *OBTENGO LOS PRIMEROS DATOS DE LA API
     QUE TRAE TODOS LOS POKEMONES GENERAL
     *************************************************/
    const getPokemons = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20"
      );
      const listPokemons = await response.json();
      //destructutro y obtengo la url dentro de "results"
      const { results } = listPokemons;
      console.log(results);

      /**************************************************
       *RECORRO EL RESULTADO DE LA PRIMERA URL PARA
       EXTRAER LOS DATOS DE CADA POKEMON POR SEPARADO
       *************************************************/
      const newPokemons = results.map(async (poke) => {
        const response = await fetch(poke.url); //https://pokeapi.co/api/v2/pokemon/ID/
        const data = await response.json();
        console.log(data);

        return {
          id: data.id,
          name: data.name,
          urlImg: data.sprites.other.dream_world.front_default,
          species: data.species.name,
        };
      });
      setPokemon(await Promise.all(newPokemons));
    };

    getPokemons();
  }, []);

  return (
    <>
      {pokemon.map((el) => {
        return (
          <Card
            style={{
              width: "18rem",
            }}
            key={el.id}
          >
            <Card.Header className="text-center">
              <h1> {el.name}</h1>
            </Card.Header>
            <Card.Img variant="top" src={el.urlImg} />
            <Card.Body>
              <Card.Title style={{ alignSelf: "flex-end" }}>
                Specie: {el.species}
              </Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default Cards;

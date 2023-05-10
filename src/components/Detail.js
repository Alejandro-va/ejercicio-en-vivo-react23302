import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Detail = (pok) => {
  const { id } = useParams();

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
      const data = await response.json();
      setPokemon(data);
    };
    fetchPokemon();
  }, [id]);
  // console.log(pokemon.name);

  return (
    <>
      {pokemon && (
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={pokemon.sprites.other.dream_world.front_default}
          />
          <Card.Body>
            <Card.Title>{pokemon.name}</Card.Title>
            <Card.Text>
              Weight: {pokemon.weight} kg
              <br />
              Height: {pokemon.height} m
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default Detail;

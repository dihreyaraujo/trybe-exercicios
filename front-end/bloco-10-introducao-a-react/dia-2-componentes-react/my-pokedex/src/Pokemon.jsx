import React from 'react';
import pokemons from './data'

class Pokemon extends React.Component {
  render() {
    return (
      pokemons.map((pokemon) => (
        <div key={pokemon.id}>
          <p>{pokemon.name}</p>
          <p>{pokemon.type}</p>
          <p>{pokemon.averageWeight.value}{pokemon.averageWeight.measurementUnit}</p>
          <img src={pokemon.image} alt={pokemon.name} />
        </div>
      ))
    )
  }
}

export default Pokemon
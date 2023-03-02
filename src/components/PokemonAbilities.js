import { useEffect, useState } from "react";
import Image from "next/image";

const PokemonAbilities = ({ url }) => {
  const [pokemonAbilities, setPokemonAbilities] = useState(null);
  const [pokemonStats, setPokemonStats] = useState(null);
  const [pokemonImage, setPokemonImage] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setPokemonAbilities(data.abilities);
      setPokemonStats(data.stats);
      setPokemonImage(data.sprites);
    };

    fetchPokemon();
  }, [url]);

  return (
    <div className="card bg-primary text-primary-content my-3 md:w-96">
      <div className="card-body">
        <div className="flex justify-between">
          <div className="mr-7">
            <h4 className="card-title mb-2.5">Abilities</h4>
            <ul>
              {Array.isArray(pokemonAbilities)
                ? pokemonAbilities.map(({ ability }) => {
                    return (
                      <li className="capitalize" key={ability.name}>
                        {ability.name}
                      </li>
                    );
                  })
                : null}
            </ul>
          </div>
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              {pokemonImage === null ? null : (
                <Image
                  src={pokemonImage.front_default}
                  width="96"
                  height="96"
                  alt=""
                />
              )}
            </div>
          </div>
        </div>
        <hr className="mt-2.5 mb-1.5" />
        <h4 className="card-title">Stats</h4>
        <ul>
          {Array.isArray(pokemonStats)
            ? pokemonStats.map(({ stat }) => {
                return (
                  <li className="capitalize" key={stat.name}>
                    {stat.name}
                  </li>
                );
              })
            : null}
        </ul>
      </div>
    </div>
  );
};

export default PokemonAbilities;

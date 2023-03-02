import dynamic from "next/dynamic";
import Link from "next/link";
import { useState, useEffect } from "react";

const DynamicPokemonAbilities = dynamic(() => import("./PokemonAbilities"), {
  loading: () => "Loading...",
});

export const PokemonSummary = ({ pokemon }) => {
  const [showAbilities, setShowAbilities] = useState(false);

  useEffect(() => {
    setShowAbilities(false);
  }, [pokemon]);

  if (!pokemon) {
    return null;
  }

  return (
    <li className="my-3 card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title uppercase">{pokemon.name}</h2>
        <div className="card-actions justify-center">
          <button
            className="btn btn-xs btn-active btn-ghost"
            onClick={() => setShowAbilities(!showAbilities)}
          >
            Abilities
          </button>
          <button className="btn btn-xs btn-outline btn-warning">
            <Link href={`/pokemon/${pokemon.name}`}>JSON</Link>
          </button>
        </div>
        {showAbilities ? <DynamicPokemonAbilities url={pokemon.url} /> : null}
      </div>
    </li>
  );
};

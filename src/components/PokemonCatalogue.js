import { PokemonSummary } from "@/components/PokemonSummary";

export const PokemonCatalogue = ({
  pokemon,
  pokemonIndex,
  setPokemonIndex,
}) => {
  return (
    <ol className="flex items-center justify-center flex-col">
      {pokemon.length > 0 ? (
        <>
          <PokemonSummary pokemon={pokemon[pokemonIndex]} />
          <div className="flex">
            {pokemonIndex !== pokemon.length - 1 ? (
              <button
                className="btn btn-outline btn-xs mt-8 w-20 mr-2.5"
                onClick={() => setPokemonIndex(pokemonIndex + 1)}
              >
                Next
              </button>
            ) : null}
            {pokemonIndex !== 0 ? (
              <button
                className="btn btn-outline btn-xs mt-8"
                onClick={() => setPokemonIndex(pokemonIndex - 1)}
              >
                Previous
              </button>
            ) : null}
          </div>
        </>
      ) : (
        "No Pokemon Match Your Search Term"
      )}
    </ol>
  );
};

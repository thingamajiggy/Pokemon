import { PokemonSummary } from "@/components/PokemonSummary";

export const PokemonList = ({ pokemon }) => {
  return (
    <ol className="flex flex-col justfy-center items-center">
      {pokemon.length > 0
        ? pokemon.map((pokemon) => {
            return <PokemonSummary key={pokemon.name} pokemon={pokemon} />;
          })
        : "No Pokemon Match Your Search Term"}
    </ol>
  );
};

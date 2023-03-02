import { useState, useMemo, useEffect } from "react";
import { Search } from "@/components/Search";
import { PokemonList } from "@/components/PokemonList";
import { PokemonCatalogue } from "@/components/PokemonCatalogue";
import Link from "next/link";

export default function Pokemon(props) {
  const { results, totalPokemon } = props;
  const [searchValue, setSearchValue] = useState("");
  const [viewAs, setViewAs] = useState("list");
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const filteredPokemon = useMemo(() => {
    if (!searchValue) {
      return results;
    }

    return results.filter((pokemonResult) => {
      return pokemonResult.name.includes(searchValue);
    });
  }, [searchValue, results]);

  useEffect(() => {
    setPokemonIndex(0);
  }, [searchValue, viewAs]);

  return (
    <>
      <div className="navbar bg-primary text-slate-900">
        <Link className="btn btn-ghost normal-case text-xl" href="/">
          Pokemon World!
        </Link>
      </div>

      <div className="flex flex-col items-center bg-slate-50 py-5">
        <div className="stat-title">Total Pokemon</div>
        <div className="stat-value">{totalPokemon}</div>
      </div>

      <div className="bg-slate-50">
        <Search value={searchValue} setValue={setSearchValue} />
      </div>
      <div className="flex flex-col items-center justify-center bg-yellow-200">
        <button
          className="btn btn-warning mt-5 mb-2.5"
          onClick={() => setViewAs(viewAs === "list" ? "catalogue" : "list")}
        >
          View As {viewAs === "list" ? "Catalogue" : "List"}
        </button>
      </div>
      <div className="bg-yellow-200 flex-1">
        {viewAs === "list" ? (
          <PokemonList pokemon={filteredPokemon} />
        ) : (
          <PokemonCatalogue
            setPokemonIndex={setPokemonIndex}
            pokemonIndex={pokemonIndex}
            pokemon={filteredPokemon}
          />
        )}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=2000");
  const data = await response.json();

  return {
    props: {
      totalPokemon: data.count,
      results: data.results.sort((pokemonA, pokemonB) => {
        return pokemonA.name.localeCompare(pokemonB.name);
      }),
    },
  };
}

import PokemonCard from "../components/PokemonCard";
import Pagination from "../components/Pagination";
import React, { useEffect, useState } from "react";
import useAsnyc from "../hooks/useAsync";
import PokemonServices from "../services/PokemonsServices";
import { useNavigate } from "react-router-dom";
import useQuery from "../hooks/useQuery";
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";

function Pokemons() {
  const limit = 12;
  const [count, setCount] = useState<number>(0);
  const { execute, status } = useAsnyc(PokemonServices.getPokemons, false);
  const [dataPokemon, setDataPokemon] = useState<any[]>([]);

  const navigate = useNavigate();
  const query = useQuery();
  let page = Number(query.get("page") ? query.get("page") : 1);

  useEffect(() => {
    let isSubscribe = true;
    setDataPokemon([]);
    let params = {
      offset: (page - 1) * limit,
      limit: limit,
    };
    execute(params).then((res) => {
      setCount(res?.count);
      if (isSubscribe) {
        res?.results.map(async (val: any) => {
          const response = await PokemonServices.getPokemonDetail(val.name);
          setDataPokemon((state) => [...state, response]);
        });
      }
    });

    return () => {
      isSubscribe = false;
    };
  }, [page, execute, query]);

  return (
    <React.Fragment>
      <Navbar />
      <div className="App max-w-4xl mx-auto px-2">
        {status === "pending" && <Spinner />}
        {status === "idle" && <div>IDDLE</div>}
        {status === "success" && (
          <React.Fragment>
            <section className="grid grid-cols-2 sm:grid-cols-4  gap-2">
              {dataPokemon.map((val: any, i: number) => {
                return (
                  <PokemonCard
                    key={i}
                    id={val.id}
                    image={val.sprites?.other?.dream_world?.front_default}
                    name={val.name}
                    species={val.species?.name}
                    types={val.types}
                  />
                );
              })}
            </section>
            <section className="flex justify-center mt-6">
              <Pagination
                count={count}
                limit={limit}
                currentPage={page}
                onPress={(i) => navigate(`?page=${i}`)}
              />
            </section>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
}

export default Pokemons;

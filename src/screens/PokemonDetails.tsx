import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import useAsnyc from "../hooks/useAsync";
import PokemonServices from "../services/PokemonsServices";
import { useParams } from "react-router-dom";
import Progress from "../components/Progress";
import PokemonCard from "../components/PokemonCard";
import Spinner from "../components/Spinner";

export default function PokemonDetails() {
  const { status, execute } = useAsnyc(PokemonServices.getPokemonDetail, false);
  const [dataPokemon, setDataPokemon] = useState<any>(null);
  const params = useParams();

  useEffect(() => {
    execute(params.id).then(async (res) => {
      console.log(res);
      setDataPokemon(res);
    });
  }, [execute, params]);

  return (
    <React.Fragment>
      <Navbar />
      <div className="max-w-4xl mx-auto">
        {status === "idle" && <div>Idle...</div>}
        {status === "pending" && <Spinner />}
        {status === "success" && (
          <div className=" flex flex-row bg-white space-x-4 items-center">
            <div className="w-64">
              <PokemonCard
                id={dataPokemon?.id}
                image={dataPokemon?.sprites?.other?.dream_world?.front_default}
                name={dataPokemon?.name}
                species={dataPokemon?.species?.name}
                types={dataPokemon?.types}
              />
            </div>
            <div className="flex-1 ">
              <table className="table-auto flex-1 w-full items-center">
                <tbody style={{ width: "100%" }}>
                  {dataPokemon?.stats?.map((val: any, i: number) => {
                    return (
                      <tr
                        className="flex flex-row items-center space-x-4"
                        key={i}
                      >
                        <td style={{ width: "20%" }} className="text-right">
                          {val?.stat?.name}{" "}
                        </td>
                        <td>:</td>
                        <td style={{ width: "55%" }}>
                          <Progress value={val?.base_stat} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <ul></ul>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

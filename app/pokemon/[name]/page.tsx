import { Pokemon } from "@/interface/pokemon";
import axios from "axios";

export default async function Page({ params }: { params: { name: string } }) {
  let { data: pokemon, } = await axios.get<Pokemon>(
    "https://pokeapi.co/api/v2/pokemon/" + params.name
  );




  return <div className="flex flex-col" >
    <h1 className="text-4xl  ">#{pokemon.id} {pokemon.name}</h1>
    <div className="flex  gap-3">
      <img width={400} height="100%" src={pokemon.sprites.front_default} alt={pokemon.name} />
      <img width={400} height="100%" src={pokemon.sprites.front_shiny} alt={pokemon.name} />


      <p>Peso: {pokemon.weight}lb</p>
      <p>Altura: {pokemon.height}</p>


    </div>

  </div>
}
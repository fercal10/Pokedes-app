"use client"

import ListCardPokemon from "@/components/ListCardPokemon";
import { Pokeapi } from "@/interface/pokeapi";
import axios from 'axios';

export default async function Home() {
	const  respuesta = await axios.get<Pokeapi>(
		"https://pokeapi.co/api/v2/pokemon?limit=649&offset=0"
	  );
   
	  const pokemon = respuesta.data.results.map((dato,idx)=>{
		return {id: idx+1,...dato};
		});

	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<ListCardPokemon  pokedata={pokemon}/>
			
		</section>
	);
}

"use client"
import { Pokeapi } from '@/interface/pokeapi';
import React, { useState } from 'react'
import axios from 'axios';
import { PokemonCard } from './PokemonCard';
import { Input } from '@nextui-org/input';
import { Kbd } from '@nextui-org/kbd';
import { SearchIcon } from './icons';

type Props = {
	pokedata: {
		id: number,
		name: string,
		url: string,
	}[]
}



export default function ListCardPokemon({ pokedata }: Props) {
	const [buscar, setbuscar] = useState<string>("");

	const encontrar = (e: React.ChangeEvent<HTMLInputElement>): void => {


		if (Number.isSafeInteger(Number(e.target.value) && e.target.value.trim().length > 0)) {
			setbuscar(e.target.value.trim());
		} else {
			setbuscar(e.target.value.trim().toLowerCase());
		}
		
		console.log(buscar);
		console.log((!Number.isNaN(Number(buscar))));
	}
	return (<div>

		<div className='flex '>
			<h2 className='text-2xl pb-7 pr-10 min-w-max'>Lista de Pokemon</h2>
			<Input
				onChange={(e) => encontrar(e)}
				aria-label="Buscar"
				classNames={{
					inputWrapper: "bg-default-100",
					input: "text-sm",
				}}
				endContent={
					<Kbd className="hidden lg:inline-block" keys={["command"]}>
						K
					</Kbd>
				}
				labelPlacement="outside"
				placeholder="Buscar..."
				startContent={
					<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
				}
				type="search"
			/>

		</div>
		<div className='grid grid-cols-2 md::grid-cols-4 lg:grid-cols-6 gap-5 duration-300'   >

			{pokedata.filter((s) => {
				if(buscar.trim().length===0)return true;
				return (!Number.isNaN(Number(buscar))) ? (s.id.toString().includes(buscar) ) : s.name.includes(buscar.toString());
			}
				).slice(0, 150).map((data, idx) => <PokemonCard key={idx} item={data} />)}
		</div>
	</div>
	)
}
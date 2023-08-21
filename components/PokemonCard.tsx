"use client"
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { useRouter } from 'next/navigation'

interface poke {
    item: {
        name: string,
        url: string,
        id:number,
    }
}

export function PokemonCard({ item }: poke) {
    const rutas =useRouter();
    let image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item.id}.svg`;
    return (
        <Card shadow="sm" isPressable onPress={() => rutas.push("/pokemon/"+item.name)}>
            <CardBody className="overflow-visible p-0">
                <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={item.name}
                    className="w-full object-contain h-[180px]"
                    src={image}
                />
            </CardBody>
            <CardFooter className="text-small justify-between">
                <b>{item.name}</b>
                <p className="text-default-500">{item.id}#</p>
            </CardFooter>
        </Card>
    )
}

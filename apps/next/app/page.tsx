/** @jsxImportSource react */

import { HomePage } from "./pages/home";

export const dynamic = "force-dynamic";

export default async function Page() {
  const pokemonResponse = await fetch("https://pokeapi.co/api/v2/pokemon");

  const rawPokemonJson = (await pokemonResponse.json()).results;

  const formattedPokemonJson = rawPokemonJson.map((pokemon: any, index: number) => ({
    ...pokemon,
    id: index.toString(),
  }));

  return <HomePage data={formattedPokemonJson} />;
}

import type { FavoritePokemon } from "src/interfaces/favorite-pokemon";
import { createSignal, Show, type Component } from "solid-js";

interface Props {
    pokemon: FavoritePokemon;
}

export const FavoritePokemonCard: Component<Props> = ({ pokemon }) => {

    const [isVisdible, setIsVisible] = createSignal(true)
    const deleteFavorite = () => {
        
        const favorites = JSON.parse(localStorage.getItem('favorites') ?? '[]') as FavoritePokemon[];
        const newFavorites = favorites.filter( p => p.id !== pokemon.id);

        localStorage.setItem('favorites', JSON.stringify(newFavorites));
        setIsVisible(false)


    }
    const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`

    return (
        <Show when={isVisdible()}>
        <div class="flex flex-col justify-center items-center">
            <a href={`/pokemons/${pokemon.name}`}>
                <img src={imageSrc} alt={pokemon.name}width={96}height={96}
                style={`view-transition-name: ${pokemon.name}-image`}/>
        
                <p class="capitalize" >
                    #{pokemon.id} {pokemon.name}</p>
            </a>
            <button onclick={deleteFavorite} class="text-red-400" >
                Borrar
            </button>
        </div>
    </Show>

    );

}
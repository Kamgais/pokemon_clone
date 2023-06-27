import Pokemon from "../models/pokemon";
import POKEMONS from "../models/mock-pokemon";

export default class PokemonService {

  static pokemons:Pokemon[] = POKEMONS;



  static  async getPokemons(): Promise<Pokemon[]|null> {

      try {
      const response = await fetch('http://localhost:3000/pokemons');
      return await response.json();
    } catch (error) {
      return null;
    }
   
  }

  static async getPokemon(id: number): Promise<Pokemon|null> {
  
      try {
      const response = await fetch(`http://localhost:3000/pokemons/${id}`);
      const data = await response.json();
      return this.isEmpty(data) ? null : data;
    } catch (error) {
      return null;
    }

  }

  static updatePokemon(pokemon: Pokemon): Promise<Pokemon> {
    
      return fetch(`http://localhost:3000/pokemons/${pokemon.id}`, {
        method: 'PUT',
        body: JSON.stringify(pokemon),
        headers: { 'Content-Type': 'application/json'}
      })
      .then(response => response.json())
      .catch(error => this.handleError(error));
    
  }

  static async  deletePokemon(pokemon: Pokemon):  Promise<{}|void> {
   
      try {
      const response = await fetch(`http://localhost:3000/pokemons/${pokemon.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      });
      return await response.json();
    } catch (error:any) {
      return this.handleError(error);
    }

  }

  static addPokemon(pokemon: Pokemon): Promise<Pokemon> {
  delete pokemon.created;
    return fetch(`http://localhost:3000/pokemons`, {
        method: 'POST',
        body: JSON.stringify(pokemon),
        headers: { 'Content-Type': 'application/json'}
      })
      .then(response => response.json())
      .catch(error => this.handleError(error));

  }

  static async searchPokemon(term: string): Promise<Pokemon[]|null> {
   
      try {
      const response = await fetch(`http://localhost:3000/pokemons?q=${term}`);
      return await response.json();
    } catch (error) {
      return null;
    }

  }

  static isEmpty(data: Object): boolean {
    return Object.keys(data).length === 0;
  }

  static handleError(error: Error): void {
    console.error(error);
  }
}
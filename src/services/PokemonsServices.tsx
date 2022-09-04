import axios from "axios";

export default class PokemonServices {
  static async getPokemons(params: any) {
    try {
      const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/`, {
        params,
      });
      return result.data;
    } catch (error) {
      return error;
    }
  }

  static async getPokemonDetail(id: number | string) {
    try {
      const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      return result.data;
    } catch (error) {
      return error;
    }
  }

  static async getPokemonSpecies(id: number | string) {
    try {
      const result = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${id}`
      );
      return result.data;
    } catch (error) {
      return error;
    }
  }
}

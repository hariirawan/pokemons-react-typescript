import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonDetails from "./screens/PokemonDetails";
import Pokemons from "./screens/Pokemons";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pokemons />} />
          <Route path="/:path/:id" element={<PokemonDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

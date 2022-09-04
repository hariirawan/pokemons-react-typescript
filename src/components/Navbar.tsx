import { useParams } from "react-router-dom";

export default function Navbar() {
  const params = useParams();

  return (
    <nav className="max-w-4xl mx-auto py-4 font-bold text-2xl border-b border-b-slate-100 mb-4 flex items-center space-x-2">
      <h3 className="flex items-center uppercase">Pokemons</h3>
      <span className="text-sm font-light"> {params?.path}</span>
    </nav>
  );
}

import { useParams, useNavigate } from "react-router-dom";

export default function Navbar() {
  const params = useParams();
  const navigation = useNavigate();

  return (
    <nav className="max-w-4xl mx-auto py-4 xs:px-4 font-bold text-2xl border-b border-b-slate-100 mb-4 flex items-center space-x-2">
      <div className="flex items-center flex-1">
        <h3 className=" uppercase mr-4">Pokemons</h3>
        <span className="text-sm font-light"> {params?.path}</span>
      </div>
      {params?.path && (
        <button
          onClick={() => navigation(-1)}
          className="text-xs font-normal bg-slate-500 py-2 px-4 rounded-md text-white"
        >
          Back
        </button>
      )}
    </nav>
  );
}

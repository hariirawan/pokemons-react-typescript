import { Link } from "react-router-dom";

type IProps = {
  id: number | string;
  name: string;
  types: any[];
  image?: string;
  species?: any;
};

export default function PokemonCard(props: IProps) {
  return (
    <Link to={`/details/${props.id}`}>
      <div className="border rounded-lg bg-slate-100 flex flex-col items-center py-4 overflow-hidden relative">
        <span className="text-8xl absolute text-slate-200">{props.id}</span>
        <div className="relative text-center">
          <img
            src={props?.image}
            className="w-32 h-32 pt-10"
            alt={props.name}
          />
          <h3 className="text-2xl text-slate-700">{props.name}</h3>
          <div className="flex justify-center items-center space-x-2">
            {props?.types?.map((val: any, index: number) => (
              <div
                key={index}
                className="flex items-center space-x-2 text-orange-500"
              >
                <div className="uppercase font-normal text-xs ">
                  {val.type.name}
                </div>
                {index !== props?.types?.length - 1 && (
                  <div className="w-2 h-2 rounded-full bg-black " />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

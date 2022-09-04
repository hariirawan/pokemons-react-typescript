type IPaginations = {
  count: number;
  limit: number;
  onPress?: (index: number | string) => void;
  currentPage?: number;
};

function paginate({ current, max }: any) {
  if (!current || !max) return null;

  let prev = current === 1 ? null : current - 1,
    next = current === max ? null : current + 1,
    items: any[] = [1];

  if (current > 4) items.push("…");

  let r = 2,
    r1 = current - r,
    r2 = current + r;

  for (let i = r1 > 2 ? r1 : 2; i <= Math.min(max, r2); i++) items.push(i);

  if (r2 + 1 < max) items.push("…");
  if (r2 < max) items.push(max);

  return { current, prev, next, items };
}

export default function Pagination({
  count,
  limit,
  onPress,
  currentPage,
}: IPaginations) {
  const maxPage = Math.ceil(count / limit);

  let pagination = paginate({ current: currentPage, max: maxPage });

  return (
    <ul className="flex items-center flex-wrap">
      {pagination?.items?.map((val, i) => {
        return (
          <li
            key={i}
            className={`px-4 py-2 mx-1 rounded ${
              currentPage === val ? "bg-blue-400" : " bg-gray-200"
            } cursor-pointer`}
            onClick={() => {
              if (typeof val !== "string") {
                onPress?.(val);
              }
            }}
          >
            {val}
          </li>
        );
      })}
    </ul>
  );
}

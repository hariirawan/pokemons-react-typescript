import { useState, useEffect, useCallback } from "react";

const useAsnyc = <T,>(
  asyncFunction: (params?: any) => Promise<T>,
  immediate = true
) => {
  const [status, setStatus] = useState<
    "idle" | "pending" | "success" | "error"
  >("idle");

  const [value, setValue] = useState<T | null>(null);
  const [error, setError] = useState<T | null>(null);

  const execute = useCallback(
    async (params?: any) => {
      setStatus("pending");
      setValue(null);
      setError(null);
      try {
        const response = await asyncFunction(params);
        if (immediate) {
          setValue(response);
        }
        setStatus("success");
        return response;
      } catch (error: any) {
        setError(error);
        setStatus("error");
      }
    },
    [asyncFunction, immediate]
  );

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { execute, status, value, error };
};

export default useAsnyc;

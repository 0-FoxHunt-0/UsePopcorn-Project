import { useEffect, useState } from "react";

interface useLocalStorageProps<T> {
  initialState: T;
  key: string;
}

export function useLocalStorage<T>({
  initialState,
  key,
}: useLocalStorageProps<T>): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(
    JSON.parse(localStorage.getItem(key)) || initialState
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

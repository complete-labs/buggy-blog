import { ChangeEvent, useCallback, useState } from "react";

export default function useInputField(
  defaultValue: string = ""
): [string, (e: ChangeEvent<HTMLInputElement>) => void] {
  const [state, setState] = useState(defaultValue);

  const setValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  }, []);

  return [state, setValue] as [
    string,
    (e: ChangeEvent<HTMLInputElement>) => void
  ];
}

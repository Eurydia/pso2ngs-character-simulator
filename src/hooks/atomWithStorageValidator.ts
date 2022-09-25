import { SetStateAction, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const atomWithStorageValidator = <T>(
  key: string,
  init: T,
  validator: (value: T) => boolean,
) => {
  const saved_string: null | string = localStorage.getItem(key);

  let saved_value: null | T = null;
  if (saved_string !== null) {
    saved_value = JSON.parse(saved_string);
  }

  // If using the saved value would violate the validator, use the init value instead.
  let _init: T = init;
  if (saved_value !== null && !validator(saved_value)) {
    _init = saved_value;
  }

  const [value, setter] = useAtom(atomWithStorage(key, _init));

  const handleChange = (value: SetStateAction<T>) => {
    setter(value);
  };

  return [value, handleChange];
};

export default atomWithStorageValidator;

import { useState } from "react";

const useStateWithStorage = <T>(
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

  const [value, setter] = useState(init);

  const handleChange = (new_value: T) => {
    localStorage.setItem(key, JSON.stringify(new_value));

    setter(new_value);
  };

  return [value, handleChange];
};

export default useStateWithStorage;

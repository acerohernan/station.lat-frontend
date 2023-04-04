import { RefObject, useEffect } from "react";

interface Props {
  ref: RefObject<any>;
  callback: () => void;
}

const useClickOutside = ({ ref, callback }: Props): void => {
  const handleClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export default useClickOutside;

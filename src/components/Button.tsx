import { ReactElement, useMemo } from "react";

import { Sort } from "@/src/types";

interface Props {
  button: string;
  handleSort: (key: string) => void;
  sort: Sort;
}

function Button({ button, handleSort, sort }: Props): ReactElement {
  const buttonClassName = useMemo(() => {
    if (sort.key === button) {
      return sort.order === 1 ? "active asc" : "active desc";
    }
    return "";
  }, [sort, button]);

  return (
    <button
      type="button"
      onClick={() => handleSort(button)}
      className={buttonClassName}
    >
      {button.toUpperCase()}
    </button>
  );
}

export default Button;

import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    color: 'primary' | 'secondary' | 'success';
    onSelectButton: () => void;
}

const Button = ({children,color, onSelectButton}:Props) => {
  return (
    <>
      <button
        type="button"
        className={"btn btn-"+color}
        onClick={onSelectButton}
      >
        {children}
      </button>
    </>
  );
};

export default Button;

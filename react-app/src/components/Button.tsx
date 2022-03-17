import { useNavigate } from "react-router-dom";

const Button = ({ onClick, label }: { onClick: () => void; label: string }) => {
  const navigate = useNavigate();
  return <button onClick={onClick}>{label}</button>;
};

export default Button;

import { Link } from "react-router-dom";

type LogoProps = {
  size: string;
  color?: string;
};

const Logo = ({ size, color }: LogoProps) => {
  return (
    <Link to="/" className={`font-bold font-headline ${size} ${color}`}>
      Yum<span className="text-red-400">Cart</span>
    </Link>
  );
};

export default Logo;

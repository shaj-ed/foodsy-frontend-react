import { Link } from "react-router-dom";

type CategoryProps = {
  category: { id: number; src: string; title: string; description: string };
};

const CategoryCard = ({ category }: CategoryProps) => {
  return (
    <Link
      to={`/products`}
      className="rounded overflow-hidden transition-all hover:opacity-85 hover:bg-sky-100"
    >
      <img
        src={category.src}
        className="w-100 h-40 object-cover rounded border-2 border-sky-500"
        alt={category.title}
      />
      <h4 className="font-medium mt-2 px-2">{category.title}</h4>
      <p className="text-sm px-2 pb-2">{category.description}</p>
    </Link>
  );
};

export default CategoryCard;

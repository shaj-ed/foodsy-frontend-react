import { CategoryListResponse } from '@/features/category/types/category.type';
import { getMimeTypeFromBase64 } from '@/lib/helpers/file.helper';
import { Link } from 'react-router-dom';

type CategoryProps = {
  category: CategoryListResponse;
};

const CategoryCard = ({ category }: CategoryProps) => {
  const { id, categoryName, description, image } = category;
  const mimeType = getMimeTypeFromBase64(image);

  return (
    <Link
      to={`/products/${id}`}
      className="rounded overflow-hidden transition-all hover:opacity-85 hover:bg-sky-100"
    >
      <img
        src={`data:${mimeType};base64,${image}`}
        className="w-100 h-40 object-cover rounded border-2 border-sky-500"
        alt={categoryName}
      />
      <h4 className="font-medium mt-2 px-2">{categoryName}</h4>
      <p className="text-sm px-2 pb-2">
        {description.length > 50 ? `${description.slice(0, 50)}...` : description}
      </p>
    </Link>
  );
};

export default CategoryCard;

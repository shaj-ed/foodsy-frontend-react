import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { MenuResponseList } from '../types/menu.type';

type MenuCardProps = {
  menu: MenuResponseList;
};

const MenuCard = ({ menu }: MenuCardProps) => {
  const navigate = useNavigate();
  const onClickProduct = (id: number) => {
    navigate(`/products/${id}`);
  };

  return (
    <Card>
      <CardContent className="aspect-square">
        <div className="h-30 bg-amber-200"></div>
        <h3 className="font-semibold mt-2">{menu.productName}</h3>
        <p className="text-sm">{menu.description}</p>
        <div className="flex gap-1 mt-2">
          {Array.from({ length: 5 }).map((_, index) => {
            return <Star key={index} size="16px" className="text-amber-300 fill-amber-200" />;
          })}
        </div>
        <Button
          size="sm"
          className="mt-2 cursor-pointer w-full"
          onClick={() => onClickProduct(menu.id)}
        >
          Order
        </Button>
      </CardContent>
    </Card>
  );
};

export default MenuCard;

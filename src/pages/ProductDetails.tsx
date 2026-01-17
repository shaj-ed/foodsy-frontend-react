import SectionContainer from '@/components/common/section/SectionContainer';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FeaturedProduct from '@/components/common/ui/FeaturedProduct';
import { useMenuDetailsPages } from '@/features/food-menu/hooks/menu.query';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ContentLoading from '@/components/common/ui/ContentLoading';
import AlertOneLiner from '@/components/common/ui/AlertOneLiner';
import { getMimeTypeFromBase64 } from '@/lib/helpers/file.helper';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useAuthStore } from '@/store/authStore';
import { toast } from 'sonner';
import { useAddCartItem } from '@/features/cart/hooks/cart.query';
import { AddCartPayload } from '@/features/cart/types/cart.types';

const ProductDetails = () => {
  const { isAuthenticated } = useAuthStore();
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const { categoryId } = location.state;
  const productId = Number(id);

  const { isLoading, product, images, error } = useMenuDetailsPages(productId);
  const { mutateAsync: addNewCartItem, isPending } = useAddCartItem();

  const handleAddCart = async () => {
    if (!isAuthenticated || !id) {
      toast.info('Please Login/Sign up');
      navigate('/auth/login');
      return;
    }

    try {
      toast.loading('Processing..');
      const payload: AddCartPayload = {
        productId: Number(id),
        quantity: 1,
        notes: '',
      };

      console.log(id);
      await addNewCartItem(payload);
    } catch (error) {
      console.log(error);
    } finally {
      toast.dismiss();
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-[80vh]">
        <ContentLoading />
      </div>
    );
  }

  if (!product) return <AlertOneLiner title="No Data Available" />;

  if (error) return <AlertOneLiner title="Try again!" />;

  return (
    <>
      <div className="bg-slate-800 px-4 md:px-14 py-10 text-white">
        <SectionContainer className="my-8">
          <div className="flex gap-4 flex-col md:flex-row">
            <div className="rounded w-full max-w-96">
              <Carousel>
                <CarouselContent>
                  {images?.data.map((img) => (
                    <CarouselItem>
                      <img
                        src={`data:${getMimeTypeFromBase64(img)};base64,${img}`}
                        alt={product.data.productName}
                        className="w-full h-[300px] object-contain"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="mt-8 flex justify-center gap-4">
                  <CarouselPrevious variant="ghost" className="static translate-y-0 z-50" />
                  <CarouselNext variant="ghost" className="static translate-y-0" />
                </div>
              </Carousel>
            </div>

            <div>
              <h2 className="text-3xl font-headline">{product.data.productName}</h2>
              <p className="text-sm">{product.data.description}</p>
              <p className="text-lg font-medium mt-3">Price: &#2547; {product.data.price}</p>
              <div className="flex gap-1 mt-6">
                {Array.from({ length: 5 }).map((_, index) => {
                  return <Star key={index} size="16px" className="text-amber-300 fill-amber-200" />;
                })}
              </div>

              <Button
                size="lg"
                className="uppercase bg-sky-700 hover:bg-sky-800 cursor-pointer mt-8"
                onClick={handleAddCart}
                disabled={isPending}
              >
                Add to cart
              </Button>
            </div>
          </div>
        </SectionContainer>
      </div>
      <SectionContainer className="my-8">
        <FeaturedProduct categoryId={categoryId} currentMenuId={productId} />
      </SectionContainer>
    </>
  );
};

export default ProductDetails;

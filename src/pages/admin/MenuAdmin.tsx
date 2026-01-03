import MenuHeader from '@/features/food-menu/components/MenuHeader';
import MenuList from '@/features/food-menu/components/MenuList';

const MenuAdmin = () => {
  return (
    <section className="w-full">
      <h2 className="text-xl font-semibold mb-5">Food Menu</h2>

      <MenuHeader />
      <MenuList />
    </section>
  );
};

export default MenuAdmin;

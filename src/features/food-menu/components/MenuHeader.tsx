import { ChangeEvent } from 'react';
import useMenuStore from '../store/menu.store';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { Search } from 'lucide-react';
import MenuForm from './MenuForm';

const MenuHeader = () => {
  const { searchTerm, setSearchTerm } = useMenuStore();

  const onHandleSearch = (e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value);

  return (
    <div>
      <div className="flex items-center gap-6 justify-between flex-wrap">
        <InputGroup className="w-100 max-w-2xl">
          <InputGroupInput placeholder="Search..." value={searchTerm} onChange={onHandleSearch} />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>

        <MenuForm />
      </div>
    </div>
  );
};

export default MenuHeader;

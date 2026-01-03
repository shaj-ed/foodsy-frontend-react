import { ColumnDef } from '@tanstack/react-table';
import { MenuResponseList } from '../types/menu.type';
import { formatBDTimeFromIsoString } from '@/lib/helpers/date.helper';
import MenuActionCell from '../components/MenuActionCell';

export const menuColumns: ColumnDef<MenuResponseList>[] = [
  {
    accessorKey: 'productName',
    header: 'Product Name',
  },
  {
    accessorKey: 'price',
    header: 'Price',
    cell: ({ row }) => `${row.original.price} BDT`,
  },
  {
    accessorKey: 'description',
    header: 'Description',
  },
  {
    accessorKey: 'createdAt',
    header: 'Created At',
    cell: ({ row }) => formatBDTimeFromIsoString(row.original.createdAt),
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => <MenuActionCell id={row.original.id} />,
  },
];

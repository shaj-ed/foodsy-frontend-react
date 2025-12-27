import { useCategoryList } from '@/features/category/hooks/category.query';
import { mapToSelectOptions } from '@/lib/helpers/array.helper';
import { SelectionType } from '@/types/common.types';
import { useEffect, useState } from 'react';

export const useCategoryOptions = (): SelectionType[] => {
  const { data } = useCategoryList();

  const [categoryOptions, setCategoryOptions] = useState<SelectionType[]>([]);

  useEffect(() => {
    if (data) {
      const formatted = mapToSelectOptions(data, {
        idKey: 'id',
        labelKey: 'categoryName',
        valueKey: 'categoryName',
      });

      setCategoryOptions(formatted);
    } else {
      setCategoryOptions([]);
    }
  }, [data]);

  return categoryOptions;
};

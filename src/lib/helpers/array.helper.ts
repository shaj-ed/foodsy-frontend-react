import { SelectionType } from '@/types/common.types';

// Format selection options
export const mapToSelectOptions = <T>(
  data: T[],
  configKey: { idKey: keyof T; labelKey: keyof T; valueKey: keyof T }
): SelectionType[] => {
  const { idKey, labelKey, valueKey } = configKey;

  return data.map((value) => ({
    id: Number(value[idKey]),
    label: String(value[labelKey]),
    value: String(value[valueKey]),
  }));
};

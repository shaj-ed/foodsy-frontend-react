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

// Get key name value from an array by id
export const getValueById = <T extends { id: number }, K extends keyof T>(
  data: T[],
  id: number,
  key: K
): T[K] | '' => {
  const selected = data.find((d) => d.id === id);
  return selected ? selected[key] : '';
};

import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SelectionType } from '@/types/common.types';
import { Control, Controller, FieldValues, Path, UseFormSetValue } from 'react-hook-form';

type RHFSelectProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  setValue?: UseFormSetValue<T>; // 👈 add this
  label: string;
  options: SelectionType[];
  placeholder?: string;
  width?: string;
};

const RHFSelect = <T extends FieldValues>({
  name,
  control,
  setValue,
  label,
  options,
  placeholder = 'Select value',
  width = 'w-full',
}: RHFSelectProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { invalid, error } }) => (
        <Field data-invalid={invalid}>
          <FieldLabel className="text-md">{label}</FieldLabel>

          <Select
            value={field.value || undefined}
            onValueChange={(value) => {
              field.onChange(value);

              const selected = options.find((opt) => opt.value === value);

              if (setValue && selected?.id) {
                setValue('categoryId' as Path<T>, selected.id as any, {
                  shouldValidate: true,
                });
              }
            }}
          >
            <SelectTrigger className={width}>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>

            <SelectContent position="popper" side="bottom" align="start" className="z-[10000]">
              {options.map((opt) => (
                <SelectItem key={opt.id} value={opt.value as string}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {invalid && <FieldError className="text-start" errors={[error]} />}
        </Field>
      )}
    />
  );
};

export default RHFSelect;

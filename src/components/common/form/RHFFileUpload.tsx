import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Field, FieldLabel, FieldError } from "../../ui/field";
import { Input } from "../../ui/input";

interface RHFFileUploadProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  accept?: string;
  multiple?: boolean;
}

export const RHFFileUpload = <T extends FieldValues>({
  name,
  control,
  label,
  accept,
  multiple = false,
}: RHFFileUploadProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange }, fieldState: { error, invalid } }) => (
        <Field data-invalid={invalid}>
          <FieldLabel className="text-md" htmlFor={name}>{label}</FieldLabel>

          <Input
            id={name}
            type="file"
            accept={accept}
            multiple={multiple}
            onChange={(e) => {
              const files = e.target.files;
              if (!files) return;
              onChange(multiple ? Array.from(files) : files[0]);
            }}
            // value={"" as any} 
            className="border-gray-500"
          />

          {invalid && error && (
            <FieldError errors={[error]} className="text-start" />
          )}
        </Field>
      )}
    />
  );
};

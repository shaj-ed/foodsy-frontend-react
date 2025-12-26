import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Control, Controller, FieldValues, Path, useWatch } from 'react-hook-form';

type RHFDropFileUploadProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  label: string;
  text?: string;
};

const RHFDropFileUpload = <T extends FieldValues>({
  name,
  control,
  label,
  text = 'Drag and drop image',
}: RHFDropFileUploadProps<T>) => {
  const file = useWatch({ control, name });
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!(file instanceof File)) {
      setPreview(null);
      return;
    }

    const url = URL.createObjectURL(file);
    setPreview(url);

    return () => URL.revokeObjectURL(url);
  }, [file]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        const { onChange } = field;
        const { error, invalid } = fieldState;

        const { getRootProps, getInputProps } = useDropzone({
          accept: { 'image/*': [] },
          multiple: false,
          onDrop: (files) => {
            const file = files[0];
            if (file) onChange(file);
          },
        });

        return (
          <Field data-invalid={invalid}>
            <FieldLabel>{label}</FieldLabel>

            <div
              {...getRootProps()}
              className="w-full p-12 border border-dashed rounded border-gray-500 cursor-pointer"
            >
              <input {...getInputProps()} />
              <p className="text-center text-base">{text}</p>
            </div>

            {preview && (
              <img src={preview} alt="preview" className="mt-4 w-[150px] rounded object-cover" />
            )}

            {invalid && error && <FieldError errors={[error]} className="text-start" />}
          </Field>
        );
      }}
    />
  );
};

export default RHFDropFileUpload;

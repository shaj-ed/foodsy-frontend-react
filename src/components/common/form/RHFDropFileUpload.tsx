import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Control, Controller, FieldValues, Path, useWatch } from 'react-hook-form';

type RHFDropFileUploadProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  label: string;
  text?: string;
  multiple?: boolean;
};

const RHFDropFileUpload = <T extends FieldValues>({
  name,
  control,
  label,
  text = 'Drag and drop image',
  multiple = false,
}: RHFDropFileUploadProps<T>) => {
  const files = useWatch({ control, name }) as File[] | File | undefined;
  const [previews, setPreviews] = useState<string[]>([]);

  useEffect(() => {
    let fileArray: File[] = [];

    if (Array.isArray(files)) {
      fileArray = files;
    } else if (files instanceof File) {
      fileArray = [files];
    }

    const urls = fileArray.map((file) => URL.createObjectURL(file));
    console.log(urls);
    setPreviews(urls);

    return () => urls.forEach((url) => URL.revokeObjectURL(url));
  }, [files]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        const { onChange, value } = field;
        const { error, invalid } = fieldState;

        const { getRootProps, getInputProps } = useDropzone({
          accept: { 'image/*': [] },
          multiple,
          onDrop: (droppedFiles) => {
            if (multiple) {
              const existingFiles = Array.isArray(value) ? value : [];
              onChange([...existingFiles, ...droppedFiles]);
            } else {
              onChange(droppedFiles[0]); // single file
            }
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

            {previews.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-4">
                {previews.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`preview-${idx}`}
                    className="w-[150px] rounded object-cover"
                  />
                ))}
              </div>
            )}

            {invalid && error && <FieldError errors={[error]} className="text-start" />}
          </Field>
        );
      }}
    />
  );
};

export default RHFDropFileUpload;

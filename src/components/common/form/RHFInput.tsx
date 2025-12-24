import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "../../ui/field";
import { Input } from "../../ui/input";

type RHFInputProps<T extends FieldValues> = {
    name: Path<T>
    control: Control<T>
    label: string
    placeholder?: string
    autoComplete?: string
    classname?: string
}

const RHFInput = <T extends FieldValues>({name, control, label, placeholder = "Enter value", autoComplete = "off", classname}: RHFInputProps<T>) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({field, fieldState: {invalid, error}}) => (
                <Field data-invalid={invalid} className={classname}>
                    <FieldLabel className="text-md" htmlFor={name}>{label}</FieldLabel>

                    <Input
                        {...field}
                        id={name}
                        value={field.value}
                        aria-invalid={invalid}
                        placeholder={placeholder}
                        autoComplete={autoComplete}
                        className="border-gray-500"
                    />

                    {
                        invalid && (
                            <FieldError className="text-start" errors={[error]} />
                        )
                    }
                </Field>
            )}
        />
    )
}

export default RHFInput
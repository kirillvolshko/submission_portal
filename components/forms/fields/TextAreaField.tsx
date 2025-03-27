import { Textarea } from "@/components/ui/textarea";

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormDescription,
  FormLabel,
} from "@/components/ui/form";
import { Control, FieldValues, Path } from "react-hook-form";
import { cn } from "@/lib/utils";

interface TextareaFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  placeholder?: string;
  description?: string;
  classNameItem?: string;
  classNameTextarea?: string;
}

const TextareaField = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  description,
  classNameItem,
  classNameTextarea,
}: TextareaFieldProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("group", classNameItem)}>
          <div className="grid gap-2 w-full">
            {label && (
              <div className="flex md:flex-row gap-4 w-full justify-between items-center">
                <FormLabel className="text-white">{label}</FormLabel>
                <FormMessage className="text-sm font-medium leading-none" />
              </div>
            )}
            <FormControl>
              <Textarea
                placeholder={placeholder}
                className={cn(
                  "resize-none placeholder:text-white  rounded-md max-w-[240px] max-h-[150px] overflow-y-auto ",
                  classNameTextarea
                )}
                {...field}
              />
            </FormControl>
          </div>
          {description && <FormDescription>{description}</FormDescription>}
        </FormItem>
      )}
    />
  );
};

export default TextareaField;

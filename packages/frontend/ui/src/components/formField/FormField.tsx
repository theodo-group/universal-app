import { TextInput, TextInputProps } from "react-native";

export const FormField = (props: TextInputProps) => {
  return (
    <TextInput
      {...props}
      autoCapitalize="none"
      autoCorrect={false}
      className="mb-3 rounded-md border-2 border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
    />
  );
};

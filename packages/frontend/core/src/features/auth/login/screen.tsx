import { A, Button, FormField, H1, P } from "@frontend/design-system";
import { onboardingNames } from "features/auth/utils/constants";

import { View } from "react-native";

export const LoginScreen = () => {
  return (
    <View className="flex min-h-full flex-1 flex-col justify-center bg-white px-6 py-12 lg:px-8">
      <View className="sm:mx-auto sm:w-full sm:max-w-sm">
        <H1>{onboardingNames.loginName} to your account</H1>
        <FormField placeholder={onboardingNames.loginWith} />
        <FormField placeholder="Password" />
        <View className="mb-1 flex items-end">
          <A href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Forgot password?
          </A>
        </View>
        <Button.Primary onPress={() => {}} text="Login" />
        <View className="flex flex-row items-center justify-center gap-2">
          <P>Don't have an account?</P>
          <A href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
            {onboardingNames.signupName}
          </A>
        </View>
      </View>
    </View>
  );
};

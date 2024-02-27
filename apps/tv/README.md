# TV Example

Creates a project that can build for Apple TV and Android TV targets.

> **Note**: This example is still at an experimental stage, and is based on SDK 50 beta release.

This project uses

- the [React Native TV fork](https://github.com/react-native-tvos/react-native-tvos), which supports both phone (Android and iOS) and TV (Android TV and Apple TV) targets
- the [React Native TV config plugin](https://github.com/react-native-tvos/config-tv/tree/main/packages/config-tv) to allow Expo prebuild to modify the project's native files for TV builds

## 🚀 How to use

#### Creating a new project

- Create a project: `npx create-expo-app -e with-tv`
- `cd` into the project

```sh
export EXPO_TV=1
npx expo prebuild
yarn ios # Build for Apple TV
yarn android # Build for Android TV
```

#### TV specific file extensions

This project contains an [example Metro configuration](./metro.config.js) that allows Metro to resolve application source files with TV-specific code, indicated by specific file extensions (`*.ios.tv.tsx`, `*.android.tv.tsx`, `*.tv.tsx`).  This config is not enabled by default, since it will impact bundling performance, but is available for developers who need this capability.

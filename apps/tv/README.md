# TV Example

This is an example TV project that is built in a monorepo. It uses the custom packages for UI and navigation that is shared with our Mobile and Web apps.

> **Note**: This example is still at an experimental stage, and is based on SDK 50 beta release.

This project uses

- the [React Native TV fork](https://github.com/react-native-tvos/react-native-tvos), which supports both phone (Android and iOS) and TV (Android TV and Apple TV) targets
- the [React Native TV config plugin](https://github.com/react-native-tvos/config-tv/tree/main/packages/config-tv) to allow Expo prebuild to modify the project's native files for TV builds

## 🚀 How to use

#### Running the Project

```sh
# Build the files for a TV application - see package.json for script contents
yarn prebuild

# To run on Android TV
yarn android
# To run on Apple TV
yarn ios
```

#### TV specific file extensions

This project contains an [example Metro configuration](./metro.config.js) that allows Metro to resolve application source files with TV-specific code, indicated by specific file extensions (`*.ios.tv.tsx`, `*.android.tv.tsx`, `*.tv.tsx`). This config is not enabled by default, since it will impact bundling performance, but is available for developers who need this capability.

# How to Create a Custom Package

## Context

The `/expo` and `/next` apps use the custom packages inside `/packages` to import shareable code between the Mobile and Web applications such as `packages/frontend/ui`. This package allows developers to create a single component that can be shared between platforms

## Guide

### 1. Create your custom package

First create a directory for your new package:

```
$ mkdir example
```

Then initialise your new package:

```
$ yarn init
```

Then make sure to name your package appriopriately. Ensure you are extending off the existing Eslint config (and Babel if you need to compile JS in your package). Use the two `package.json` templates below:

1. For packages that do not need compiled JS like `packages/frontend/assets`:

```json
// package.json

{
  "version": "0.0.0",
  "name": "@frontend/{PACKAGE_NAME}",
  "scripts": {
    // ...
  },
  "dependencies": {
    // ...
  },
  "peerDependencies": {
    // ...
  },
  "devDependencies": {
    // ...
    "@shared/eslint-config": "*",
    "@shared/tsconfig": "*",
    "typescript": "x.x.x"
  },
  "eslintConfig": {
    "extends": "@shared/eslint-config/frontend"
  },
  "babel": {
    "extends": "@shared/babel-config/babel.config"
  }
}
```

1. For packages that NEED compiled JS like `packages/frontend/ui`:

```json
// package.json

{
  "version": "0.0.0",
  "name": "@frontend/{PACKAGE_NAME}",
  "main": "dist/cjs/index.js",
  "module": "dist/esm/index.js",
  "types": "dist/types/index.d.ts",
  "files": ["dist"],
  "scripts": {
    // ...
  },
  "dependencies": {
    // ...
  },
  "peerDependencies": {
    // ...
  },
  "devDependencies": {
    // ...
    "@babel/cli": "x.x.x",
    "@shared/babel-config": "*",
    "@shared/eslint-config": "*",
    "@shared/tsconfig": "*",
    "rimraf": "x.x.x",
    "typescript": "x.x.x"
  },
  "eslintConfig": {
    "extends": "@shared/eslint-config/frontend"
  },
  "babel": {
    "extends": "@shared/babel-config/babel.config"
  }
}
```

### 2. Configure your package structure

The following package structure is an example structure for your custom package - this is the structure used to create the `/ui` and the `/core` packages. It is particularly useful for when you want to create custom components that provide specific app components and hooks to your apps.

```
├── /dist - compiled JS files that are used in your app
├── /node_modules
├── /src
│   ├── ...
│   └── index.ts - file that exposes all the components, functions, constants etc to the app that uses this package
├── index.ts
├── package.json
├── declarations.d.ts - defines .svg and .png modules
├── nativewind-env.d.ts - references the Nativewind v4 typing
├── tailwind.config.js - houses your theming and sizes via Tailwind
└── tsconfig.json
```

### 3. Using your custom package in your apps

Inside both `/expo` and `/next`, add the custom package as a dependency in the `package.json`:

```json
{
  "main": "index.js",
  "version": "1.0.0",
  "private": true,
  "name": "expo-app",
  "dependencies": {
    "@frontend/{PACKAGE_NAME}": "*"
    // ...
  }
  // ...
}
```

Once added, run `yarn` to install the custom package, and also build the packages concurrently whilst you have your dev server open:

```bash
# Install the new package
$ yarn

# Concurrently build all packages including the new package
$ yarn build-watch

# Run the dev server for mobile (or web)
$ yarn native
```

Now you should see your package changes reflected in the app.

Note: You only need to run `yarn build-watch` if you have set up your module to produce build files.

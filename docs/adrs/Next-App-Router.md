# Pages Router to App Router

## Problem

NextJS supports both the Pages Router and App Router. In Solito, the Pages Router is the default setup but the App Router is the newest navigation structure provided by Next 13 and continued in Next 14. App Router is built on top of React Server Components

## App Router

### Cons:

- Cannot leverage React Server Components fully because of React Native Web's built-in [localisation contexts](https://necolas.github.io/react-native-web/docs/localization) - RN for Web is used in Solito, and all of Solito's UI components are [Client Components](https://solito.dev/v4#react-server-components).
  - To use RSCs we need to stop the approach of exporting screens from the `/packages/frontend` directory, and compose the pages inside Next directly e.g. inside `apps/page.tsx`.

### Pros:

- Pages Router might become obsolete in the future for Next applications so application is future-proofed.
- Structure of creating screens matches Expo Router - fewer semantics when creating pages/screens on the universal app.
- App Router can be used with only Client Components.

## Decision

We will migrate to App Router from Page Router so that we can keep the NextJS application up to date with future versions until the Page Router becomes deprecated. Since the monorepo is focused on developing shared components between mobile and web, we will not be able to fully take advantage of React Server Components but we can utilise them at a top-level on the page. An example of this is available in `/apps/next/app/page.tsx`.

Since App Router works fine with Client Components, we can build the application around Client Components until Solito or Tamagui release features to make the enabler compatible with RSCs.

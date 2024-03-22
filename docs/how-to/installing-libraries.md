# How to install new libraries

## Context

In this monorepo, we're currently using Yarn Workspaces with Turborepo.

In a [Yarn workspaces (Classic)](https://classic.yarnpkg.com/lang/en/) monorepo, dependencies are often shared across multiple packages within the workspace. Yarn optimizes the installation of these dependencies by hoisting them to the root node_modules directory, reducing duplication and speeding up installation processes.

## General Approach

The ideal scenario is you only install the library to the smallest unit in which you're using it. For example, I needed `react-native-keyevent` for a feature within the `@frontend/core` package, so added it as a dependency there only.

However, if a package contains native code (e.g iOS or Android code), then we'll need to install the library in the consuming applications e.g `apps/expo` or `apps/tv`. As an example, we installed and used `@shopify/flash-list` inside our `@frontend/ui` package. But in order for TV or the Expo app to auto-link the native code correctly, we had to also install the package directly inside `apps/expo` and `apps/tv`. The reason for this is that React Native cannot follow transient dependencies for native code so cannot autolink the native code like usually. For more info please read the [RN docs on autolinking](https://github.com/react-native-community/cli/blob/main/docs/autolinking.md).

## Dependency vs Peer Dependency - What should you use?

Dependencies are packages your project needs to run. When you declare a package as a dependency, Yarn installs it in your node_modules directory, and it becomes available for your project to import and use.

Peer dependencies are used to specify packages that a project is compatible with **but does not directly include them**. This is particularly useful for plugins or libraries that are meant to work alongside other libraries without bundling them together, avoiding version conflicts and duplication.

For packages that we are using within the monorepo, it's better to explicitly define a version as a dependency, and then the package will be hoisted up so no duplicates will occur.

For more information, see the [different types of dependencies in Yarn](https://classic.yarnpkg.com/lang/en/docs/dependency-types/).

### When do we need to use Peer Dependencies?

When there is 2 or more versions of the same package inside the consumers of our custom packages, we'll want to use peer dependencies to support them both.

An example of this currently is the `react-native` package. While `apps/expo` uses version `0.73.4`, `apps/tv` uses version `npm:react-native-tvos@^0.73.1-3`. Therefore inside our custom packages such as `@frontend/core`, we list `react-native` as a peer dependency to support both versions and let the consuming application choose the relevant version for itself.

```json
"peerDependencies": {
    "react-native": "*",
},
```

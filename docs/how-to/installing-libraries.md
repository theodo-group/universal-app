# How to install new libraries

## Context

In this monorepo, we're currently using Yarn Workspaces with Turborepo.

In a [Yarn workspaces (Classic)](https://classic.yarnpkg.com/lang/en/) monorepo, dependencies are often shared across multiple packages within the workspace. Yarn optimizes the installation of these dependencies by hoisting them to the root node_modules directory, reducing duplication and speeding up installation processes.

## General Approach

The ideal scenario is you only install the package to the smallest unit in which you're using it.

For example, I needed `react-native-keyevent` for a feature within the `@frontend/core` package, so added it as a dependency there first.

## Dependency vs Peer Dependency - What should you use?

Dependencies are packages your project needs to run. When you declare a package as a dependency, Yarn installs it in your node_modules directory, and it becomes available for your project to import and use.

Peer dependencies are used to specify packages that a project is compatible with but does not directly include. This is particularly useful for plugins or libraries that are meant to work alongside other libraries without bundling them together, avoiding version conflicts and duplication.

We should be avoiding peer dependencies if possible. The reason is that peer dependencies aren't automatically installed. So if someone were to add `react-native-keyevent` to `@frontend/core` as a peer dependency, but it wasn't installed as a dependency for `apps/web`, then the app would have runtime errors.

For packages that we are using within the monorepo, it's better to explicitly define a version as a dependency, and then the package will be hoisted up so no duplicates will occur anyway.

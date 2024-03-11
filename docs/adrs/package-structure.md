# Package Structure for Universal Applications

## Problem

When should teams consider creating new packages inside their applications? What are the use cases for creating a custom package?

By default, the enabler is created with 6 packages:

1. `/frontend/ui` - atomic UI elements
2. `/frontend/assets` - icons, images, fonts etc.
3. `/frontend/core` - app-specific components and logic
4. `/shared/babel-config` - default babel config to compile JS in custom packages
5. `/shared/eslint-config` - base linting rules (currently frontend only)
6. `/shared/tsconfig` - base TS rules

## Use Cases

### Small-scale Applications

For small scale universal application, we recommend using the **existing** package `/frontend/core` to hold your application logic. If the app's feature list is limited, then holding your application code inside `/core` will maintain a smaller codebase and allows tighter collaboration between developers.

**Solution:** Use a single Core package that contains all your app-specific components and logic.

### Medium-scale Applications

Medium-scale applications will face issues of certain features becoming too big to house inside the `/packages/core` package. So instead, you can start breaking down your `/core` package into smaller sub-packages like the following:

```
├── /packages
│   ├── /frontend
│   │   ├── /assets
│   │   ├── /ui
│   │   ├── /navigation - all navigation components and logic for mobile and web
│   │   ├── /user - account management logic and UI elements for user accounts
│   │   ├── ...
│   │   └── /core
│   └── /shared
├── ...
└── package.json
```

**Solution:** Split up `/packages/frontend/core` to smaller packages if specific features/epics are too large to contain inside `/core`.

### Large-scale Applications

Examples of large-scale applications are: Flight Booking service, News Applications etc. We recommend creating packages for different domains of your application.

Instead of:

```
├── /packages
│   ├── /frontend
│   │   ├── /assets
│   │   ├── /ui
│   │   └── /core
│   └── /shared
├── ...
└── package.json
```

You can split up the codebase like the following:

```
├── /packages
│   ├── /frontend
│   │   ├── /assets
│   │   ├── /ui
│   │   ├── /navigation - all navigation components and logic for mobile and web
│   │   ├── /admin - admin commands and functions within the app
│   │   ├── /user - account management logic and UI elements for user accounts
│   │   └── ...
│   └── /shared
├── ...
└── package.json
```

What this allows is separation of concerns on multiple features by housing code in separate areas. If you have large teams, this allows teams to work independently on their own domains, and as a side effect code ownership is more explicit.

**Solution:** Create packages split by domains of the application.

### Universal Apps shared Backend code

If teams want to contain both BACKEND and FRONTEND code within the same repository, then we recommend creating a `/package/backend` directory to contain your backend code. It can either be a directory similar to `/packages/frontend` that houses multiple backend-related packages, or it can be one sole backend package holding your code. This will depend again on the size of application you need to create.

The example below showcases a structure for a backend application for our large scale app from the previous example:

```
├── /packages
│   ├── /frontend
│   │   └── ...
│   ├── /shared
│   └── /backend
│       ├── /users - contains infrastructure to manage user data e.g. database, authentication, and functions to manage users
│       └── /api - creates infrastructure to expose the functions for users and other apps as an API e.g. REST or GraphQL
├── ...
└── package.json
```

**Solution:** Create separate `/package/backend` package to house backend code and infrastructure within the codebase

## Summary

### Pros of creating custom packages:

- Maintainability: Packages break down complex applications into smaller, manageable units. This makes code easier to understand, modify, and debug.
- Reusability: Well-defined packages can be reused across different projects, saving development time and effort.
- Dependency Management: Packages manage dependencies between different parts of the application, ensuring all components have the correct versions of libraries they rely on.
- Testability: Packages can be unit-tested independently, improving code quality and catching bugs early in the development process.
- Collaboration: For larger teams, packages promote clear ownership of specific functionalities, leading to better communication and project management.

### Cons of creating custom packages:

- Very Small Applications: For extremely simple applications with minimal features, the overhead of managing multiple packages can outweigh the benefits. A single, well-organized codebase might suffice.
- Rapid Prototyping: During initial prototyping stages where functionality is rapidly changing, the added complexity of packages might slow down development.
- Limited Development Team: If you have a very small development team and everyone is familiar with the entire codebase, separate packages might not be necessary for collaboration.
- Learning Curve: Setting up and managing packages can have a learning curve. If your team is new to this approach, it might be beneficial to start with a simpler structure and introduce packages gradually.

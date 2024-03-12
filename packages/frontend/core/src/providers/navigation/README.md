### Navigation Provider

- Added to allow us to create an atomic abstraction ontop of navigation
- This is important due to a couple issues:
  - For TV we cant use expo-router as of yet so we will be using this package to export any navigation providers and hooks we need to maintain consistency across TV, Mobile and web
  - We are currently facing an issue where nextjs app router may not allow us to use server components to their full potential if we need to have a "use client" tag at the top of the route layout file
    - This abstraction allows us to have more flexibility around where we want to use solito and also allows us to remove solito entirely by using this package to unify the functionality cross the three platforms for navigation

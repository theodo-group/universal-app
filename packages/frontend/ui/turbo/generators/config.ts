import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("Generatr new ui component", {
    description: "This creates a new component",
    prompts: [
      { type: "input", name: "componentName", message: "What is the name of the component" },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{componentName}}.tsx",
        templateFile: "templates/customUiComponent.hbs",
      },
    ],
  });
}

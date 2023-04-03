import { useEffect } from "react";
import { useDarkMode } from "storybook-dark-mode";
import { DocsContainer } from "@storybook/addon-docs";

import "../src/styles/globals.css";
import { dark, light } from "./theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    dark: { ...dark },
    light: { ...light },
  },
  docs: {
    container: (props) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const isDark = useDarkMode();

      const { id: storyId, storyById } = props.context;
      const {
        parameters: { docs = {} },
      } = storyById(storyId);
      docs.theme = isDark ? dark : light;

      return (
        <div className={isDark ? "dark-layout" : "light"}>
          <DocsContainer {...props} />
        </div>
      );
    },
  },
};

const themeDecorator = (StoryFn, context) => {
  const darkMode = useDarkMode();
  const isInDocs = context.viewMode === "docs";

  useEffect(() => {
    const selector = isInDocs ? "#docs-root" : "html";

    changeBackgroundMode(selector, { darkMode, isInDocs });
  }, [darkMode]);

  return <StoryFn />;
};

const changeBackgroundMode = (selector, state) => {
  const rootElement = document.querySelector(selector);
  if (state.darkMode) {
    rootElement.classList.add("dark");
  } else {
    rootElement.classList.remove("dark");
  }
};

export const decorators = [themeDecorator];

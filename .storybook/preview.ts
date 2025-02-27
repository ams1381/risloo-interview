import type { Preview } from '@storybook/react'
import {RouterContext} from "next/dist/shared/lib/router-context.shared-runtime";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
      nextRouter: {
          Provider: RouterContext.Provider,
      },
  },
};

export default preview;
import type { Preview } from '@storybook/angular'
import { setCompodocJson } from "@storybook/addon-docs/angular";
import { applicationConfig } from "@storybook/angular";
import docJson from "../documentation.json";
import { provideZonelessChangeDetection } from "@angular/core";
setCompodocJson(docJson);

const preview: Preview = {
  decorators: [
    applicationConfig({
      providers: [provideZonelessChangeDetection()]
    })
  ],
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
      },
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;

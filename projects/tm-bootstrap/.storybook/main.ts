import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [],
  "framework": {
    "name": "@storybook/angular",
    "options": {}
  },
  staticDirs: [
    { from: '../src/stories/assets', to: '/assets' },
    { from: '../../../node_modules/@ng-select/ng-select/themes', to: '/assets/css/ng-select' },
  ],
};
export default config;

# TmBootstrap

TmBootstrap is a comprehensive Angular component library built on top of [ngx-bootstrap](https://valor-software.com/ngx-bootstrap/). It provides a set of reusable, accessible, and easily stylable components to accelerate your Angular application development.

## Features

- **Angular 21+ Support**: Built with the latest version of Angular.
- **Bootstrap Integration**: Seamlessly integrates with Bootstrap via ngx-bootstrap.
- **Storybook Documentation**: Interactive component playground and documentation. [View Live Demo](https://tommeijer.github.io/AngularComponentLib/)
- **Reusable Components**: Includes a wide range of common UI components.
- **Type-Safe**: Fully written in TypeScript.

## Installation

The library is hosted on [GitHub Packages](https://github.com/TomMeijer/AngularComponentLib/pkgs/npm/tm-bootstrap).

Install the library using npm:

```bash
npm install @tommeijer/tm-bootstrap
```

Make sure you also have the required peer dependencies installed:

```bash
npm install ngx-bootstrap @ng-select/ng-select ngx-skeleton-loader @auth0/angular-jwt
```

## Available Components

The library includes the following components:

- **Alert**: Display important messages.
- **Auth**: Authentication-related components and utilities.
- **Button**: Custom button components.
- **Card**: Versatile content containers.
- **Confirm Dialog**: Simple confirmation popups.
- **Error**: Error message displays.
- **Image Uploader**: Component for handling image uploads.
- **Input**: Enhanced input fields.
- **Skeleton Loader**: Loading placeholders for better UX.
- **Table**: Feature-rich data tables.
- **Utils**: Various utility functions and helpers.

## Usage

Import the desired component or module into your Angular application:

```typescript
import { TmButtonModule } from '@tommeijer/tm-bootstrap';

@NgModule({
  imports: [
    TmButtonModule,
    // ...
  ],
})
export class AppModule { }
```

Then use it in your template:

```html
<tm-button (click)="onButtonClick()">Click Me</tm-button>
```

## Development

### Run Storybook

To view the components in action and explore the documentation, run:

```bash
npm run storybook
```

### Build

To build the library, run:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Running Unit Tests

Run the unit tests via [Karma](https://karma-runner.github.io):

```bash
npm run test
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

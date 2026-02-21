# Maxi Web Components - React 18

<div align="center">
  <img src="./src/assets/logo.png" alt="Maxi Web Components Logo" width="300" />
</div>

A comprehensive library of modern web components built with React 18, designed to provide a consistent and efficient development experience.

## 📋 Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Available Components](#available-components)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Technologies Used](#technologies-used)
- [Development](#development)
- [Build](#build)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Description

Maxi Web Components is a React component library that offers a wide range of modern and reusable user interface elements. It's built specifically for React 17 and 18, providing complete compatibility with the latest React features.

### Key Features

- ✅ **Compatible with React 17 and 18**
- 🎨 **Modern and consistent design**
- 📱 **Fully responsive**
- 🚀 **Easy to use and integrate**
- 🔧 **Highly customizable**
- 📦 **Modular components**
- 🎯 **TypeScript ready**
- 🧪 **Testing included**

## 🚀 Installation

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Install Dependencies

```bash
npm install
```

## 💻 Usage

### Development

To run the project in development mode:

```bash
npm run dev
```

This will start the development server at `http://localhost:3000` and automatically open the browser.

### Development without auto-open

```bash
npm start
```

### Production Build

```bash
npm run build
```

The built files will be generated in the `dist/` folder.

## 🧩 Available Components

### Input Components

- **InputField**: Text input with validation and styling options
- **InputNumber**: Numeric input with increment/decrement controls
- **InputSwitch**: Toggle switch for boolean values
- **InputRadio**: Radio button for single selection
- **Checkbox**: Checkbox for multiple selections
- **Autocomplete**: Input with suggestions and filtering
- **Dropdown**: Select dropdown with search functionality
- **MultiSelect**: Multiple selection dropdown with tags
- **Calendar**: Date picker with calendar interface
- **InputOTP**: One-Time Password input with customizable length and validation
- **ControlNumber**: Numeric control input for managing numeric values
- **InputPassword**: Password input with strength meter and mask toggle
- **Knob**: Circular dial control for selecting numeric values with drag and touch support
- **TextEditor**: Rich text editor with formatting toolbar (bold, italic, underline, lists) and HTML output

### Navigation Components

- **Tabs**: Tabbed interface for content organization
- **Sidebar**: Collapsible navigation sidebar
- **CascadeMenu**: Hierarchical dropdown menu with nested navigation options
- **Menubar**: Horizontal navigation menu bar with dropdown menus and customizable items
- **Breadcrumb**: Navigation breadcrumb trail showing current page location
- **Steps**: Step-by-step navigation component - Click on each step to navigate
- **Popover**: Contextual popup that appears on various triggers

### Action Components

- **Button**: Interactive buttons with multiple variants and icons
- **Chips**: Small tags for labeling and selections
- **SelectButton**: Button-based selection group for single or multiple choices

### Display Components

- **Card**: Content container with header, body, and footer
- **Badge**: Small status indicators and labels
- **Fieldset**: Grouped form fields with collapsible legend for organizing related inputs
- **Timeline**: Vertical timeline for events and progress
- **Table**: Advanced table with sorting, filtering, and pagination
- **Accordion**: Collapsible content sections for organized information display
- **Carousel**: Carousel for displaying multiple items with navigation and responsive options
- **Image**: Image component with preview, zoom and rotate
- **MeterGroup**: Segmented bar for visualizing categorized data

### Feedback Components

- **Notification**: Toast notifications for user feedback
- **Tooltip**: Hover tooltips for additional information
- **Dialog**: Modal dialogs for forms and confirmations
- **Message**: Contextual messages for displaying different types of feedback with multiple variants

### State Components

- **Preload**: Loading overlay for page transitions
- **Skeleton**: Placeholder content while loading
- **Spinner**: Animated loading spinner
- **ProgressBar**: Progress indicator for showing completion status or loading state

### Pagination

- **Paginator**: Pagination controls for data navigation

## 📁 Project Structure

```
maxi-web-components-test/
├── public/
│   └── index.html                 # Main HTML template
├── src/
│   ├── components/
│   │   └── maxi/                 # Library components
│   │       ├── Accordion.tsx
│   │       ├── Autocomplete.tsx
│   │       ├── Badge.tsx
│   │       ├── Breadcrumb.tsx
│   │       ├── Button.tsx
│   │       ├── Calendar.tsx
│   │       ├── Card.tsx
│   │       ├── Carousel.tsx
│   │       ├── CascadeMenu.tsx
│   │       ├── Checkbox.tsx
│   │       ├── Chips.tsx
│   │       ├── ControlNumber.tsx
│   │       ├── Dialog.tsx
│   │       ├── Dropdown.tsx
│   │       ├── Fieldset.tsx
│   │       ├── Image.tsx
│   │       ├── InputField.tsx
│   │       ├── InputNumber.tsx
│   │       ├── InputOTP.tsx
│   │       ├── InputPassword.tsx
│   │       ├── InputRadio.tsx
│   │       ├── InputSwitch.tsx
│   │       ├── Knob.tsx
│   │       ├── Menubar.tsx
│   │       ├── Message.tsx
│   │       ├── MeterGroup.tsx
│   │       ├── MultiSelect.tsx
│   │       ├── Notification.tsx
│   │       ├── Paginator.tsx
│   │       ├── Popover.tsx
│   │       ├── Preload.tsx
│   │       ├── ProgressBar.tsx
│   │       ├── SelectButton.tsx
│   │       ├── Sidebar.tsx
│   │       ├── Skeleton.tsx
│   │       ├── Spinner.tsx
│   │       ├── Steps.tsx
│   │       ├── Table.tsx
│   │       ├── Tabs.tsx
│   │       ├── TextEditor.tsx
│   │       ├── Timeline.tsx
│   │       └── Tooltip.tsx
│   ├── assets/                   # Static resources
│   │   ├── icons/               # SVG icons
│   │   ├── angular.png
│   │   ├── loading.gif
│   │   └── logo.png
│   ├── styles/                   # CSS files
│   │   ├── App.css
│   │   └── index.css
│   ├── App.js                    # Main component
│   └── index.js                  # Entry point
├── dist/                         # Built files
├── node_modules/                 # Dependencies
├── package.json                  # Project configuration
├── webpack.config.js            # Webpack configuration
├── tsconfig.json                # TypeScript configuration
└── README.md                    # This file
```

## 🛠 Available Scripts

| Script             | Description                               |
| ------------------ | ----------------------------------------- |
| `npm start`        | Start development server                  |
| `npm run dev`      | Start development server and open browser |
| `npm run build`    | Build project for production              |
| `npm test`         | Run tests                                 |
| `npm run lint`     | Run code linter                           |
| `npm run lint:fix` | Run linter and fix errors automatically   |

## 🔧 Technologies Used

### Main Dependencies

- **React 18.2.0**: Main React library
- **React DOM 18.2.0**: React DOM rendering
- **maxi-react-components 6.0.0**: Maxi components library

### Development Dependencies

- **Webpack 5.88.0**: Module bundler
- **Babel**: JavaScript transpiler
- **TypeScript 5.1.0**: TypeScript support
- **ESLint**: Code linter
- **Jest 29.5.0**: Testing framework
- **CSS Loader**: CSS file loader
- **HTML Webpack Plugin**: HTML plugin

### Build Tools

- **Webpack Dev Server**: Development server
- **Babel Loader**: Babel loader for Webpack
- **Style Loader**: Style loader

## 🚀 Development

### Environment Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`

### Component Structure

Each component follows a consistent structure:

```javascript
import { MaxiComponent } from "maxi-react-components";

const MyComponent = () => {
  // Component logic
  return (
    <div>
      <MaxiComponent
      // component props
      />
    </div>
  );
};

export default MyComponent;
```

### Style Customization

Styles can be customized through:

- Custom CSS variables
- Specific CSS classes
- Style props on components

## 📦 Build

### Development

```bash
npm run dev
```

### Production

```bash
npm run build
```

Production files are generated in the `dist/` folder with:

- Minified JavaScript code
- Optimized CSS
- Processed assets
- Content hash for cache busting

## 📱 Compatibility

- **Browsers**: Chrome, Firefox, Safari, Edge (last 2 versions)
- **React**: 17.x and 18.x
- **Node.js**: 14.x or higher

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

**Developed with ❤️ by the Maxi team**

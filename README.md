# Maxi Web Components - React 18

![Maxi Web Components Logo](src/assets/logo.png)

A comprehensive web components library for React 18, designed to provide a modern and efficient development experience.

## 📋 Description

This project is a demonstration application that showcases all available components in the `maxi-react-components` library. The application is built with React 18, TypeScript, and Vite, providing an interactive interface to explore and test each component.

## 🚀 Features

- **React 18 Compatible**: Fully compatible with React 17 and 18
- **TypeScript**: Built with TypeScript for better development experience
- **Vite**: Fast development setup with Vite
- **Complete Components**: More than 20 different components organized by categories
- **Responsive Design**: Adaptive interface for different screen sizes
- **Interactive Demo**: Each component can be tested directly in the interface

## 🛠️ Technologies Used

- **React 18.2.0** - Main UI library
- **TypeScript 5.2.2** - Static typing
- **Vite 5.0.8** - Build tool and development server
- **maxi-react-components 4.0.10** - Components library
- **ESLint** - Code linting
- **CSS3** - Custom styles

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd maxi-web-components-test/react/18
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run in development mode**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   The application will automatically open at `http://localhost:3000`

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build application for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint linter

## 🧩 Available Components

### Input Components
- **InputField** - Text input with validation and styling options
- **InputNumber** - Numeric input with increment/decrement controls
- **InputSwitch** - Toggle switch for boolean values
- **InputRadio** - Radio button for single selection
- **Checkbox** - Checkbox for multiple selections
- **Autocomplete** - Input with suggestions and filtering
- **Dropdown** - Select dropdown with search functionality
- **MultiSelect** - Multiple selection dropdown with tags
- **Calendar** - Date picker with calendar interface

### Navigation Components
- **Tabs** - Tabbed interface for content organization
- **Sidebar** - Collapsible navigation sidebar

### Action Components
- **Button** - Interactive buttons with multiple variants and icons
- **Chips** - Small tags for labeling and selections

### Display Components
- **Card** - Content container with header, body, and footer
- **Badge** - Small status indicators and labels
- **Timeline** - Vertical timeline for events and progress

### Data Components
- **Table** - Advanced table with sorting, filtering, and pagination
- **Paginator** - Pagination controls for data navigation

### Feedback Components
- **Notification** - Toast notifications for user feedback
- **Tooltip** - Hover tooltips for additional information
- **Dialog** - Modal dialogs for forms and confirmations

### State Components
- **Preload** - Loading overlay for page transitions
- **Skeleton** - Placeholder content while loading
- **Spinner** - Animated loading spinner

## 🎨 Project Structure

```
src/
├── components/
│   └── maxi/           # Demo components
│       ├── Autocomplete.tsx
│       ├── Badge.tsx
│       ├── Button.tsx
│       ├── Calendar.tsx
│       ├── Card.tsx
│       ├── Checkbox.tsx
│       ├── Chips.tsx
│       ├── Dialog.tsx
│       ├── Dropdown.tsx
│       ├── InputField.tsx
│       ├── InputNumber.tsx
│       ├── InputRadio.tsx
│       ├── InputSwitch.tsx
│       ├── MultiSelect.tsx
│       ├── Notification.tsx
│       ├── Paginator.tsx
│       ├── Preload.tsx
│       ├── Sidebar.tsx
│       ├── Skeleton.tsx
│       ├── Spinner.tsx
│       ├── Table.tsx
│       ├── Tabs.tsx
│       ├── Timeline.tsx
│       └── Tooltip.tsx
├── assets/             # Static resources
│   ├── icons/          # SVG icons
│   ├── logo.png
│   ├── react.png
│   └── loading.gif
├── App.tsx            # Main component
├── App.css           # Main styles
├── main.tsx          # Entry point
└── index.css         # Global styles
```

## 🔧 Configuration

### Vite
The project is configured with Vite for fast development:
- Port: 3000
- Automatic browser opening
- Source maps enabled
- Dependency optimization

### TypeScript
Strict TypeScript configuration:
- Target: ES2020
- JSX: react-jsx
- Modules: ESNext
- Strict linting enabled

### ESLint
Linting configuration to maintain code quality:
- TypeScript rules
- React Hooks rules
- React Refresh rules

## 🌐 Component Usage

Each component is wrapped in a demo component that shows:
- Different component variants
- Usage examples
- Functionality description
- Interactivity to test features

### Usage Example

```tsx
import { MsButton } from "maxi-react-components";

function MyComponent() {
  return (
    <MsButton 
      label="My Button" 
      variant="primary" 
      onClick={() => console.log('Click!')} 
    />
  );
}
```

## 📱 Responsive Design

The application is designed to be fully responsive:
- **Desktop**: Grid layout with multiple columns
- **Tablet**: Adaptive layout with reduced columns
- **Mobile**: Single column layout optimized for small screens

## 🎯 Demo Features

- **Intuitive Interface**: Clear navigation by component categories
- **Practical Examples**: Each component shows real use cases
- **Interactivity**: Components are fully functional
- **Integrated Documentation**: Descriptions and examples in each section
- **Modern Design**: Clean and professional UI

## 🤝 Contributing

To contribute to the project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the [MIT](LICENSE) license.

## 📞 Support

For technical support or questions about the components, contact the maxi development team.

---

**Developed with ❤️ for the React community**

import './App.css';
import logo from "./assets/logo.png";
import reactLogo from "./assets/react.png";
import Badge from "./components/maxi/Badge";
import Button from "./components/maxi/Button";
import Checkbox from "./components/maxi/Checkbox";
import InputField from "./components/maxi/InputField";
import InputNumber from "./components/maxi/InputNumber";
import InputSwitch from "./components/maxi/InputSwitch";
import Notification from "./components/maxi/Notification";
import Preload from "./components/maxi/Preload";
import InputRadio from "./components/maxi/InputRadio";
import Sidebar from "./components/maxi/Sidebar";
import Skeleton from "./components/maxi/Skeleton";
import Spinner from "./components/maxi/Spinner";
import Tabs from "./components/maxi/Tabs";
import Tooltip from "./components/maxi/Tooltip";
import Autocomplete from "./components/maxi/Autocomplete";
import Card from "./components/maxi/Card";
import Chips from "./components/maxi/Chips";
import Dialog from "./components/maxi/Dialog";
import Dropdown from "./components/maxi/Dropdown";
import MultiSelect from "./components/maxi/MultiSelect";
import Paginator from "./components/maxi/Paginator";
import Calendar from "./components/maxi/Calendar";
import Table from "./components/maxi/Table";
import Timeline from "./components/maxi/Timeline";
import Accordion from "./components/maxi/Accordion";
import CascadeMenu from "./components/maxi/CascadeMenu";

function App() {
  return (
    <div className="app">
    {/* Header con logo y información */}
    <header className="app-header">
      <div className="header-content">
        <div className="logo-section">
          <img src={logo} alt="Maxi Web Components" className="logo" />
          <div className="header-text">
            <h1>Maxi Web Components</h1>
            <p>React Components Library</p>
          </div>
        </div>
        <div className="react-info">
          <div className="react-logo">
            <img src={reactLogo} alt="React Logo" className="react-logo-img" />
          </div>
          <div className="react-text">
            <span className="react-version">React 17 & 18</span>
            <span className="compatibility-text">Compatible</span>
          </div>
        </div>
      </div>
      <div className="header-description">
        <p>These components are designed to work seamlessly with React applications, providing a comprehensive set of UI elements for modern web development.</p>
      </div>
    </header>
    {/* Sección de Componentes de Entrada */}
    <section className="component-section">
      <h2>Input Components</h2>
      <div className="component-group">
        <div className="component-item">
          <h3>Input Field</h3>
          <p className="component-description">Text input with validation and styling options</p>
          <InputField />
        </div>
        <div className="component-item">
          <h3>Input Number</h3>
          <p className="component-description">Numeric input with increment/decrement controls</p>
          <InputNumber />
        </div>
        <div className="component-item">
          <h3>Input Switch</h3>
          <p className="component-description">Toggle switch for boolean values</p>
          <InputSwitch />
        </div>
        <div className="component-item">
          <h3>Input Radio</h3>
          <p className="component-description">Radio button for single selection</p>
          <InputRadio />
        </div>
        <div className="component-item">
          <h3>Checkbox</h3>
          <p className="component-description">Checkbox for multiple selections</p>
          <Checkbox />
        </div>
        <div className="component-item">
          <h3>Autocomplete</h3>
          <p className="component-description">Input with suggestions and filtering</p>
          <Autocomplete />
        </div>
        <div className="component-item">
          <h3>Dropdown</h3>
          <p className="component-description">Select dropdown with search functionality</p>
          <Dropdown />
        </div>
        <div className="component-item">
          <h3>Multi Select</h3>
          <p className="component-description">Multiple selection dropdown with tags</p>
          <MultiSelect />
        </div>
        <div className="component-item">
          <h3>Calendar</h3>
          <p className="component-description">Date picker with calendar interface</p>
          <Calendar />
        </div>
      </div>
    </section>

    {/* Sección de Componentes de Navegación */}
    <section className="component-section">
      <h2>Navigation Components</h2>
      <div className="component-group">
      <div className="component-item">
          <h3>Cascade Menu</h3>
          <p className="component-description">Hierarchical dropdown menu with nested navigation options</p>
          <CascadeMenu />
        </div>
        <div className="component-item">
          <h3>Tabs</h3>
          <p className="component-description">Tabbed interface for content organization</p>
          <Tabs />
        </div>
        <div className="component-item">
          <h3>Sidebar</h3>
          <p className="component-description">Collapsible navigation sidebar</p>
          <Sidebar />
        </div>

      </div>
    </section>

    {/* Sección de Paginator */}
    <section className="component-section paginator-section">
      <h2>Paginator</h2>
      <p className="section-description">Pagination controls for data navigation</p>
      <div className="paginator-container">
        <Paginator />
      </div>
    </section>

    {/* Sección de Componentes de Acción */}
    <section className="component-section">
      <h2>Action Components</h2>
      <div className="component-group">
        <div className="component-item">
          <h3>Buttons</h3>
          <p className="component-description">Interactive buttons with multiple variants and icons</p>
          <Button />
        </div>
        <div className="component-item">
          <h3>Chips</h3>
          <p className="component-description">Small tags for labels and selections, Currently only valid value is , to create a new item when comma key is pressed.</p>
          <Chips />
        </div>
      </div>
    </section>

    {/* Sección de Componentes de Visualización */}
    <section className="component-section">
      <h2>Display Components</h2>
      <div className="component-group display-components-grid">
        <div className="component-item">
          <h3>Card</h3>
          <p className="component-description">Content container with header, body, and footer</p>
          <Card />
        </div>
        <div className="component-item">
          <h3>Badge</h3>
          <p className="component-description">Small status indicators and labels</p>
          <Badge />
        </div>
        <div className="component-item">
          <h3>Timeline</h3>
          <p className="component-description">Vertical timeline for events and progress</p>
          <Timeline />
        </div>
        <div className="component-item accordion-full-width">
          <h3>Accordion</h3>
          <p className="component-description">Collapsible content sections for organized information display</p>
          <Accordion />
        </div>
       
      </div>
    </section>

    {/* Sección de Tabla */}
    <section className="component-section table-section">
      <h2>Data Table</h2>
      <p className="section-description">Advanced table with sorting, filtering, and pagination</p>
      <div className="table-container">
        <Table />
      </div>
    </section>

    {/* Sección de Componentes de Feedback */}
    <section className="component-section">
      <h2>Feedback Components</h2>
      <div className="component-group">
        <div className="component-item">
          <h3>Notification</h3>
          <p className="component-description">Toast notifications for user feedback - Click on elements to see them in action</p>
          <Notification />
        </div>
        <div className="component-item">
          <h3>Tooltip</h3>
          <p className="component-description">Hover tooltips for additional information</p>
          <Tooltip />
        </div>
        <div className="component-item">
          <h3>Dialog</h3>
          <p className="component-description">Modal dialogs for forms and confirmations</p>
          <Dialog />
        </div>
      </div>
    </section>

    {/* Sección de Componentes de Estado */}
    <section className="component-section">
      <h2>State Components</h2>
      <div className="component-group">
        <div className="component-item">
          <h3>Preload</h3>
          <p className="component-description">Loading overlay for page transitions</p>
          <Preload />
        </div>
        <div className="component-item">
          <h3>Skeleton</h3>
          <p className="component-description">Placeholder content while loading</p>
          <Skeleton />
        </div>
        <div className="component-item">
          <h3>Spinner</h3>
          <p className="component-description">Animated loading spinner</p>
          <Spinner />
        </div>
      </div>
    </section>
  </div>
  );
}

export default App;
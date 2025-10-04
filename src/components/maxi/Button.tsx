import { MsButton } from "maxi-react-components";
import FilterIcon from "../../assets/icons/filter.svg";
import EraserIcon from "../../assets/icons/eraser-icon.svg";
import EditIcon from "../../assets/icons/edit.svg";
import ExcelIcon from "../../assets/icons/excel.svg";
import TrashIcon from "../../assets/icons/trash.svg";

const Button = () => {
  return (
    <div className="button-showcase">
      {/* Botones con texto - Variantes sólidas */}
      <div className="button-group">
        <h4>Solid Buttons</h4>
        <div className="button-row">
          <MsButton label="Primary" variant="primary" />
          <MsButton label="Secondary" variant="secondary" />
          <MsButton label="Success" variant="success" />
          <MsButton label="Warning" variant="warning" />
          <MsButton label="Danger" variant="danger" />
        </div>
      </div>

      {/* Botones con texto - Variantes outline */}
      <div className="button-group">
        <h4>Outline Buttons</h4>
        <div className="button-row">
          <MsButton label="Primary" variant="outline-primary" />
          <MsButton label="Secondary" variant="outline-secondary" />
          <MsButton label="Success" variant="outline-success" />
          <MsButton label="Warning" variant="outline-warning" />
          <MsButton label="Danger" variant="outline-danger" />
        </div>
      </div>

      {/* Botones con iconos - Variantes sólidas */}
      <div className="button-group">
        <h4>Icon Buttons (Solid)</h4>
        <div className="button-row">
          <MsButton icon={FilterIcon} variant="primary" />
          <MsButton icon={EraserIcon} variant="secondary" />
          <MsButton icon={EditIcon} variant="success" />
          <MsButton icon={ExcelIcon} variant="warning" />
          <MsButton icon={TrashIcon} variant="danger" />
        </div>
      </div>

      {/* Botones con iconos - Variantes outline */}
      <div className="button-group">
        <h4>Icon Buttons (Outline)</h4>
        <div className="button-row">
          <MsButton icon={FilterIcon} variant="outline-primary" />
          <MsButton icon={EraserIcon} variant="outline-secondary" />
          <MsButton icon={EditIcon} variant="outline-success" />
          <MsButton icon={ExcelIcon} variant="outline-warning" />
          <MsButton icon={TrashIcon} variant="outline-danger" />
        </div>
      </div>
    </div>
  );
};

export default Button;

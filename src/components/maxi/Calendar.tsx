import { useState } from "react";
import { MsCalendar } from "maxi-react-components";

const Calendar = () => {
  const [date, setDate] = useState(null);

  const handleUpdate = (e: any) => {
    setDate(e.detail);
  };
  return (
    <div style={{ width: "100%" }}>
      <MsCalendar showIcon value={date} onUpdate={handleUpdate} />
    </div>
  );
};

export default Calendar;

import { MsTimeline, MsBadge } from "maxi-react-components";

const events = [
  {
    date: "04/08/2024 - 09:37 PM",
    status: "Delivered",
    severity: "success",
  },
  {
    date: "03/08/2024 - 10:54 AM",
    status: "In transit",
    severity: "info",
  },
  {
    date: "02/08/2024 - 06:21 AM",
    status: "Pending",
    severity: "warning",
  },
  {
    date: "01/08/2024 - 11:31 AM",
    status: "Undelivered",
    severity: "danger",
  },
];

const Timeline = () => {
  const customizedContent = (item, index) => {
    return (
      <div key={item.date} slot={`event-${index}`}>
        <p className="ms-timeline-content-date">{item.date}</p>
        <p className="ms-timeline-content-status">
          <b>Order status:</b>

          <MsBadge value={item.status} severity={item.severity} />
        </p>
      </div>
    );
  };

  return (
    <MsTimeline events={events}>
      {events.map((item, index) => customizedContent(item, index))}
    </MsTimeline>
  );
};

export default Timeline;

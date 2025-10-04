import { MsNotification, MsBadge } from "maxi-react-components";
import { useState } from "react";

const LIFETIME = 3000;

const CONTENT = {
  alert: {
    severity: "alert",
    summary: "Alert",
    detail: "The action could not be processed",
    position: "bottom-center",
  },
  info: {
    severity: "info",
    summary: "Info",
    detail: "The action was successful",
    position: "top-right",
  },
  success: {
    severity: "success",
    summary: "Success",
    detail: "Action was carried out successfully",
    position: "top-left",
  },
  warning: {
    severity: "warning",
    summary: "Warning",
    detail: "This action cannot be undone",
    position: "bottom-right",
  },
};
const Notification = () => {
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState(CONTENT.alert);

  const fakeAsyncFunction = (data: any, delay: any) => {
    let timeout: any;
    return new Promise((resolve) => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        resolve(data);
      }, delay);
    });
  };

  const handleClick = async (severity: any) => {
    try {
      setVisible(true);
      setContent(CONTENT[severity as keyof typeof CONTENT]);

      await fakeAsyncFunction("Hello, World!", LIFETIME);
    } catch (err) {
      //error
    } finally {
      setVisible(false);
    }
  };

  return (
    <>
      
      <MsBadge
      style={{ cursor: "pointer" }}
        value="Information"
        severity="info"
        onClick={() => handleClick("info")}
      />
      <MsBadge
        style={{ cursor: "pointer" }}
        value="Success"
        severity="success"
        onClick={() => handleClick("success")}
      />
      <MsBadge
        style={{ cursor: "pointer" }}
        value="Warning"
        severity="warning"
        onClick={() => handleClick("warning")}
      />
      <MsBadge
        style={{ cursor: "pointer" }}
        value="Alert"
        severity="danger"
        onClick={() => handleClick("alert")}
      />

      <MsNotification
        position={content.position}
        visible={visible}
        severity={content.severity}
        summary={content.summary}
        life={LIFETIME}
        detail={content.detail}
      />
    </>
  );
};

export default Notification;

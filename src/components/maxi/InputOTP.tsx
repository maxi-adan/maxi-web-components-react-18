import { useState } from "react";
import { MsInputOtp } from "maxi-react-components";

const InputOTP = () => {
  const [otp, setOtp] = useState("");
  const handleComplete = (e: any) => {
    console.log("OTP Complete:", e.detail);
    setOtp(e.detail);
  };
  const handleInput = (e: any) => {
    console.log("OTP Input:", e.detail);
    // setOtp(e.detail);
  };
  const handleFocus = (e: any) => {
    console.log("OTP Focus:", e.detail);
    // setOtp(e.detail);
  };
  const handleBlur = (e: any) => {
    console.log("OTP Blur:", e.detail);
    // setOtp(e.detail);
  };
  return (
    <>
      <MsInputOtp
        disabled={false}
        autoFocus={false}
        invalid={false}
        value={otp}
        type="text"
        length={4}
        onInputEvent={handleInput}
        onFocusEvent={handleFocus}
        onBlurEvent={handleBlur}
        onCompleteEvent={handleComplete}
        customClass="custom-class-otp1"
      />
    </>
  );
};

export default InputOTP;

import { useState } from "react";
import { MsInputField } from "maxi-react-components";

const InputField = () => {

    const [ value, setValue ] = useState('');
  return(
    <> 
  
    <MsInputField
      value={value}
      onChangeEvent={(e:any)=>console.log(e.detail)}
    />
    </>
   
  );

}

export default InputField;
import { MsPreload, MsButton } from "maxi-react-components";
import { useState } from "react";
import image from "../../assets/loading.gif";

const Preload = () => {

    const [showPreload, setShowPreload] = useState(false);

    const showLoader = () => {
      setShowPreload(true)
      setTimeout(() => {
        setShowPreload(false)
      }, 3000);
    }
    return (
        <>
       
        <MsButton label="Show" onClickEvent={showLoader}/>
        {showPreload && <MsPreload image={image} />}

        </>
    )
}

export default Preload;
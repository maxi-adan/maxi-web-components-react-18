import { MsImage } from "maxi-react-components";

const Image = () => {
    return (
        <div style={{ display: "flex", gap: "24px", justifyContent: "center" }}>
            <MsImage 
                src="https://www.primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" 
                alt="Image Description" 
                width="250" 
                preview={true} 
            />
        </div>
    );
}

export default Image;

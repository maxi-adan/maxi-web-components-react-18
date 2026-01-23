import { MsFieldset } from "maxi-react-components";

const Fieldset = () => {
    return (
        <MsFieldset toggleable>
        <div slot="legend" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span>💳</span>
            <strong>Payment Details</strong>
        </div>
  
        <div style={{ padding: '10px' }}>
           <p>Account Number: **** **** **** 4532</p>
           <p>Bank: Financial Services Bank</p>
           <p>Transaction Limit: $10,000.00</p>
        </div>
    </MsFieldset>
    )
}

export default Fieldset;
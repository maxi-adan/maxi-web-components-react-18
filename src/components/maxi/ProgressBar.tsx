import { MsProgressBar } from "maxi-react-components";

const ProgressBar = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
            <div>
                <p style={{ marginBottom: '8px', fontSize: '0.9rem', color: '#495057' }}>Loan Application Progress: 75%</p>
                <MsProgressBar value={75} />
            </div>
            <div>
                <p style={{ marginBottom: '8px', fontSize: '0.9rem', color: '#495057' }}>Processing Transaction...</p>
                <MsProgressBar mode="indeterminate" />
            </div>
        </div>
    )
}

export default ProgressBar;
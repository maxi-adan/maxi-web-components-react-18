import { MsSteps } from "maxi-react-components";

const Steps = () => {
    const steps = [
        {label: 'Account Verification'},
        {label: 'Document Upload'},
        {label: 'Payment Setup'},
    ];

    return (
        <div style={{margin: '2rem'}}>
            <MsSteps readonly={false} steps={steps} />
        </div>
    );
}

export default Steps;
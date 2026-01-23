import { MsMessage } from "maxi-react-components";

const Message = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                <MsMessage variant="info">Transaction pending verification</MsMessage>
                <MsMessage variant="success">Payment processed successfully</MsMessage>
                <MsMessage variant="warning">Account balance is below minimum threshold</MsMessage>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                <MsMessage variant="danger">Transaction failed due to insufficient funds</MsMessage>
                <MsMessage variant="secondary">Account information updated</MsMessage>
            </div>
        </div>
    )
}

export default Message;
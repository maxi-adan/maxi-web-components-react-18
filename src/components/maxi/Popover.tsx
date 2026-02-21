import { MsPopover, MsButton } from "maxi-react-components";

const Popover = () => {
    return (
        <div style={{ display: "flex", gap: "24px", justifyContent: "center", padding: "20px" }}>
            <MsPopover trigger="hover" placement="bottom">
                <MsButton slot="trigger" label="Hover me" severity="primary" />
                <div style={{
                    width: '280px',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    {/* Header */}
                    <div style={{
                        padding: '1.5rem',
                        background: '#f8fafc',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        borderBottom: '1px solid #f1f5f9'
                    }}>
                        <img
                            src="https://www.primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
                            alt="Amy Elsner"
                            style={{ width: '60px', height: '60px', borderRadius: '50%' }}
                        />
                        <div>
                            <div style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#1e293b' }}>Amy Elsner</div>
                            <div style={{ fontSize: '0.9rem', color: '#64748b' }}>Administrator</div>
                        </div>
                    </div>

                    {/* Menu */}
                    <div style={{ padding: '0.5rem 0' }}>
                        <div style={{ padding: '0.75rem 1.5rem', color: '#1e40af', cursor: 'pointer', fontSize: '1rem' }}>My Profile</div>
                        <div style={{ padding: '0.75rem 1.5rem', color: '#1e40af', cursor: 'pointer', fontSize: '1rem' }}>Settings</div>
                        <div style={{ padding: '0.75rem 1.5rem', color: '#1e40af', cursor: 'pointer', fontSize: '1rem' }}>Notifications</div>
                    </div>

                    <div style={{ borderTop: '1px solid #f1f5f9', margin: '0.25rem 0' }} />

                    {/* Footer */}
                    <div style={{ padding: '1rem 1.5rem' }}>
                        <button style={{
                            width: '100%',
                            background: '#0a469e',
                            color: 'white',
                            border: 'none',
                            padding: '0.75rem',
                            borderRadius: '4px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            fontSize: '1rem'
                        }}>
                            Sign Out
                        </button>
                    </div>
                </div>
            </MsPopover>
        </div>
    );
}


export default Popover;

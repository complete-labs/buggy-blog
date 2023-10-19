const ModalWrapper: React.FC = ({ children }) => {
    const modalWrapperStyles: React.CSSProperties = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1000,
        transition: 'opacity 0.4s ease-in-out, visibility 0.4s',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.8)' // Softened shadows
    };

    return <div style={modalWrapperStyles}>{children}</div>;
};

export default ModalWrapper

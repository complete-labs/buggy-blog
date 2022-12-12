import CSS from 'csstype';

const iconStyle: CSS.Properties = {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    marginTop: '15px',
    marginLeft: '15px'
}

const UnlockIcon = () => {
    return (
        <svg style={iconStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 01-1.5 0V6.75a3.75 3.75 0 10-7.5 0v3a3 3 0 013 3v6.75a3 3 0 01-3 3H3.75a3 3 0 01-3-3v-6.75a3 3 0 013-3h9v-3c0-2.9 2.35-5.25 5.25-5.25z" />
        </svg>
    )

}

export default UnlockIcon
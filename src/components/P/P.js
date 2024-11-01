export function P1({ children, color }) {
    return (
        <span style={{ color: `${color}` }}>
            {children}
        </span>
    )
}

export function P2({ children, color }) {
    return (
        <span style={{ color: `${color}` }}>
            &nbsp;&nbsp;&nbsp;&nbsp;{children}
        </span>
    )
}
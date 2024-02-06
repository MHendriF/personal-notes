export default function Button({ type, onClick, className, children }) {
    return (
        <button onClick={onClick} type={type} className={className}>
            {children}
        </button>
    );
}

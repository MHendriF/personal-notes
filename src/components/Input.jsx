export default function Input({
    type,
    onInput,
    name,
    value,
    placeholder,
    className,
}) {
    return (
        <input
            type={type}
            onInput={onInput}
            name={name}
            value={value}
            placeholder={placeholder}
            className={className}
        />
    );
}

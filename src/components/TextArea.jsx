export default function TextArea({ name, placeholder, value, onInput, className}) {
    return (
        <textarea name={name} placeholder={placeholder} value={value} onChange={onInput} className={className}
        />
    );
}
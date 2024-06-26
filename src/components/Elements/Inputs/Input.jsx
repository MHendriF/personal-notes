import { forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
    const { type, placeholder, name, value, onInput } = props;
    return (
        <input
            id={name}
            type={type}
            className='text-sm border border-gray-500 rounded w-full py-2 px-3 text-slate-900 placeholder: opacity-60'
            placeholder={placeholder}
            onInput={onInput}
            name={name}
            value={value}
            ref={ref}
            required
        />
    );
});

export default Input;

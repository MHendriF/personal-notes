import { forwardRef } from 'react';

const Textarea = forwardRef((props, ref) => {
    const { rows, placeholder, name, value, onInput } = props;
    return (
        <textarea
            id={name}
            className='text-sm border border-gray-500 rounded w-full py-2 px-3 text-slate-900 placeholder: opacity-60'
            placeholder={placeholder}
            onInput={onInput}
            rows={rows}
            name={name}
            value={value}
            ref={ref}
        />
    );
});

export default Textarea;

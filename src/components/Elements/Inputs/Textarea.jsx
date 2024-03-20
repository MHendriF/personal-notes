import { forwardRef } from 'react';

const Textarea = forwardRef((props, ref) => {
    const { rows, placeholder, name } = props;
    return (
        <textarea
            id={name}
            className='text-sm border rounded w-full py-2 px-3 text-slate-900 placeholder: opacity-60'
            placeholder={placeholder}
            rows={rows}
            name={name}
            ref={ref}
        />
    );
});

export default Textarea;

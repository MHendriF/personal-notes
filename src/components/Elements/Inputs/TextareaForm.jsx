import { forwardRef } from 'react';
import Label from './Label';
import Textarea from './Textarea';

const TextareaForm = forwardRef((props, ref) => {
    const { label, name, rows, placeholder, value, onInput } = props;
    return (
        <div className='mb-6'>
            <Label htmlFor={name}>{label}</Label>
            <Textarea name={name} value={value} rows={rows} placeholder={placeholder} ref={ref} onInput={onInput}></Textarea>
        </div>
    );
});

export default TextareaForm;

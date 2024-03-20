import { forwardRef } from 'react';
import Label from './Label';
import Textarea from './Textarea';

const TextareaForm = forwardRef((props, ref) => {
    const { label, name, rows, placeholder } = props;
    return (
        <div className='mb-6'>
            <Label htmlFor={name}>{label}</Label>
            <Textarea name={name} rows={rows} placeholder={placeholder} ref={ref}></Textarea>
        </div>
    );
});

export default TextareaForm;

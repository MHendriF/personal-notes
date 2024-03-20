import { forwardRef } from 'react';
import Input from './Input';
import Label from './Label';

const InputForm = forwardRef((props, ref) => {
    const { label, name, value, type, placeholder, onInput } = props;
    return (
        <div className='mb-6'>
            <Label htmlFor={name}>{label}</Label>
            <Input name={name} value={value} type={type} placeholder={placeholder} ref={ref} onInput={onInput}></Input>
        </div>
    );
});

export default InputForm;

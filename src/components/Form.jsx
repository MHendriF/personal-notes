import { useState } from 'react';
import TextArea from './TextArea';

export default function Form() {
    const [note, setNote] = useState('');

    function handleSubmit() {}

    function handleChangeItem() {}

    return (
        <form onSubmit={handleSubmit}>
            <TextArea
                name='note'
                value={note}
                onInput={handleChangeItem}
                placeholder='Catatan...'
                className='your-class-name'
            />
            <button type='submit'>Simpan</button>
        </form>
    );
}

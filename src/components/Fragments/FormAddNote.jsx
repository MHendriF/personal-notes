import { useState } from 'react';
import Button from '../Elements/Buttons';
import InputForm from '../Elements/Inputs/InputForm';
import TextareaForm from '../Elements/Inputs/TextareaForm';
import { useRef } from 'react';
import { useEffect } from 'react';

const FormAddNote = () => {
    const [notes, setNotes] = useState([]);
    const [id, setId] = useState(7);
    const [inputValue, setInputValue] = useState('');

    const titleRef = useRef(null);
    const maxCharLimit = 50;
    const remainingChars = maxCharLimit - inputValue.length;

    useEffect(() => {
        titleRef.current.focus();
    }, []);

    const handleAddNote = (e) => {
        e.preventDefault();
        setId(id + Date.now());

        const newNote = {
            id: id,
            title: e.target.title.value,
            body: e.target.body.value,
            createdAt: Date.now(),
            archived: false,
        };
        console.log(newNote);
        setNotes([...notes, newNote]);
    };

    function handlerInput(e) {
        let char = e.target.value;
        setInputValue(char.slice(0, 50));
    }

    return (
        <form onSubmit={handleAddNote}>
            <p className='font-medium text-slate-600 mb-8 text-end text-xs'>Sisa karakter : {remainingChars}</p>
            <InputForm
                label='Title'
                name='title'
                type='text'
                value={inputValue}
                placeholder='Note title here ....'
                ref={titleRef}
                onInput={(e) => handlerInput(e)}></InputForm>
            <TextareaForm label='Description' name='body' rows='5' placeholder='Note description here ....'></TextareaForm>
            <Button classname='bg-blue-600 w-full' type='submit'>
                Submit
            </Button>
        </form>
    );
};

export default FormAddNote;
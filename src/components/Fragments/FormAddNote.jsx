import { useState } from 'react';
import Button from '../Elements/Buttons';
import InputForm from '../Elements/Inputs/InputForm';
import TextareaForm from '../Elements/Inputs/TextareaForm';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../../redux/slices/noteSlice';

const FormAddNote = () => {
    const [id, setId] = useState(Date.now());
    const [inputTitle, setInputTitle] = useState('');
    const [inputBody, setInputBody] = useState('');

    const dispatch = useDispatch();
    const titleRef = useRef(null);
    const maxCharLimit = 50;
    const remainingChars = maxCharLimit - inputTitle.length;

    useEffect(() => {
        titleRef.current.focus();
    }, []);

    const handleAddNote = (e) => {
        e.preventDefault();
        setId(Date.now());

        const newNote = {
            id: id,
            title: e.target.title.value,
            body: e.target.body.value,
            createdAt: Date.now(),
            archived: false,
        };
        //console.log(newNote);
        dispatch(addNote(newNote));
        clearInput();
    };

    const clearInput = () => {
        setInputTitle('');
        setInputBody('');
        //console.log('clearInput');
    };

    const handlerInput = (e) => {
        let char = e.target.value;
        setInputTitle(char.slice(0, 50));
    };

    return (
        <form onSubmit={handleAddNote}>
            <p className='font-medium text-slate-600 mt-3 text-end text-xs'>Remaining characters : {remainingChars}</p>
            <InputForm
                label='Title'
                name='title'
                type='text'
                value={inputTitle}
                placeholder='Note title here ....'
                ref={titleRef}
                onInput={(e) => handlerInput(e)}></InputForm>
            <TextareaForm
                label='Description'
                name='body'
                rows='5'
                placeholder='Note description here ....'
                value={inputBody}
                onInput={(e) => setInputBody(e.target.value)}></TextareaForm>
            <Button classname='bg-blue-600 w-full' type='submit'>
                Submit
            </Button>
        </form>
    );
};

export default FormAddNote;

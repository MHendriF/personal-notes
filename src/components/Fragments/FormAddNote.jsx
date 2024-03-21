import { useState, useContext, useRef, useEffect } from 'react';
import Button from '../Elements/Buttons';
import InputForm from '../Elements/Inputs/InputForm';
import TextareaForm from '../Elements/Inputs/TextareaForm';
import { useDispatch } from 'react-redux';
import { addNote } from '../../redux/slices/noteSlice';
import { DarkMode } from '../../context/DarkMode';

const FormAddNote = () => {
    const [id, setId] = useState(Date.now());
    const [inputTitle, setInputTitle] = useState('');
    const [inputBody, setInputBody] = useState('');
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
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
        dispatch(addNote(newNote));
        clearInput();
    };

    const clearInput = () => {
        setInputTitle('');
        setInputBody('');
    };

    const handlerInput = (e) => {
        let char = e.target.value;
        setInputTitle(char.slice(0, 50));
    };

    return (
        <form onSubmit={handleAddNote}>
            <p className={`font-medium mt-3 text-end text-xs ${isDarkMode && 'text-white'} ${!isDarkMode && 'text-slate-700'}`}>
                Remaining characters : {remainingChars}
            </p>
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
            <Button classname='bg-blue-600 w-full text-white' type='submit'>
                Submit
            </Button>
        </form>
    );
};

export default FormAddNote;

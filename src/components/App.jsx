import { useState } from 'react';
import Input from './Input';
import NavBar from './NavBar';
import TextArea from './TextArea';
import Button from './Button';
import { getInitialData, showFormattedDate } from '../utils';

// import style
import '../styles/style.css';
import { useRef } from 'react';

function App() {
    const data = getInitialData();

    const [notes, setNotes] = useState(data);
    const [archive, setArchive] = useState([]);
    const [id, SetId] = useState(7);
    const [inputValue, setInputValue] = useState('');

    const maxCharLimit = 50;
    const remainingChars = maxCharLimit - inputValue.length;
    const noteItemRefs = useRef([]);

    function handlerSubmit(e) {
        e.preventDefault();
        SetId(id + 1);

        const newNote = {
            id: id,
            title: e.target.title.value,
            body: e.target.body.value,
            createdAt: Date.now(),
            archived: false,
        };

        setNotes([...notes, newNote]);
    }

    function handlerInput(e) {
        let char = e.target.value;
        setInputValue(char.slice(0, 50));
    }

    function handlerSearch(e) {
        const searchValue = e.target.value.toLowerCase();
        console.log(searchValue);
        console.log(noteItemRefs);
        notes.forEach((note, index) => {
            const noteItem = noteItemRefs.current[index];
            if (noteItem) {
                if (note.title.toLowerCase().includes(searchValue)) {
                    noteItem.classList.remove('note-item__d-none');
                } else {
                    noteItem.classList.add('note-item__d-none');
                }
            }
        });
    }

    return (
        <>
            <NavBar>
                <Input
                    placeholder='Search notes...'
                    className='note-app__header--search'
                    type='text'
                    onInput={(e) => handlerSearch(e)}
                />
            </NavBar>
            <div className='note-app__body'>
                <form className='note-input' onSubmit={(e) => handlerSubmit(e)}>
                    <h2>Create Notes</h2>
                    <p className='note-input__title__char-limit'>
                        Remaining characters: {remainingChars}
                    </p>
                    <Input
                        name='title'
                        onInput={(e) => handlerInput(e)}
                        value={inputValue}
                        className='note-input__title'
                        type='text'
                        placeholder='title'
                    />
                    <TextArea
                        name='body'
                        className='note-input__body'
                        placeholder='description'
                    />
                    <Button className='note-input__button' type='submit'>
                        Create
                    </Button>
                </form>
                <h2>Notes</h2>
                {notes.length === 0 && (
                    <p className='notes-list__empty-message'>Notes is empty</p>
                )}
                <div className='notes-list'>
                    {notes.length > 0 &&
                        notes.map((note, index) => (
                            <div
                                className='note-item'
                                ref={(ref) =>
                                    (noteItemRefs.current[index] = ref)
                                }
                                key={note.id}
                            >
                                <div className='note-item__content'>
                                    <h2 className='note-item__title'>
                                        {note.title}
                                    </h2>
                                    <p className='note-item__date'>
                                        {showFormattedDate(note.createdAt)}
                                    </p>
                                    <p className='note-item__body'>
                                        {note.body}
                                    </p>
                                </div>
                                <div className='note-item__action'>
                                    <Button
                                        className='note-item__delete-button'
                                        onClick={() =>
                                            setNotes(
                                                notes.filter(
                                                    (n) => n.id !== note.id
                                                )
                                            )
                                        }
                                    >
                                        Delete
                                    </Button>
                                    <Button
                                        className='note-item__archive-button'
                                        onClick={() => {
                                            note.archived = true;
                                            setNotes(
                                                notes.filter(
                                                    (n) => n.archived === false
                                                )
                                            );
                                            setArchive([...archive, note]);
                                        }}
                                    >
                                        Archive
                                    </Button>
                                </div>
                            </div>
                        ))}
                </div>
                <h2>Archived</h2>
                {archive.length === 0 && (
                    <p className='notes-list__empty-message'>Arcive is empty</p>
                )}
                <div className='notes-list'>
                    {archive.length > 0 &&
                        archive.map((note) => (
                            <div className='note-item' key={note.id}>
                                <div className='note-item__content'>
                                    <h2 className='note-item__title'>
                                        {note.title}
                                    </h2>
                                    <p className='note-item__date'>
                                        {showFormattedDate(note.createdAt)}
                                    </p>
                                    <p className='note-item__body'>
                                        {note.body}
                                    </p>
                                </div>
                                <div className='note-item__action'>
                                    <Button
                                        className='note-item__delete-button'
                                        onClick={() =>
                                            setArchive(
                                                archive.filter(
                                                    (n) => n.id !== note.id
                                                )
                                            )
                                        }
                                    >
                                        Delete
                                    </Button>
                                    <Button
                                        className='note-item__archive-button'
                                        onClick={() => {
                                            note.archived = false;
                                            setArchive(
                                                archive.filter(
                                                    (n) => n.archived === true
                                                )
                                            );
                                            setNotes([...notes, note]);
                                        }}
                                    >
                                        Active
                                    </Button>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
}

export default App;

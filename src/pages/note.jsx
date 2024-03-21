import { Fragment, useEffect, useState, useRef, useContext } from 'react';
import { useSelector } from 'react-redux';
import { DarkMode } from '../context/DarkMode';
import FormAddNote from '../components/Fragments/FormAddNote';
import Navbar from '../components/Layouts/Navbar';
import CardNote from '../components/Fragments/CardNote';

const NotePage = () => {
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
    const [query, setQuery] = useState('');
    const [filteredNotes, setFilteredNotes] = useState([]);
    const notes = useSelector((state) => state.notes.data);
    const noteRef = useRef(null);
    const filteredNotesRef = useRef(null);

    useEffect(() => {
        if (notes.length > 0) {
            localStorage.setItem('notes', JSON.stringify(notes));
        }
    }, [notes]);

    useEffect(() => {
        if (query.length > 0) {
            setFilteredNotes(notes.filter((note) => note.title.toLowerCase().includes(query.toLowerCase())));
            noteRef.current.style.display = 'none';
            filteredNotesRef.current.style.display = 'block';
        } else {
            noteRef.current.style.display = 'block';
            filteredNotesRef.current.style.display = 'none';
        }
    }, [query, notes]);

    const handleSearch = (e) => {
        let char = e.target.value;
        setQuery(char);
    };

    return (
        <Fragment>
            <Navbar onInput={handleSearch} />
            <div className={`w-full min-h-screen  ${isDarkMode && 'bg-slate-900'}`}>
                <div className='flex items-center justify-center pt-10 pb-10'>
                    <div className='w-full max-w-md'>
                        <h1 className='text-3xl font-bold mb-10 text-center text-blue-600'>Create Note</h1>
                        <FormAddNote></FormAddNote>
                    </div>
                </div>

                <h1 className='text-3xl font-bold mb-2 mt-10 text-blue-600 ml-20'>Notes</h1>
                <div ref={noteRef}>
                    <div className='flex flex-wrap w-full ml-20 mr-20'>
                        {notes.length > 0 &&
                            notes.map(
                                (note) =>
                                    !note.archived && (
                                        <CardNote key={note.id}>
                                            <CardNote.Header title={note.title} createdAt={note.createdAt}></CardNote.Header>
                                            <CardNote.Body title={note.title}>{note.body}</CardNote.Body>
                                            <CardNote.Footer id={note.id} archived={note.archived}></CardNote.Footer>
                                        </CardNote>
                                    ),
                            )}
                    </div>
                    {notes.filter((note) => !note.archived).length === 0 && (
                        <div
                            className={`w-full flex items-center justify-center pb-20 ${isDarkMode && 'text-white'} ${!isDarkMode && 'text-slate-700'}`}>
                            --- Your Notes is empty ---
                        </div>
                    )}
                </div>
                <div ref={filteredNotesRef}>
                    <div className='flex flex-wrap w-full ml-20 mr-20'>
                        {filteredNotes.length > 0 &&
                            filteredNotes.map(
                                (note) =>
                                    !note.archived && (
                                        <CardNote key={note.id}>
                                            <CardNote.Header title={note.title} createdAt={note.createdAt}></CardNote.Header>
                                            <CardNote.Body title={note.title}>{note.body}</CardNote.Body>
                                            <CardNote.Footer id={note.id} archived={note.archived}></CardNote.Footer>
                                        </CardNote>
                                    ),
                            )}
                    </div>
                    {filteredNotes.filter((note) => !note.archived).length === 0 && (
                        <div
                            className={`w-full flex items-center justify-center pb-20 ${isDarkMode && 'text-white'} ${!isDarkMode && 'text-slate-700'}`}>
                            {`--- Your search results "${query}" is empty ---`}
                        </div>
                    )}
                </div>

                <h1 className='text-3xl font-bold mb-2 mt-10 text-blue-600 ml-20'>Archive</h1>
                <div className='flex flex-wrap ml-20 mr-20'>
                    {notes.length > 0 &&
                        notes.map(
                            (note) =>
                                note.archived && (
                                    <CardNote key={note.id}>
                                        <CardNote.Header title={note.title} createdAt={note.createdAt}></CardNote.Header>
                                        <CardNote.Body title={note.title}>{note.body}</CardNote.Body>
                                        <CardNote.Footer id={note.id} archived={note.archived}></CardNote.Footer>
                                    </CardNote>
                                ),
                        )}
                </div>

                {notes.filter((note) => note.archived).length === 0 && (
                    <div className={`w-full flex items-center justify-center pb-20 ${isDarkMode && 'text-white'} ${!isDarkMode && 'text-slate-700'}`}>
                        --- Your Archive is empty ---
                    </div>
                )}
            </div>
        </Fragment>
    );
};

export default NotePage;

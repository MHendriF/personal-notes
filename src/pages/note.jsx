import { Fragment } from 'react';
import Navbar from '../components/Layouts/Navbar';
import { DarkMode } from '../context/DarkMode';
import { useContext } from 'react';
import FormAddNote from '../components/Fragments/FormAddNote';
import { useEffect, useState } from 'react';
import { getInitialData } from '../utils';
import CardNote from '../components/Fragments/CardNote';

const NotePage = (props) => {
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
    const [notes, setNotes] = useState([]);
    const [archive, setArchive] = useState([]);
    const [id, setId] = useState(7);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        setNotes(getInitialData);
        console.log('notes: ', notes);
    }, []);

    // const handleAddNote = (e) => {
    //     e.preventDefault();
    //     setId(id + Date.now());

    //     const newNote = {
    //         id: id,
    //         title: e.target.title.value,
    //         body: e.target.body.value,
    //         createdAt: Date.now(),
    //         archived: false,
    //     };
    //     console.log(newNote);
    //     setNotes([...notes, newNote]);
    // };

    return (
        <Fragment>
            <Navbar></Navbar>
            {/* <div className='h-screen flex items-center justify-center'>Horizontally and Vertically Centered Element</div> */}
            <div className={`w-full min-h-screen  ${isDarkMode && 'bg-slate-900'}`}>
                <div className='flex items-center justify-center pt-10 pb-10'>
                    <div className='w-full max-w-md'>
                        <h1 className='text-3xl font-bold mb-2 text-blue-600'>Add Notes</h1>

                        <FormAddNote></FormAddNote>
                    </div>
                </div>

                <h1 className='text-3xl font-bold mb-2 text-blue-600 m-5'>Your Notes</h1>
                <div className='flex justify-items-center'>
                    <div className='flex flex-wrap'>
                        {notes.length > 0 &&
                            notes.map((note) => (
                                <CardNote key={note.id}>
                                    <CardNote.Header title={note.title} createdAt={note.createdAt}></CardNote.Header>
                                    <CardNote.Body title={note.title}>{note.body}</CardNote.Body>
                                    <CardNote.Footer id={note.id}></CardNote.Footer>
                                </CardNote>
                            ))}
                        {notes.length === 0 && <p className='text-center'>No notes</p>}
                    </div>
                </div>

                <h1 className='text-3xl font-bold mb-2 text-blue-600 m-5'>Your Archive</h1>
                <div className='flex flex-wrap'>
                    {archive.length > 0 &&
                        archive.map((note) => (
                            <CardNote key={note.id}>
                                <CardNote.Header title={note.title} createdAt={note.createdAt}></CardNote.Header>
                                <CardNote.Body title={note.title}>{note.body}</CardNote.Body>
                                <CardNote.Footer id={note.id}></CardNote.Footer>
                            </CardNote>
                        ))}
                    {archive.length === 0 && <div className='w-full flex items-center justify-center'>Empty archive</div>}
                </div>
            </div>
        </Fragment>
    );
};

export default NotePage;

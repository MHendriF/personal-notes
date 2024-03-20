import { Fragment } from 'react';
import Navbar from '../components/Layouts/Navbar';
import { DarkMode } from '../context/DarkMode';
import { useContext } from 'react';
import FormAddNote from '../components/Fragments/FormAddNote';
import { useEffect, useState } from 'react';
import { getInitialData } from '../utils';
import { useSelector } from 'react-redux';
import CardNote from '../components/Fragments/CardNote';

const NotePage = (props) => {
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
    //const [notes, setNotes] = useState([]);
    const [archive, setArchive] = useState([]);
    const notes = useSelector((state) => state.notes.data);
    const initalNotes = getInitialData();

    console.log('initalNotes: ', initalNotes);

    useEffect(() => {
        if (notes.length === 0 && initalNotes.length > 0) {
            localStorage.setItem('notes', JSON.stringify(initalNotes));
            console.log('insert');
        }
    }, []);

    useEffect(() => {
        if (notes.length > 0) {
            localStorage.setItem('notes', JSON.stringify(notes));
        }
        console.log('notes: ', notes);
    }, [notes]);

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

                <h1 className='text-3xl font-bold mb-2 mt-10 text-blue-600 ml-20'>Your Notes</h1>
                <div className='flex flex-wrap w-full ml-20 mr-20'>
                    {notes.length > 0 &&
                        notes.map((note) => (
                            <CardNote key={note.id}>
                                <CardNote.Header title={note.title} createdAt={note.createdAt}></CardNote.Header>
                                <CardNote.Body title={note.title}>{note.body}</CardNote.Body>
                                <CardNote.Footer id={note.id}></CardNote.Footer>
                            </CardNote>
                        ))}
                </div>
                {notes.length === 0 && <div className='w-full flex items-center justify-center'>Empty Notes</div>}

                <h1 className='text-3xl font-bold mb-2 mt-10 text-blue-600 ml-20'>Your Archive</h1>
                <div className='flex flex-wrap'>
                    {archive.length > 0 &&
                        archive.map((note) => (
                            <CardNote key={note.id}>
                                <CardNote.Header title={note.title} createdAt={note.createdAt}></CardNote.Header>
                                <CardNote.Body title={note.title}>{note.body}</CardNote.Body>
                                <CardNote.Footer id={note.id}></CardNote.Footer>
                            </CardNote>
                        ))}
                </div>
                {archive.length === 0 && <div className='w-full flex items-center justify-center'>Empty archive</div>}
            </div>
        </Fragment>
    );
};

export default NotePage;

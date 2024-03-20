import Button from '../Elements/Buttons';
import { showFormattedDate } from '../../utils';
import { useDispatch } from 'react-redux';
import { archiveNote, deleteNote } from '../../redux/slices/noteSlice';

const CardNote = (props) => {
    const { children } = props;

    return (
        <div className='w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 my-2 flex flex-col justify-between'>{children}</div>
    );
};

const Header = (props) => {
    const { title, createdAt } = props;

    return (
        <div className='px-5 py-5 pb-5'>
            <a href='#'>
                <h5 className='text-xl font-semibold tracking-tight text-white'>{title.length > 30 ? `${title.substring(0, 29)} ...` : title}</h5>
                <p className='text-xs text-white'>{showFormattedDate(createdAt)}</p>
            </a>
        </div>
    );
};

const Body = (props) => {
    const { children } = props;
    return (
        <div className='px-5 pb-5 h-full'>
            <a href='#'>
                <p className='text-m text-white'>{children.length > 200 ? `${children.substring(0, 200)} ...` : children}</p>
            </a>
        </div>
    );
};

const Footer = (props) => {
    const { id, archived } = props;
    const dispatch = useDispatch();
    const handleDeleteNote = (id) => {
        dispatch(deleteNote(id));
    };

    const handleArchiveNote = (id) => {
        console.log('Archive: ', id);
        dispatch(archiveNote(id));
    };

    return (
        <div className='flex items-center justify-between px-5 pb-5'>
            <Button onClick={() => handleDeleteNote(id)} classname='bg-red-600'>
                Delete
            </Button>
            <Button onClick={() => handleArchiveNote(id)} classname='bg-orange-600'>
                {archived ? 'Unarchive' : 'Archive'}
            </Button>
        </div>
    );
};

CardNote.Header = Header;
CardNote.Body = Body;
CardNote.Footer = Footer;

export default CardNote;

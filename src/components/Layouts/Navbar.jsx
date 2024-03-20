import { useContext } from 'react';
import { DarkMode } from '../../context/DarkMode';
import Button from '../Elements/Buttons';
import Input from '../Elements/Inputs/Input';

const Navbar = (props) => {
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
    const { onInput } = props;

    return (
        <div className='flex justify-end h-20 bg-blue-600 text-white items-center px-10'>
            <div className='w-1/4 mr-2'>
                <Input placeholder='Search notes...' onInput={onInput} name='search' type='text'></Input>
            </div>
            <Button
                classname={`px-10 mx-5 rounded ${isDarkMode && 'bg-blue-800 text-white'} ${!isDarkMode && 'bg-slate-800 text-gray-100'}`}
                onClick={() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? 'Light' : 'Dark'}
            </Button>
        </div>
    );
};

export default Navbar;

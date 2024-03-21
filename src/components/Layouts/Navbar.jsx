import { useContext } from 'react';
import { DarkMode } from '../../context/DarkMode';
import Button from '../Elements/Buttons';
import Input from '../Elements/Inputs/Input';

const Navbar = (props) => {
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
    const { onInput } = props;

    return (
        <div className={`flex justify-end h-20 items-center px-10 ${isDarkMode && 'bg-gray-800'} ${!isDarkMode && 'bg-blue-600 '}`}>
            <div className='w-1/4 mr-2'>
                <Input placeholder='Search notes...' onInput={onInput} name='search' type='text'></Input>
            </div>
            <Button
                classname={`px-10 mx-5 rounded ${isDarkMode && 'bg-blue-800 text-white'} ${!isDarkMode && 'bg-gray-400 text-slate-800'}`}
                onClick={() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? 'Light' : 'Dark'}
            </Button>
        </div>
    );
};

export default Navbar;

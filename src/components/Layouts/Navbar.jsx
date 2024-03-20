import { useContext } from 'react';
import Button from '../Elements/Buttons';
import { DarkMode } from '../../context/DarkMode';
import Input from '../Elements/Inputs/Input';

const Navbar = () => {
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

    return (
        <div className='flex justify-end h-20 bg-blue-600 text-white items-center px-10'>
            Search input
            <Input placeholder='Search ...'></Input>
            <Button className='bg-black px-10 mx-5 text-white rounded' onClick={() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? 'Light' : 'Dark'}
            </Button>
        </div>
    );
};

export default Navbar;

import { useContext } from 'react';
import { DarkMode } from '../../../context/DarkMode';

const Label = (props) => {
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
    const { htmlFor, children } = props;

    return (
        <label htmlFor={htmlFor} className={`block ext-sm font-bold mb-2 ${isDarkMode && 'text-white'} ${!isDarkMode && 'text-slate-700'}`}>
            {children}
        </label>
    );
};

export default Label;

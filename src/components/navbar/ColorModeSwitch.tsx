import React from 'react';
import { useColorMode } from '@chakra-ui/react';
import './ColorModeSwitch.css';

const ColorModeSwitch: React.FC = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <label className="switch">
            <input
                type="checkbox"
                checked={colorMode === 'light'}
                onChange={toggleColorMode}
            />
            <span className="slider"></span>
        </label>
    );
};

export default ColorModeSwitch;
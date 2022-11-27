import React, { useEffect, useState } from 'react'
import { ThemeState } from '../store/themeAtom';
import { useRecoilState } from 'recoil';

const useTheme = () => {
    const [darkThemeState, setDarkThemeState] = useRecoilState<boolean>(ThemeState);
    useEffect(() => {
        localStorage.setItem('darkMode', darkThemeState + "");
        // setDarkThemeState(Boolean(localStorage.getItem('darkMode')));
    }, [darkThemeState])

    // const handelChangeTheme = (): void => {
    //     setDarkThemeState((prev) => !prev)
    // }
    return {
        darkThemeState,
        setDarkThemeState
    }
}

export default useTheme;
import { atom } from "recoil";

export const ThemeState = atom({
    key: 'darkMode',
    default: false,
});
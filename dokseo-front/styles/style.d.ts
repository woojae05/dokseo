import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        primary: string,
        secondary: string,
        fontColor: string,
        darkTheme: boolean,
        reverse: string
    }
}
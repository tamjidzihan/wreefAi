declare module 'react-slick' {
    import { Component, ReactNode } from 'react';

    export interface Settings {
        dots?: boolean;
        infinite?: boolean;
        speed?: number;
        slidesToShow?: number;
        slidesToScroll?: number;
        autoplay?: boolean;
        [key: string]: any;
    }

    export default class Slider extends Component<Settings> {
        render(): ReactNode;
    }
}

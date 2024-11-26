import style from './ImageFallBack.module.css';
import classNames from 'classnames/bind';
import { forwardRef } from 'react';
const cx = classNames.bind(style);
const ImageFallBack = forwardRef(({ className, ...props }, ref) => {

    const classes = cx('container', {
        [className]: className,
    });

    return (
        <img className={cx(classes)} {...props} onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = "/placeholder.svg";
        }} />
    );
});


export default ImageFallBack;
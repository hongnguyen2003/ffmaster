import { forwardRef } from 'react';
import style from './InputBar.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(style);

const InputBar = forwardRef(({ className, ...props }, ref) => {
    const classes = cx('container', {
        [className]: className,
    });
    return (
        <input ref={ref} className={cx(classes)} {...props}></input>

    )
})


export default InputBar;
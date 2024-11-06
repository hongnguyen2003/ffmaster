import { forwardRef } from 'react';
import style from './LogoWeb.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(style);

const LogoWeb = forwardRef(({ className, big, customText, ...props }, ref) => {
    const classes = cx('container', big && 'big', {
        [className]: className,
    });
    return (
        <a href='/' className={classes}>
            <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt='Logo'></img>
            <div>
                <h3>FIREKING</h3>
                {customText ? <h6>{customText}</h6> : <h6>Mua bán acc game</h6>}
            </div>
        </a>

    )
})


export default LogoWeb;
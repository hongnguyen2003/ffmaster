import { forwardRef } from 'react';
import style from './LogoWeb.module.css';
import classNames from 'classnames/bind';
import ImageFallBack from 'components/mini.components/ImageFallBack';
const cx = classNames.bind(style);

const LogoWeb = forwardRef(({ className, big, customText, ...props }, ref) => {
    const classes = cx('container', big && 'big', {
        [className]: className,
    });
    return (
        <a href='/' className={classes}>
            <ImageFallBack src={`${process.env.PUBLIC_URL}/logo.svg`} alt='Logo'></ImageFallBack>
            <div>
                <h3>FIREKING</h3>
                {customText ? <h6>{customText}</h6> : <h6>Mua bán acc game</h6>}
            </div>
        </a>

    )
})


export default LogoWeb;
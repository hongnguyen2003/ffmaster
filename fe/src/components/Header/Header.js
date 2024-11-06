/**
 * Header component
 *
 * @param {Object} props - Component properties
 * @param {boolean} props.isLogin - Indicates if the user is logged in
 * @returns {JSX.Element} The rendered Header component
 */

import PropTypes from 'prop-types';
import style from './Header.module.css';
import classNames from 'classnames/bind';
import Search from './Search';
import Button from 'components/Button';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import LogoWeb from 'components/LogoWeb';
const cx = classNames.bind(style);


export default function Header({ isLogin }) {
    return (
        <header className={cx('container')}>
            <LogoWeb />
            <Search />
            <div className={cx('rightContainer')}>
                <div className={cx('loginContainer')}>
                    <Button variab='text' className={cx('authBtn')}>Đăng nhập</Button>
                    <Button variab='text' className={cx('authBtn')}>Đăng ký</Button>
                </div>
                <Button left={true} variab='text' icon={faCartShopping}>Giỏ hàng</Button>
            </div>
            <img className={cx('bg')} src={`${process.env.PUBLIC_URL}/banner1.jpg`} />
        </header>

    )
}

Header.propTypes = {
    isLogin: PropTypes.bool
}
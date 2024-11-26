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
import ImageFallBack from 'components/mini.components/ImageFallBack';
import Search from './Search';
import Button from 'components/mini.components/Button';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import LogoWeb from 'components/mini.components/LogoWeb';
import { useDispatch, useSelector } from 'react-redux';
import { turnForm } from '../../../redux/slices/authSlice';
import { turnCart } from '../../../redux/slices/cartSlice';
import { changeFormType } from '../../../redux/slices/authSlice';
import useAuthCheck from "hooks/CheckLogin";
import { selectUserInfo, selectIsAuthenticated } from '../../../redux/selectors/authSelectors';
import { logout } from '../../../redux/slices/authSlice';
const cx = classNames.bind(style);

export default function Header() {
    const dispatch = useDispatch();
    useAuthCheck();
    const userInfo = useSelector(selectUserInfo);
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const handleClick = (type) => {
        dispatch(turnForm());
        dispatch(changeFormType(type));
    };

    const handleTurnCart = () => {
        dispatch(turnCart());
     };

    const handleLogout = async () => {
        await fetch('http://localhost:8080/api/logout', { method: 'GET', credentials: 'include', mode: 'cors' });
        dispatch(logout());
    };
    useAuthCheck();
    return (
        <header className={cx('container')}>
            <LogoWeb />
            <Search />
            <div className={cx('rightContainer')}>
                {isAuthenticated ?
                    (<div>

                        <Button variab='text' onClick={() => { handleClick('PROFILE') }} className={cx('authBtn')}>
                            {userInfo.username}
                        </Button>
                        <Button variab='text' onClick={handleLogout} className={cx('authBtn')}>
                            Đăng xuất
                        </Button>

                    </div>
                    )
                    :
                    (
                        <div className={cx('loginContainer')}>
                            <Button variab='text' onClick={() => handleClick('LOGIN')} className={cx('authBtn')}>Đăng nhập</Button>
                            <Button variab='text' onClick={() => handleClick('REGISTER')} className={cx('authBtn')}>Đăng ký</Button>
                        </div>
                    )}
                <Button left={true} variab='text' icon={faCartShopping} onClick={handleTurnCart}>Giỏ hàng</Button>
            </div>
            <ImageFallBack className={cx('bg')} src={`${process.env.PUBLIC_URL}/banner1.jpg`} />
        </header>

    )
}

Header.propTypes = {
    isLogin: PropTypes.bool
}
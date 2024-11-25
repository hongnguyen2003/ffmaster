import style from './LoginForm.module.css';
import classNames from 'classnames/bind';
import { faRightToBracket, faXmark, faUserPlus, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/mini.components/Button';
import InputBar from 'components/mini.components/InputBar';
import LogoWeb from 'components/mini.components/LogoWeb';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeUserInfo, login } from '../../../redux/slices/authSlice';
const cx = classNames.bind(style);

export default function LoginForm({ setFormType, onClose, className, ...props }) {
    const [authData, setAuthData] = useState({
        username: '',
        password: '',
    });
    const [eye, setEye] = useState(false);

    const dispatch = useDispatch();
    // useAuthCheck();
    const handleLogin = async () => {
        try {
            const fetchData = await fetch('http://localhost:8080/api/login', {
                mode: 'cors',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(authData)
            });
            if (fetchData.ok) {
                const decoded = await fetchData.json();
                const { refresh_token, access_token, ...data } = decoded;
                localStorage.setItem('refresh_token', refresh_token);
                dispatch(changeUserInfo(data))
                dispatch(login());

                onClose();
            }
            else
                alert('Đăng nhập thất bại');
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    };
    const handleEye = () => {
        setEye(!eye);
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setAuthData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div className={cx('logoweb')}>
                <LogoWeb />
            </div>
            <InputBar
                placeholder='Tên đăng nhập'
                name='username'
                value={authData.username}
                onChange={handleChange}
                tabIndex="1"
            />
            <div className={cx('passwordWithEye')}>
                <InputBar
                    tabIndex="2"
                    type={eye ? 'text' : 'password'}
                    autoComplete="password"
                    placeholder='Mật khẩu'
                    name='password'
                    value={authData.password}
                    onChange={handleChange}
                    className={cx('password')}
                />
                <Button left className={cx('eye')} icon={eye ? faEyeSlash : faEye} onMouseDown={handleEye} onMouseUp={handleEye}></Button>
            </div>
            <div className={cx('btnGr')}>
                <Button tabIndex="0" left className={cx('other')} onClick={() => { setFormType("REGISTER") }} icon={faUserPlus}></Button>

                <Button tabIndex="3" next right className={cx('login')} icon={faRightToBracket} onClick={handleLogin}>Đăng nhập</Button>
            </div>
            <Button tabIndex="0" left className={cx('close')} icon={faXmark} onClick={onClose}></Button>
        </form>

    );
};


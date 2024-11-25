import style from './ResetPasswordForm.module.css';
import classNames from 'classnames/bind';
import { faXmark, faEye, faEyeSlash, faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/mini.components/Button';
import InputBar from 'components/mini.components/InputBar';
import LogoWeb from 'components/mini.components/LogoWeb';
import { useEffect, useState } from 'react';
import SellectBar from 'components/mini.components/SellectBar';
const cx = classNames.bind(style);

export default function ResetPasswordForm({ onClose, setFormType, className, ...props }) {
    const [authData, setAuthData] = useState({
        password: '',
        repassword: '',
    });
    const [eye, setEye] = useState(false);
    const handleRegister = async () => {
        try {
            if (!authData.password || !authData.repassword) {
                return alert('Vui lòng điền đầy đủ thông tin');
            }
            if (authData.password !== authData.repassword) {
                return alert('Mật khẩu và xác nhận mật khẩu không khớp');
            }
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{7,}$/;
            if (!passwordRegex.test(authData.password)) {
                return alert('Mật khẩu phải chứa ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường.');
            }
            const fetchData = await fetch('http://localhost:8080/api/changePassword', {
                mode: 'cors',
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(authData)
            });
            const decoded = await fetchData.json();
            if (fetchData.ok) {
                return alert(decoded.message);
            }
            return alert('failed to change password');

        } catch (error) {
            console.error('Error fetching data:', error);
        }

    };

    const handleChange = (e) => {

        const { name, value } = e.target;
        setAuthData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    const handleEye = () => {
        setEye(!eye);
    }


    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div className={cx('logoweb')}>
                <LogoWeb />
            </div>

            <div className={cx('passwordWithEye')}>
                <InputBar
                    tabIndex="5"
                    type={eye ? 'text' : 'password'}
                    autoComplete="new-password"
                    placeholder='Mật khẩu'
                    name='password'
                    value={authData.password}
                    onChange={handleChange}
                    className={cx('password')}
                />
                <Button left className={cx('eye')} icon={eye ? faEyeSlash : faEye} onMouseDown={handleEye} onMouseUp={handleEye}></Button>
            </div>
            <InputBar
                tabIndex="6"
                type='password'
                className={cx('repassword')}
                name='repassword'
                autoComplete="new-password"
                placeholder='Nhập lại mật khẩu'
                value={authData.repassword}
                onChange={handleChange}
            />

            <div className={cx('btnGr')}>
                <Button left className={cx('other')} icon={faUser} onClick={() => { setFormType("PROFILE") }}></Button>
                <Button tabIndex="8" next right className={cx('regbtn')} icon={faKey} onClick={handleRegister}>Đổi mật khẩu</Button>
            </div>
            <Button left className={cx('close')} icon={faXmark} onClick={onClose}></Button>

        </form>
    );
};


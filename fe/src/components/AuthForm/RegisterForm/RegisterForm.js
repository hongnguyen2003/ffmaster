import style from './RegisterForm.module.css';
import classNames from 'classnames/bind';
import { faRightToBracket, faXmark, faEye, faEyeSlash, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/mini.components/Button';
import InputBar from 'components/mini.components/InputBar';
import LogoWeb from 'components/mini.components/LogoWeb';
import { useEffect, useState } from 'react';
import SellectBar from 'components/mini.components/SellectBar';
const cx = classNames.bind(style);

export default function RegisterForm({ onClose, setFormType, className, ...props }) {
    const [authData, setAuthData] = useState({
        username: '',
        password: '',
        repassword: '',
        fullname: '',
        address: '',
        sex: '',
        email: '',
    });
    const [eye, setEye] = useState(false);
    // useAuthCheck();
    const handleRegister = async () => {
        try {
            if (!authData.username || !authData.password || !authData.repassword || !authData.fullname || !authData.address || !authData.sex || !authData.email) {
                return alert('Vui lòng điền đầy đủ thông tin');
            }
            if (authData.password !== authData.repassword) {

                return alert('Mật khẩu và xác nhận mật khẩu không khớp');
            }
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{7,}$/;
            if (!passwordRegex.test(authData.password)) {
                return alert('Mật khẩu phải chứa ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường.');
            }
            const fetchData = await fetch('http://localhost:8080/api/register', {
                mode: 'cors',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(authData)
            });
            const decoded = await fetchData.json();
            if (fetchData.ok) {
                switch (decoded.message) {
                    case 'USER_DUPLICATE':
                        return alert('Tên đăng nhập đã tồn tại');
                    case 'EMAIL_DUPLICATE':
                        return alert('Email đã tồn tại');
                    default:
                        alert('Đăng ký thành công');
                        setFormType("LOGIN")
                        return;
                }
            }

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

    const sex = [{ value: 'Male', label: 'Nam' }, { value: 'Female', label: 'Nữ' }, { value: 'Nonbinary', label: 'Khác' }];

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div className={cx('logoweb')}>
                <LogoWeb />
            </div>
            <InputBar
                placeholder='Họ và tên'
                autoComplete="name"
                name='fullname'
                value={authData.fullname}
                onChange={handleChange}
                tabIndex="1"
            />
            <div className={cx('row')}>
                <InputBar
                    autoComplete="username"
                    placeholder='Tên đăng nhập'
                    name='username'
                    value={authData.username}
                    onChange={handleChange}
                    tabIndex="2"
                />
                <SellectBar
                    planeHoleder='Chọn giới tính' options={sex} onChange={(e) => (handleChange({ target: { ...e, name: 'sex' } }))} tabIndex="3" />
            </div>
            <InputBar
                tabIndex="4"
                type='email'
                autoComplete="email"
                placeholder='Email'
                name='email'
                value={authData.email}
                onChange={handleChange}
            />
            <div className={cx('row')}>
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
            </div>
            <InputBar
                tabIndex="7"
                type='address'
                placeholder='Địa chỉ'
                autoComplete="street-address"
                name='address'
                value={authData.address}
                onChange={handleChange}
            />

            <div className={cx('btnGr')}>
                <Button left className={cx('other')} icon={faRightToBracket} onClick={() => { setFormType("LOGIN") }}></Button>
                <Button tabIndex="8" next right className={cx('regbtn')} icon={faUserPlus} onClick={handleRegister}>Đăng ký</Button>
            </div>
            <Button left className={cx('close')} icon={faXmark} onClick={onClose}></Button>

        </form>
    );
};


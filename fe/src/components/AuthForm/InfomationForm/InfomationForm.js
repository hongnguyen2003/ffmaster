import style from './InfomationForm.module.css';
import classNames from 'classnames/bind';
import { faRightToBracket, faFloppyDisk, faXmark, faKey, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/mini.components/Button';
import InputBar from 'components/mini.components/InputBar';
import LogoWeb from 'components/mini.components/LogoWeb';
import { useEffect, useState } from 'react';
import SellectBar from 'components/mini.components/SellectBar';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserInfo } from '../../../redux/selectors/authSelectors';
import { changeUserInfo } from '../../../redux/slices/authSlice';
const cx = classNames.bind(style);

export default function InfomationForm({ onClose, setFormType, className, ...props }) {
    const userInfo = useSelector(selectUserInfo);
    const dispatch = useDispatch();

    const [authData, setAuthData] = useState(userInfo);

    const handleUpdate = async () => {
        try {
            if (!authData.username || !authData.fullname || !authData.address || !authData.sex || !authData.email) {
                return alert('Vui lòng điền đầy đủ thông tin');
            }

            const fetchData = await fetch('http://localhost:8080/api/updateUser', {
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
                switch (decoded.message) {
                    case 'EMAIL_DUPLICATE':
                        return alert('Email đã tồn tại');
                    default:
                        dispatch(changeUserInfo(authData))
                        alert('Cập nhật thành công');
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


    const sex = [{ value: 'Male', label: 'Nam' }, { value: 'Female', label: 'Nữ' }, { value: 'Nonbinary', label: 'Khác' }];
    console.log(authData.sex);

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
                    disabled
                />
                <SellectBar tabIndex="3" className={cx('sex')}
                    planeHoleder='Chọn giới tính' options={sex} defaultValue={sex.find(option => option.value === authData.sex)} onChange={(e) => (handleChange({ target: { ...e, name: 'sex' } }))} />
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
            {/* <div className={cx('row')}>
                <div className={cx('passwordWithEye')}>
                    <InputBar
                        tabIndex="2"
                        type={eye ? 'text' : 'password'}
                        autoComplete="new-password"
                        placeholder='Mật khẩu'
                        name='password'
                        value={authData.password}
                        onChange={handleChange}
                        className={cx('password')}
                    />
                    <Button tabIndex="4" left className={cx('eye')} icon={eye ? faEyeSlash : faEye} onMouseDown={handleEye} onMouseUp={handleEye}></Button>
                </div>
                <InputBar
                    tabIndex="3"
                    type='password'
                    className={cx('repassword')}
                    name='repassword'
                    autoComplete="new-password"
                    placeholder='Nhập lại mật khẩu'
                    value={authData.repassword}
                    onChange={handleChange}
                />
            </div> */}
            <InputBar
                tabIndex="5"
                type='address'
                placeholder='Địa chỉ'
                autoComplete="street-address"
                name='address'
                value={authData.address}
                onChange={handleChange}
            />

            <div className={cx('btnGr')}>
                <Button tabIndex="4" left className={cx('other')} icon={faKey} onClick={() => { setFormType("PASSWORD") }} ></Button>
                <Button tabIndex="6" next right className={cx('regbtn')} icon={faFloppyDisk} onClick={handleUpdate}>Lưu</Button>
            </div>
            <Button tabIndex="0" left className={cx('close')} icon={faXmark} onClick={onClose}></Button>

        </form>
    );
};


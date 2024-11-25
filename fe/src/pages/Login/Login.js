import classNames from 'classnames/bind';
import style from './Login.module.css';
import LoginForm from 'components/AuthForm/LoginForm';

const cx = classNames.bind(style);

export default function Login() {
    return (
        <div className={cx('container')}>
            <LoginForm></LoginForm>
        </div>
    );
}
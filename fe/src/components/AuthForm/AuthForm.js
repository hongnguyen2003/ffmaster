import style from './AuthForm.module.css';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { useSelector, useDispatch } from 'react-redux';
import { selectFormType } from '../../redux/selectors/authSelectors';
import { changeFormType } from '../../redux/slices/authSlice';
import InfomationForm from './InfomationForm';
import ResetPasswordForm from './ResetPasswordForm';
const cx = classNames.bind(style);

export default function AuthForm({ isShow, onClose, className, ...props }) {
    const type = useSelector(selectFormType);
    const [typeForm, setFormType] = useState(type);
    useEffect(() => { setFormType(type); }, [type]);
    const dispatch = useDispatch();
    const disableScroll = () => {
        document.body.style.paddingRight = "12px"; // Tắt cuộn
        document.body.style.overflow = "hidden"; // Tắt cuộn
    };
    useEffect(() => { if (isShow) disableScroll(); }, [isShow]);
    const enableScroll = () => {
        document.body.style.paddingRight = "0"; // Tắt cuộn
        document.body.style.overflow = "auto"; // Bật lại cuộn
    };
    const handleClose = () => {
        enableScroll();
        onClose();
    };


    const changeFormTypeRedux = (type) => {
        dispatch(changeFormType(type))
    };

    return (isShow &&
        <div className={cx("container")}>
            {(() => {
                switch (typeForm) {
                    case "LOGIN":
                        return <LoginForm onClose={handleClose} setFormType={changeFormTypeRedux} />;
                    case "REGISTER":
                        return <RegisterForm onClose={handleClose} setFormType={changeFormTypeRedux} />;
                    case "PROFILE":
                        return <InfomationForm onClose={handleClose} setFormType={changeFormTypeRedux} />;
                    case "PASSWORD":
                        return <ResetPasswordForm onClose={handleClose} setFormType={changeFormTypeRedux} />;
                    default:
                        return <LoginForm onClose={handleClose} setFormType={changeFormTypeRedux} />;
                }

            })()
            }
        </div>
    );
};


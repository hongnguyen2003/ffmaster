import Header from 'components/LayoutComponent/Header';
import style from './UserLayout.module.css';
import classNames from 'classnames/bind';
import Footer from 'components/LayoutComponent/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { turnForm } from '../../redux/slices/authSlice';
import { selectIsShowForm } from '../../redux/selectors/authSelectors';
import AuthForm from 'components/AuthForm/AuthForm';
const cx = classNames.bind(style);

export default function UserLayout({ children }) {
    const dispatch = useDispatch();
    const isLoginFormVisible = useSelector(selectIsShowForm);

    const handleClose = () => {
        dispatch(turnForm(false));
    };

    return (
        <div className={cx('container')}>
            <Header isLogin={false} />
            <main>
                <AuthForm isShow={isLoginFormVisible} onClose={handleClose} />
                {children}
            </main>
            <Footer />
        </div>
    );
}
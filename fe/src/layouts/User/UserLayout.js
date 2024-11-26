import Header from 'components/LayoutComponent/Header';
import style from './UserLayout.module.css';
import classNames from 'classnames/bind';
import Footer from 'components/LayoutComponent/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { turnForm } from '../../redux/slices/authSlice';
import { turnCart } from '../../redux/slices/cartSlice';
import { selectIsShowForm } from '../../redux/selectors/authSelectors';
import { selectIsShowCart } from '../../redux/selectors/cartSelectors';
import AuthForm from 'components/AuthForm/AuthForm';
import CartBar from 'components/CartBar';
const cx = classNames.bind(style);

export default function UserLayout({ children }) {
    const dispatch = useDispatch();
    const isFormVisible = useSelector(selectIsShowForm);
    const isCartVisible = useSelector(selectIsShowCart);
    const handleCloseForm = () => {
        dispatch(turnForm(false));
    };
    const handleCloseCart = () => {
        dispatch(turnCart(false));
    }
    return (
        <div className={cx('container')}>
            <Header isLogin={false} />
            <main>
                <CartBar isShow={isCartVisible} onClose={handleCloseCart} />
                <AuthForm isShow={isFormVisible} onClose={handleCloseForm} />
                <div id="space" className={cx('space')}>
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
}
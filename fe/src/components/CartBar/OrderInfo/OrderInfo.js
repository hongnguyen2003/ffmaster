import style from './Pay.module.css';
import classNames from 'classnames/bind';
import { faRightToBracket, faXmark, faMoneyBillWave, faEyeSlash, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/mini.components/Button';
import InputBar from 'components/mini.components/InputBar';
import LogoWeb from 'components/mini.components/LogoWeb';
import { useEffect, useState } from 'react';
import SellectBar from 'components/mini.components/SellectBar';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../../redux/selectors/cartSelectors';
import CartItem from './OrderItem.js/index.js';
import formatCurrency from 'utils/formatCurrency';
import { selectIsAuthenticated } from '../../../redux/selectors/authSelectors';
import { changeFormType, turnForm } from '../../../redux/slices/authSlice';
const cx = classNames.bind(style);

export default function Pay({ onClose, setCartType, className, ...props }) {
    const cartItems = useSelector(selectCartItems);
    const [price, setPrice] = useState(cartItems.reduce((acc, item) => acc + item.gia * item.soluong, 0));
    useEffect(() => {
        setPrice(cartItems.reduce((acc, item) => acc + item.gia * item.soluong, 0));
    }, [cartItems]);
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const dispas = useDispatch();
    const handlePay = () => {
        if (price == 0) return alert('Không có sản phẩm trong giỏ, hãy lướt qua và mua hàng');
        if (!isAuthenticated) {
            dispas(turnForm());
            dispas(changeFormType('LOGIN'));
        }
        setCartType('PAY');
    };
    return (
        <div className={cx('container')}>
            <h1>ĐƠN HÀNG</h1>
            <div className={cx('listItem')}  >
                {cartItems.map(item => (
                    <CartItem item={item} />
                ))}
            </div>
            <div className={cx('footer')}>
                <div className={cx('price')}>Tổng cộng: <span>{formatCurrency(price)}</span><span className={cx('currency')}>₫</span></div>

                <Button className={cx('thanhtoan')}
                    right icon={faMoneyBillWave}
                    onClick={handlePay}>Thanh toán</Button>
            </div>

        </div>
    );
};


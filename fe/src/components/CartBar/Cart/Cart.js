import style from './Cart.module.css';
import classNames from 'classnames/bind';
import { faRightToBracket, faXmark, faMoneyBillWave, faEyeSlash, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/mini.components/Button';
import InputBar from 'components/mini.components/InputBar';
import LogoWeb from 'components/mini.components/LogoWeb';
import { useEffect, useState } from 'react';
import SellectBar from 'components/mini.components/SellectBar';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../../redux/selectors/cartSelectors';
import CartItem from './CartItem';
import formatCurrency from 'utils/formatCurrency';
import { selectIsAuthenticated } from '../../../redux/selectors/authSelectors';
import { changeFormType, turnForm } from '../../../redux/slices/authSlice';
import { emptyCart } from '../../../redux/slices/cartSlice';
const cx = classNames.bind(style);

export default function Cart({ onClose, setCartType, className, ...props }) {
    const cartItems = useSelector(selectCartItems);
    const [price, setPrice] = useState(cartItems.reduce((acc, item) => acc + item.gia * item.soluong, 0));
    useEffect(() => {
        setPrice(cartItems.reduce((acc, item) => acc + item.gia * item.soluong, 0));
    }, [cartItems]);
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const dispas = useDispatch();
    const handleNewOrder = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/order',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', },
                    credentials: 'include',
                    body: JSON.stringify({ cartItems }),
                });
            if (!response.ok) {
                alert('Đã có lỗi xảy ra, vui lòng thử lại sau');
                return false;
            }
            // alert('Đặt hàng thành công');
            return true;
        } catch (error) {
            return false;

            console.error('Error:', error);
        }
    };
    const handlePay = async () => {
        if (price == 0) return alert('Không có sản phẩm trong giỏ, hãy lướt qua và mua hàng');
        if (!isAuthenticated) {
            dispas(turnForm());
            dispas(changeFormType('LOGIN'));
        } else {
            const data = await handleNewOrder();
            if (data) {
                dispas(emptyCart());
                setCartType('INFO');
            }
        }
    };
    return (
        <div className={cx('container')}>
            <div className={cx('header')}>
                <Button className={cx('toOrder')}
                    right icon={faMoneyBillWave}
                    onClick={() => {
                        if (isAuthenticated)
                            setCartType("PAY");
                        else {
                            dispas(changeFormType('LOGIN'));
                            dispas(turnForm());
                        }
                    }}></Button>
                <h1>Giỏ hàng</h1>
            </div>
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

        </div >
    );
};


import style from './CartBtn.module.css';
import classNames from 'classnames/bind';
import Button from 'components/mini.components/Button';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { turnCart } from '../../../../redux/slices/cartSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { selectCartItems } from '../../../../redux/selectors/cartSelectors';
const cx = classNames.bind(style);
export default function CartBtn() {
    const dispatch = useDispatch();
    const cartItem = useSelector(selectCartItems);
    const handleTurnCart = () => {
        dispatch(turnCart());
    };

    const coverNumber = (number) => {
        if (number > 99) return '99+';
        if (number <= 0) return "";
        return number;
    };
    return <div className={cx('container')}>
        <div className={cx('nummber')}>
            {coverNumber(cartItem.length)}
        </div>
        <Button className={cx('cartBtn')} left={true} variab='text' icon={faCartShopping} onClick={handleTurnCart}>Giỏ hàng</Button>
    </div>
}
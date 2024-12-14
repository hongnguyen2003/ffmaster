import style from './OrderItem.module.css';
import classNames from 'classnames/bind';
import { faRightToBracket, faXmark, faEye, faEyeSlash, faUserPlus, faCheck } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/mini.components/Button';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../../../redux/slices/cartSlice';
import formatCurrency from 'utils/formatCurrency';
import { changeFormType } from '../../../../redux/slices/authSlice';
import { turnForm } from '../../../../redux/slices/authSlice';
const cx = classNames.bind(style);

export default function OrderItem({ item, setCartType, className, onDelete, ...props }) {
    const dispatch = useDispatch();
    const fetchDeleteOrder = async () => {
        const response = await fetch('http://localhost:8080/api/order',
            {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ id: item.iddonhang })
            });
        if (!response.ok) return alert('Lỗi khi hủy đơn hàng, vui lòng reload lại trang và thử lại');
        onDelete();
        return alert('Hủy đơn hàng thành công');
    }
    const handleRemove = async () => {
        await fetchDeleteOrder();
        dispatch(removeItem(item.iddonhang));
    }
    const handleUpdate = async () => {
        const response = await fetch('http://localhost:8080/api/order/ok',
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ id: item.iddonhang })
            });
        if (!response.ok) return alert('Lỗi khi hoàn thành đơn hàng, vui lòng reload lại trang và thử lại');
        onDelete();

         alert('Đơn hàng đã thành công');
        dispatch(changeFormType("RATTING"));
        return dispatch(turnForm());

    }

    const handleClick = (e) => {
        if (!e.target.closest('button') && item.trangthai === 'wait') {
            dispatch(changeFormType("QR"));
            dispatch(turnForm());
        }
    }
    const totalPrice = item.idmonhang.reduce((total, monhang) => total + Math.round(monhang.gia), 0);
    return (
        <div className={cx('container')} onClick={handleClick}>
            <div className={cx('info')}>
                <div className={cx('name')}>{item.iddonhang}</div>
                <div className={cx('price')}>Giá: <span>{formatCurrency(totalPrice)}</span><span className={cx('currency')}>₫</span></div>
                <div className={cx('price')}>Trạng thái: <span>{item.trangthai}</span></div>
            </div>
            {(item.trangthai !== 'done' && item.trangthai !== 'cancel') && <Button right icon={faXmark} onClick={handleRemove} />}
            {item.trangthai === 'paid' && <Button right icon={faCheck} onClick={handleUpdate} />}
        </div>
    );
};


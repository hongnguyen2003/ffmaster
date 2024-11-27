import style from './Pay.module.css';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import OrderItem from './OrderItem';
import { faCartPlus, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/mini.components/Button';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsAuthenticated } from '../../../redux/selectors/authSelectors';
import { changeFormType, turnForm } from '../../../redux/slices/authSlice';
const cx = classNames.bind(style);

export default function Pay({ onClose, setCartType, className, ...props }) {
    const [data, setData] = useState({});
    const [refresh, setRefresh] = useState(false);
    const fetchOrder = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/listOrder', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });
            if (!response.ok) {
                alert('Lỗi khi lấy dữ liệu đơn hàng, vui lòng reload lại trang và thử lại');
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const displa = useDispatch();
    useEffect(() => {
        if (!isAuthenticated) {
            displa(turnForm());
            displa(changeFormType('LOGIN'));
            setCartType('CART');
        }
    }, [isAuthenticated]);
    useEffect(() => {
        fetchOrder();
    }, [refresh]); // Add an empty dependency array to run the effect only once

    return (
        <div className={cx('container')}>
            <div className={cx('header')}>
                <Button className={cx('toOrder')}
                    right icon={faCartPlus}
                    onClick={() => setCartType("CART")}></Button>
                <h1>Đơn hàng</h1>
            </div>
            <div className={cx('listItem')}  >
                {Object.entries(data).map(([key, value]) =>
                    <OrderItem onDelete={() => { setRefresh(!refresh) }} key={key} item={value} /> // Correct rendering of OrderItem components
                )}
            </div>
        </div>
    );
};


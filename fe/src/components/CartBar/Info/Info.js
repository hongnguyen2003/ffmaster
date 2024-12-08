import style from './Info.module.css';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { faCartPlus, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/mini.components/Button';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsAuthenticated } from '../../../redux/selectors/authSelectors';
import { changeFormType, turnForm } from '../../../redux/slices/authSlice';
import InputBar from 'components/mini.components/InputBar';
import SelectBar from 'components/mini.components/SellectBar';
import ImageFallBack from 'components/mini.components/ImageFallBack';
const cx = classNames.bind(style);

export default function Info({ onClose, setCartType, className, ...props }) {
    const [refresh, setRefresh] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('');

    const isAuthenticated = useSelector(selectIsAuthenticated);
    const displa = useDispatch();
    useEffect(() => {
        if (!isAuthenticated) {
            displa(turnForm());
            displa(changeFormType('LOGIN'));
            setCartType('CART');
        }
    }, [isAuthenticated]);
    const handlePay = async (option) => {
        setCartType('PAY');

    };
    const handlePaySelect = (option) => {
        setPaymentMethod(option.value);
    }

    return (
        <div className={cx('container')}>
            <div className={cx('header')}>
                <Button className={cx('toOrder')}
                    right icon={faCartPlus}
                    onClick={() => setCartType("CART")}></Button>
                <h1>Thông tin thanh toán</h1>
            </div>
            <div className={cx('listItem')}>
            <div className={cx('inputGroup')}>
                    <InputBar label="Tên" placeholder="Nhập tên của bạn" />
                </div>
                <div className={cx('inputGroup')}>
                    <InputBar label="Địa chỉ" placeholder="Nhập địa chỉ của bạn" />
                </div>
                <div className={cx('inputGroup')}>
                    <InputBar label="Số điện thoại" placeholder="Nhập số điện thoại của bạn" />
                </div>
                <div className={cx('inputGroup')}>
                    <SelectBar placeholder="Phương thức thanh toán" onChange={handlePaySelect} options={[{ label: 'Ship COD', value: 'cod' }, { label: 'Quét QR', value: 'qr' }]} />
                </div>
                {paymentMethod === 'qr' && (
                    <div className={cx('qrCode')}>
                        <ImageFallBack className={cx('logo')} src={'/VCB-1025004367-print.png'} />
                    </div>
                )}
            </div>
            <div className={cx('footer')}>
                <Button className={cx('thanhtoan')}
                    right icon={faMoneyBillWave}
                    onClick={handlePay}>Thanh toán</Button>
            </div>

        </div>
    );
};


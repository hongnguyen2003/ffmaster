import { forwardRef } from 'react';
import style from './ItemGame.module.css';
import classNames from 'classnames/bind';
import Button from 'components/mini.components/Button';
import PropTypes from 'prop-types';
import { faCartPlus, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import ImageFallBack from 'components/mini.components/ImageFallBack';
import formatCurrency from 'utils/formatCurrency';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';
import { selectCartItems } from '../../redux/selectors/cartSelectors';
const cx = classNames.bind(style);

const ItemGame = forwardRef(({ className, data, ...props }, ref) => {
    const classes = cx('container', {
        [className]: className,
    });

    const navigator = useNavigate();
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const infoAccMap = {
        new: 'Mới',
        vip: 'Vip',
        hot: 'Hot',
        sale: 'Sale'
    };
    const itemExists = cartItems.some(item => item.id === data.id);
    const handleAddCart = () => {
        if (itemExists) {
            alert('Item already in cart');
        } else {
            dispatch(addItem(data));
        }
    };
    return (
        <div className={cx(classes)} onClick={(e) => { if (!e.target.closest('button')) navigator(`/info/${data.id}`) }}>
            {data.infoAcc && <div className={cx('tag', `tag_${data.infoAcc}`)}>{infoAccMap[data.infoAcc]}</div>}
            <ImageFallBack src={'http://localhost:8080' + data.hinhanh[0]} alt={data.ten} />
            <h1>{data.ten}</h1>
            <p>ID: #<span>{data.id}</span></p>
            <p>Nhãn hiệu: <span>{data.dangky}</span></p>
            <p>Màu: <span>{data.thevocuc ? "Đỏ" : "Hồng"}</span></p>
            <p>{data.mota}</p>
            <h3>Giá: <span>{formatCurrency(data.gia)}</span><span className={cx('currency')}>₫</span></h3>
            <Button className={cx(itemExists && 'addCart')} right={true} icon={itemExists ? faCartArrowDown : faCartPlus} onClick={handleAddCart}>{itemExists ? 'Thanh toán ngay' : 'Thêm vào giỏ hàng'}</Button>
        </div>
    )
})

ItemGame.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        image: PropTypes.string,
        infoAcc: PropTypes.oneOf(['new', 'vip', 'hot', 'sale']).isRequired,
    }).isRequired,
}

export default ItemGame;
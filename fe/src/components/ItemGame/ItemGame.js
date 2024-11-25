import { forwardRef } from 'react';
import style from './ItemGame.module.css';
import classNames from 'classnames/bind';
import Button from 'components/mini.components/Button';
import PropTypes from 'prop-types';
import { faCartPlus, faTag } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(style);

const ItemGame = forwardRef(({ className, data, ...props }, ref) => {
    const classes = cx('container', {
        [className]: className,
    });
    const formatCurrency = (amount) => {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    const infoAccMap = {
        new: 'Mới',
        vip: 'Vip',
        hot: 'Hot',
        sale: 'Sale'
    };

    return (
        <div className={cx(classes)}>
            {data.infoAcc && <div className={cx('tag', `tag_${data.infoAcc}`)}>{infoAccMap[data.infoAcc]}</div>}
            <img src={data.image} alt={data.title} />
            <h1>{data.title}</h1>
            <p>ID: <span>{data.id}</span></p>
            <p>Đăng ký: <span>{data.regby}</span></p>
            <p>Thẻ vô cực: <span>{data.infinitycard ? "có" : "không"}</span></p>
            <p>{data.description}</p>
            <h3>Giá: <span>{formatCurrency(data.price)}</span><span className={cx('currency')}>₫</span></h3>
            <Button right={true} icon={faCartPlus}>Thêm vào giỏ hàng</Button>
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
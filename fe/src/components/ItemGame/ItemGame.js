import { forwardRef } from 'react';
import style from './ItemGame.module.css';
import classNames from 'classnames/bind';
import Button from 'components/mini.components/Button';
import PropTypes from 'prop-types';
import { faCartPlus, faTag } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import ImageFallBack from 'components/mini.components/ImageFallBack';
import formatCurrency from 'utils/formatCurrency';
const cx = classNames.bind(style);

const ItemGame = forwardRef(({ className, data, ...props }, ref) => {
    const classes = cx('container', {
        [className]: className,
    });

    const navigator = useNavigate();

    const infoAccMap = {
        new: 'Mới',
        vip: 'Vip',
        hot: 'Hot',
        sale: 'Sale'
    };

    return (
        <div className={cx(classes)} onClick={() => { navigator(`/info/${data.id}`) }}>
            {data.infoAcc && <div className={cx('tag', `tag_${data.infoAcc}`)}>{infoAccMap[data.infoAcc]}</div>}
            <ImageFallBack src={JSON.parse(data.hinhanh)[0]} alt={data.ten} />
            <h1>{data.ten}</h1>
            <p>ID: #<span>{data.id}</span></p>
            <p>Đăng ký: <span>{data.dangky}</span></p>
            <p>Thẻ vô cực: <span>{data.thevocuc ? "có" : "không"}</span></p>
            <p>{data.mota}</p>
            <h3>Giá: <span>{formatCurrency(data.gia)}</span><span className={cx('currency')}>₫</span></h3>
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
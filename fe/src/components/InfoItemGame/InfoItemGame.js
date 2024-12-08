import style from './InfoItemGame.module.css';
import classNames from 'classnames/bind';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from 'prop-types';
import ImageFallBack from 'components/mini.components/ImageFallBack';
import Button from 'components/mini.components/Button';
import { faCartPlus, faMoneyBillWave, faCartArrowDown, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { addItem } from '../../redux/slices/cartSlice';
import { selectCartItems } from '../../redux/selectors/cartSelectors';
import { useDispatch, useSelector } from 'react-redux';
import formatCurrency from 'utils/formatCurrency';
import InputBar from 'components/mini.components/InputBar';
import SellectBar from 'components/mini.components/SellectBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(style);

export default function InfoItemGame({ className, dataInfo, ...props }) {
    const classes = cx('container', {
        [className]: className,
    });
    const settings = {
        dots: true,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        keyBoardControl: true,
        appendDots: dots => (
            <div
                className={cx('dotsContainer')}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        customPaging: function (i) {
            return <div className={cx('dot')}>
                <ImageFallBack src={'http://localhost:8080' + dataInfo.hinhanh[i]} />
            </div>;
        },
        dotsClass: cx('slick-custom'),
        afterChange: (current) => {
            const activeElement = document.querySelector(`.${cx('slick-custom')} .slick-active`);
            if (activeElement) {
                activeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }
    };
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const itemExists = cartItems.some(item => item.id === dataInfo?.id);

    const handleAddCart = () => {
        if (itemExists) {
            alert('Item already in cart');
            return;
        }
        dispatch(addItem(dataInfo));
    };
    if (!dataInfo) return null;
    return (
        <div className={cx('infoAccount')}>
            <div className={cx('left')}>
                <Slider className={cx('sliderContaier')} {...settings}>
                    {dataInfo.hinhanh.map((item, index) => (
                        <div key={index} className={classes}>
                            <ImageFallBack src={'http://localhost:8080' + item} alt={dataInfo.ten} />
                        </div>
                    ))}
                </Slider>
            </div>
            <div className={cx('right')}>
                <div className={cx('infomation')}>
                    <h1>{dataInfo.ten}</h1>
                    <h2>Thông tin chi tiết</h2>
                    <p>ID: #<span>{dataInfo.id}</span></p>
                    <p>Ngày đăng tải: <span>{new Date(dataInfo.createdAt).toLocaleString()}</span></p>
                    <p>Nhãn hiệu: <span>{dataInfo.dangky}</span></p>
                    <p>Số lượng: <span>{dataInfo.soluong}</span></p>
                    <p>Màu: <span>{dataInfo.thevocuc ? "Đỏ" : "Hồng"}</span></p>
                    <p>Mô tả: <span>{dataInfo.mota}</span></p>
                    <h3>Giá: <span>{formatCurrency(dataInfo.gia)}</span><span className={cx('currency')}>₫</span></h3>
                </div>
                <div className={cx('typeinput')}>
                    <SellectBar options={[{ label: "Đỏ", value: 'red' }]} onChange={() => { }} planeHoleder='Chọn một màu sắc' ></SellectBar>
                    <div className={cx('inputnumber')}>
                        <FontAwesomeIcon icon={faPlus} className={cx('input')} />
                        <InputBar className={cx('inputtextbox')} placeholder='1' type='number'></InputBar>
                        <FontAwesomeIcon icon={faMinus}  className={cx('input')} />
                    </div>
                </div>
                <div className={cx('row')}>
                    <Button className={cx('addtocart', itemExists && 'added')} onClick={handleAddCart} right={true} icon={itemExists ? faCartArrowDown : faCartPlus} ></Button>
                    <Button className={cx('pay')} right={true} icon={faMoneyBillWave}>Mua ngay</Button>
                </div>
            </div>
        </div>
    );
}


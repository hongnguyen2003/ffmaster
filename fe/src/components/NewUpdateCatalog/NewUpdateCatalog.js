import { forwardRef } from 'react';
import style from './NewUpdateCatalog.module.css';
import classNames from 'classnames/bind';
import SliderBar from 'components/SliderBar';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/mini.components/Button';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(style);

const NewUpdateCatalog = forwardRef(({ sampleData, className, tagCatalog, type, ...props }, ref) => {
    const classes = cx('container', type && 'sale', {
        [className]: className,
    });

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        draggable: true,
        keyBoardControl: true,
        swipeToSlide: true,
        pauseOnHover: true,
    };
    const navigator = useNavigate();

    return (
        <div className={cx(classes)}>
            <div className={cx('info')}>
                <h1>{type ? "Giá tốt" : "Vừa mới cập nhật"}</h1>
                <p>Danh sách tất cả các tài khoản {type ? "đang giảm giá" : "mới nhất được"} được cập nhật hàng giờ/ngày tại FireKing. Thông tin tài khoản đều được hệ thống tự động gửi trực tiếp tới email của khách hàng ngay lập tức khi thanh toán. Chúng tôi cam kết cung cấp các tài khoản chất lượng cao với giá cả hợp lý và dịch vụ hỗ trợ khách hàng tận tình.</p>
                <p>Hãy nhanh tay sở hữu những tài khoản giảm giá với mức giá ưu đãi nhất!</p>
                <Button className={!type && cx('viewAll')} right={true} icon={faChevronRight} onClick={() => {
                    navigator(`/more/${tagCatalog}`);
                }}>Khám phá thêm</Button>
            </div>
            <SliderBar className={cx('itemContainer')} settings={settings} sampleData={sampleData} />
        </div>
    )
})


export default NewUpdateCatalog;
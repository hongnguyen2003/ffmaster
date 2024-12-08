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
                <h1>{type ? "Son khuyến mãi" : "Son mới cập nhật"}</h1>
                <p>Danh sách tất cả các dòng son {type ? "đang giảm giá" : "mới nhất"} được cập nhật hàng ngày tại BeautyKing. Chất lượng son môi đảm bảo an toàn, màu sắc chuẩn và được giao tận tay khách hàng nhanh chóng ngay sau khi đặt hàng.</p>
                <p>Đừng bỏ lỡ cơ hội sở hữu những thỏi son tuyệt đẹp với mức giá ưu đãi nhất!</p>
                <Button className={!type && cx('viewAll')} right={true} icon={faChevronRight} onClick={() => {
                    navigator(`/more/${tagCatalog}`);
                }}>Khám phá thêm</Button>
            </div>
            <SliderBar className={cx('itemContainer')} settings={settings} sampleData={sampleData} />
        </div>

    )
})


export default NewUpdateCatalog;
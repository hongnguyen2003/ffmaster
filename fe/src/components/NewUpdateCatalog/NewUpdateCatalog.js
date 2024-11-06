import { forwardRef } from 'react';
import style from './NewUpdateCatalog.module.css';
import classNames from 'classnames/bind';
import SliderBar from 'components/SliderBar';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/Button';
const cx = classNames.bind(style);

const NewUpdateCatalog = forwardRef(({ className, ...props }, ref) => {
    const classes = cx('container', {
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

    const sampleData = [
        {
            title: 'Free Fire Account 1',
            description: 'High rank, many skins, and rare items.',
            price: 1500000,
            regby: 'Garena',
            id: 'acc001',
            image: `${process.env.PUBLIC_URL}/acc1.jpg`,
            infoAcc: 'vip',
        },
        {
            title: 'Free Fire Account 2',
            description: 'Mid rank, some rare skins, and items.',
            price: 1000000,
            regby: 'Facebook',
            id: 'acc002',
            image: `${process.env.PUBLIC_URL}/acc2.jpg`,
            infoAcc: 'new',
        },
        {
            title: 'Free Fire Account 3',
            description: 'Low rank, basic skins, and items.',
            price: 500000,
            regby: 'Garena',
            id: 'acc003',
            image: `${process.env.PUBLIC_URL}/acc3.jpg`,
            infoAcc: 'sale',
        },
        {
            title: 'Free Fire Account 4',
            description: 'High rank, many skins, and rare items.',
            price: 2000000,
            regby: 'Garena',
            id: 'acc004',
            image: `${process.env.PUBLIC_URL}/acc4.jpg`,
            infoAcc: 'vip',
        },
        {
            title: 'Free Fire Account 5',
            description: 'Mid rank, some rare skins, and items.',
            price: 1200000,
            regby: 'Facebook',
            id: 'acc005',
            image: `${process.env.PUBLIC_URL}/acc5.jpg`,
            infoAcc: 'new',
        },
    ];


    return (
        <div className={cx(classes)}>
            <div className={cx('info')}>
                <h1>MỚI CẬP NHẬT</h1>
                <p>Danh sách tất cả các tài khoản mới nhất được cập nhật hàng giờ/ngày tại Kingfire. Thông tin tài khoản đều được hệ thống tự động gửi trực tiếp tới email của khách hàng ngay lập tức khi thanh toán. Chúng tôi cam kết cung cấp các tài khoản chất lượng cao với giá cả hợp lý và dịch vụ hỗ trợ khách hàng tận tình.</p>
                <p>Hãy duyệt qua danh sách dưới đây để tìm kiếm tài khoản phù hợp với nhu cầu của bạn. Mỗi tài khoản đều được mô tả chi tiết về cấp độ, vật phẩm và giá cả. Nếu bạn có bất kỳ câu hỏi nào, đừng ngần ngại liên hệ với chúng tôi để được hỗ trợ.</p>
                <Button className={cx('viewAll')} right={true} icon={faChevronRight}>Khám phá thêm</Button>
            </div>
            <SliderBar className={cx('itemContainer')} settings={settings} sampleData={sampleData} />
        </div>
    )
})


export default NewUpdateCatalog;
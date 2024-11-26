import { forwardRef } from 'react';
import style from './CatalogItem.module.css';
import classNames from 'classnames/bind';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/mini.components/Button';
import SliderBar from 'components/SliderBar';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(style);

const CatalogItem = ({ className, nameCatalog, tagCatalog, sampleData, ...props }) => {
    const classes = cx('container', `tag_${tagCatalog}`, {
        [className]: className,
    });
    const navigator = useNavigate();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        draggable: true,
        keyBoardControl: true,
        swipeToSlide: true,
        pauseOnHover: true,
    };



    return (
        <div {...props} className={cx(classes)}>
            <div className={cx('header')}>
                <h1>{nameCatalog}</h1>
                <Button className={cx('btnMore')}
                    right={true} variab='text'
                    icon={faChevronRight}
                    onClick={() => {
                        navigator(`/more/${tagCatalog}`)
                    }}>Xem thêm</Button>
            </div>
            <SliderBar className={cx('itemContainer')} settings={settings} sampleData={sampleData} />
        </div>
    )
}


export default CatalogItem;
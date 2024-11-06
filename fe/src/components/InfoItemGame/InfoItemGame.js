import style from './InfoItemGame.module.css';
import classNames from 'classnames/bind';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from 'components/Button';
import PropTypes from 'prop-types';
import data from 'data/info';

const cx = classNames.bind(style);

export default function InfoItemGame({ className, ...props }) {
    const classes = cx('container', {
        [className]: className,
    });
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: true,
        keyBoardControl: true,
        swipeToSlide: true,
        pauseOnHover: true,
        customPaging: function (i) {
            return <button className={cx('dot')}></button>;
        },
        dotsClass: cx('slick-custom')
    };
    const handleButtonClick = (buttonText) => {
        console.log(`Button clicked: ${buttonText}`);
    };

    return (
        <Slider {...settings}>
            {data.img.map((item, index) => (
                <div key={index} className={classes}>
                    <img src={item} alt={data.title} />
                </div>
            ))}
        </Slider>
    );
}

InfoItemGame.prototype = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            img: PropTypes.string,
            title: PropTypes.string,
            description: PropTypes.string,
            button: PropTypes.string,
        })
    ),
    className: PropTypes.string,
}
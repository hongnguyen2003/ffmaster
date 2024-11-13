import style from './Banner.module.css';
import classNames from 'classnames/bind';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from 'components/Button';
import PropTypes from 'prop-types';

const cx = classNames.bind(style);

export default function Banner({ data, className, ...props }) {

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
            {data.map((item, index) => (
                <div key={index} className={classes}>
                    <img src={item.image} alt={item.title} />
                    <div>
                        <h1>{item.title}</h1>
                        <h3>{item.description}</h3>
                    </div>
                    <Button className='btnBaner' onClick={() => handleButtonClick(item.button)}>{item.button}</Button>
                </div>
            ))}
        </Slider>
    );
}

Banner.prototype = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            img: PropTypes.string,
            title: PropTypes.string,
            description: PropTypes.string,
            button: PropTypes.string,
        }).isRequired
    ),
    className: PropTypes.string,
}
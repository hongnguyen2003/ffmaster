import style from './InfoItemGame.module.css';
import classNames from 'classnames/bind';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
        fade: true,
        draggable: true,
        keyBoardControl: true,
        swipeToSlide: true,
        pauseOnHover: true,
        appendDots: dots => (
            <div
               className={cx('dotsContainer')}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        customPaging: function (i) {
            return <div className={cx('dot')}>
                <img src={`${process.env.PUBLIC_URL}/acc${i + 1}.jpg`} />
            </div>;
        },
        dotsClass: cx('slick-custom')
    };
    const handleButtonClick = (buttonText) => {
        console.log(`Button clicked: ${buttonText}`);
    };

    return (
        <div className={cx('infoAccount')}>
            <div className={cx('left')}>
                <Slider className={cx('sliderContaier')} {...settings}>
                    {data.img.map((item, index) => (
                        <div key={index} className={classes}>
                            <img src={item} alt={data.title} />
                        </div>
                    ))}
                </Slider>
                <div className={cx('info')}>
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                </div>
            </div>
            <div className={cx('right')}>

            </div>
        </div>
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
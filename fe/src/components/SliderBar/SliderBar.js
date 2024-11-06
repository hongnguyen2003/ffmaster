import { forwardRef } from 'react';
import style from './SliderBar.module.css';
import classNames from 'classnames/bind';
import ItemGame from 'components/ItemGame';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SampleNextArrow, SamplePrevArrow } from 'components/SliderBar/Arrow';
const cx = classNames.bind(style);

const SliderBar = forwardRef(({ className, settings, sampleData, ...props }, ref) => {
    const classes = cx('itemContainer', {
        [className]: className,
    });
    const allSettings = {
        ...settings,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };



    return (
        <div className={classes}>
            <Slider ref={ref} {...allSettings}  {...props}>
                {sampleData.map((dataItem) => (
                    <ItemGame key={dataItem.id} data={dataItem} />
                ))}
            </Slider>
        </div>
    )
})


export default SliderBar;
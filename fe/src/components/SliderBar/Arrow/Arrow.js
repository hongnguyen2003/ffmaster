import style from './Arrow.module.css';
import classNames from 'classnames/bind';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(style);

export function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={cx('nextArrow')}
            onClick={onClick}
        >
            <FontAwesomeIcon icon={faChevronRight} />
        </div>
    );
}

export function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={cx('prevArrow')}
            onClick={onClick}
        >
            <FontAwesomeIcon icon={faChevronLeft} />

        </div>
    );
}


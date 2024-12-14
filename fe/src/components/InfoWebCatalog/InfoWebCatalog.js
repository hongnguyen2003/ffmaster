import { forwardRef, useEffect, useState } from 'react';
import style from './InfoWebCatalog.module.css';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCheckCircle, faClock, faBolt } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(style);

const InfoWebCatalog = forwardRef(({ className, ...props }, ref) => {
    const [rating, setRating] = useState(0);

    useEffect(() => {
        const fetchRating = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/getRating', {
                    credentials: 'include',
                    method: 'GET', mode: 'cors'
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setRating(Math.round(data.averageRating * 100) / 100);
            } catch (error) {
                console.error('Error fetching rating:', error);
            }
        };

        fetchRating();
    }, []);

    const classes = cx('container', {
        [className]: className,
    });

    return (
        <div className={cx(classes)}>
                <div className={cx('banner-content')}>
                    <div className={cx('features')}>
                        <div className={cx('feature-item')}>
                            {rating} <FontAwesomeIcon icon={faStar} className={cx('icon')} />
                            <span>Rating from customer</span>
                        </div>
                        <div className={cx('feature-item')}>
                            <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')} />
                            <span>Easy to use</span>
                        </div>
                        <div className={cx('feature-item')}>
                            <FontAwesomeIcon icon={faClock} className={cx('icon')} />
                            <span>Quick ordering</span>
                        </div>

                    </div>
                </div>
        </div>
    )

});
export default InfoWebCatalog;
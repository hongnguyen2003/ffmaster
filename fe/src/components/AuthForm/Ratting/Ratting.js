import style from './Ratting.module.css';
import classNames from 'classnames/bind';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/mini.components/Button';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useState } from 'react';
const cx = classNames.bind(style);

export default function Ratting({ onClose, setFormType, className, ...props }) {
    const [rating, setRating] = useState(0) // Initial value
    const handleSend = async () => {
        const a = await fetch('http://localhost:8080/api/createRating', {
            method: 'POST',
            body: JSON.stringify({
                danhgia: rating,
            }),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        alert('Cảm ơn bạn đã đánh giá');
        onClose();
    }
    return (
        <div className={cx('container')} onSubmit={(e) => e.preventDefault()}>
            <h1>Vui lòng cho chúng tôi biết đánh giá của bạn về dịch vụ</h1>
            <div className={cx('info')}>
                <Rating style={{ maxWidth: 250 }} value={rating} onChange={setRating} />
                <div className={cx('btnGr')}>
                    <Button left className={cx('close')} icon={faXmark} onClick={onClose}></Button>
                    <Button className={cx('submit')} onClick={handleSend}>Gửi đánh giá</Button>
                </div>
            </div>
        </div>
    );
};


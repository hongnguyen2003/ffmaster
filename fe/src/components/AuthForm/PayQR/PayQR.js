import style from './PayQR.module.css';
import classNames from 'classnames/bind';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/mini.components/Button';

import ImageFallBack from 'components/mini.components/ImageFallBack';
const cx = classNames.bind(style);

export default function PayQR({ onClose, setFormType, className, ...props }) {
    
    return (
        <div onSubmit={(e) => e.preventDefault()}>
            <ImageFallBack className={cx('logo')} src={'/VCB-1025004367-print.png'} />
            <Button left className={cx('close')} icon={faXmark} onClick={onClose}></Button>

        </div>
    );
};


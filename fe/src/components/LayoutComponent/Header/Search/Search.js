/**
 * Search component
 *
 * @param {Object} props - Component properties
 * @param {boolean} props.isLogin - Indicates if the user is logged in
 * @returns {JSX.Element} The rendered Search component
 */

import { faSearch } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';
import style from './Search.module.css';
import Button from 'components/mini.components/Button';
import classNames from 'classnames/bind';
import InputBar from 'components/mini.components/InputBar';
import { useEffect, useRef } from 'react';
const cx = classNames.bind(style);

export default function Search() {

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                refSearchInput.current.blur();
            }
            // if (/^[a-zA-Z]$/.test(e.key)) {
            //     if (document.activeElement !== refSearchInput.current) {
            //         refSearchInput.current.focus();

            //     }
            // }
        };
        document.addEventListener('keydown', handleKeyDown);


    }, []);

    const refSearchBtn = useRef(null);
    const refSearchInput = useRef(null);
    return (
        <div className={cx('searchbox')}>
            <InputBar className={cx('searchInput')} placeholder="Tìm kiếm"
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        if (refSearchBtn.current) {
                            refSearchBtn.current.focus();
                            refSearchBtn.current.click();
                        }
                    }
                }} ref={refSearchInput} />
            <Button left variab='fill' type="submit" icon={faSearch} ref={refSearchBtn}></Button>
        </div>
    )
}

Search.propTypes = {
    isLogin: PropTypes.bool
}
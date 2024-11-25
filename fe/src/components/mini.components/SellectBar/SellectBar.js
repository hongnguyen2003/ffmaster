import { useState, useRef } from 'react';
import style from './SellectBar.module.css';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(style);

const SellectBar = ({ className, options, defaultValue, varf = 'select', planeHoleder = "", onChange, value, ...props }) => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(defaultValue || value);
    const dropdownRef = useRef(null);

    const handleToggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    const handleSelectOption = async (option) => {
        setSelectedOption(option);
        onChange(option);
        dropdownRef.current.blur();
        setIsOpen(false);
        if (varf == 'dropdown') {
            if (option.link) {
                await fetch(option.link, {
                    method: "GET",
                    credentials: "include",
                });
                navigate("/login");;
            }
            else
                navigate(option.value);
        }

    };

    const classes = cx('container', {
        [className]: className,
    });

    return (
        <div
            className={classes}
            {...props}
            ref={dropdownRef}
            tabIndex={0}
            onClick={handleToggleDropdown}
            onBlur={() => setIsOpen(false)}

        >
            <div className={cx('dropdown-toggle')}>
                {(varf == 'select' && selectedOption) ? selectedOption.label : planeHoleder} <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
            </div>
            {isOpen && (
                <div className={cx('dropdown-menu')}>
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className={cx('dropdown-item', option.value === value?.value && 'selected')}
                            onClick={() => handleSelectOption(option)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

SellectBar.propTypes = {
    className: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
    defaultValue: PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
    }),
    varf: PropTypes.oneOf(['select', 'dropdown']),
    planeHoleder: PropTypes.string,
};

export default SellectBar;
import style from './Button.module.css';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
const cx = classNames.bind(style);
const Button = forwardRef(({ children, icon = null, left, right, variab = 'fill', className, ...props }, ref) => {


    const classes = cx('container', variab, {
        [className]: className,
    });

    return (
        <button ref={ref} className={classes} {...props}>
            {left && icon && <FontAwesomeIcon icon={icon} />}
            {children}
            {right && icon && <FontAwesomeIcon icon={icon} />}
        </button>
    );
});

Button.propTypes = {
    children: PropTypes.node,
    icon: PropTypes.object,
    left: PropTypes.bool,
    right: PropTypes.bool,
    variab: PropTypes.oneOf(['text', 'fill']),
    className: PropTypes.string,
}


export default Button;
import { forwardRef } from 'react';
import style from './ListItem.module.css';
import classNames from 'classnames/bind';
import ItemGame from 'components/ItemGame';
const cx = classNames.bind(style);

const ListItem = forwardRef(({ className, sampleData, ...props }, ref) => {
    const classes = cx('itemContainer', {
        [className]: className,
    });


    return (
        <div className={classes} ref={ref} {...props}>
            <div className={cx('container')}>
                {sampleData.map((dataItem) => (
                    <ItemGame key={dataItem.id} data={dataItem} />
                ))}
            </div>
        </div>
    )
})


export default ListItem;
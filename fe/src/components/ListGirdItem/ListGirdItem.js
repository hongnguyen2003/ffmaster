import style from './ListGirdItem.module.css';
import classNames from 'classnames/bind';
import ListItem from './ListItem';
const cx = classNames.bind(style);

const ListGirdItem = ({ className, nameCatalog, tagCatalog, sampleData, ...props }) => {
    const classes = cx('container', {
        [className]: className,
    });


    return (
        <div {...props} className={cx(classes)}>
            <div className={cx('header')}>
                <h1>{nameCatalog}</h1>
            </div>
            <ListItem className={cx('itemContainer')} sampleData={sampleData} />
        </div>
    )
}


export default ListGirdItem;
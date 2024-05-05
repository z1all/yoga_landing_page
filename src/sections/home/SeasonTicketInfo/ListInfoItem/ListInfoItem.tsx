import React, {FC} from 'react';
import classes from './ListInfoItem.module.scss';
import P2 from "../../../../components/ui/P2/P2";

interface IListInfoItem {
    info: {
        number: number;
        text: string;
    }
}

const ListInfoItem : FC<IListInfoItem> = ({info}) => {
    return (
        <div className={classes.listInfoItemContainer}>
            <div className={classes.number}>
                {info.number}
            </div>
            <P2>{info.text}</P2>
        </div>
    );
};

export default ListInfoItem;
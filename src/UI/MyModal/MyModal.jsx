import React from 'react';
import s from './MyModal.module.css'

const MyModal = ({children, value, setValue}) => {

    let myModalStyle = [s.myModal]
    if (value) {
        myModalStyle.push(s.active)
    }
    return (
        <div className={myModalStyle.join(' ')} onClick={() => setValue(false)}>
            <div className={s.modalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;
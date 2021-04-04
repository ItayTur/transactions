import { memo } from 'react';

import Backdrop from '../Backdrop/Backdrop';

import classes from './Modal.module.css';

const Modal = ({ isOpen, children, onClose }) => {
    return (<>
        {isOpen && <Backdrop show={isOpen} onClick={onClose} />}
        <div
            className={classes.Modal}
            style={{
                transform: isOpen ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: isOpen ? '1' : '0'
            }}>
            {children}
        </div>
    </>);
}


export default memo(Modal, (prevProps, nextProps) => prevProps.isOpen === nextProps.isOpen);
import React from "react";
import { Modal } from 'antd';

const Popup = ({visible,onClose,handleOk,component,title,submit}) => {

    return(
        <>           
            <div>
                <Modal 
                    title={title} 
                    visible={visible} 
                    onOk={handleOk}
                    footer={null}
                    onCancel={(()=>onClose())}
                >
                    {component}
                </Modal>
            </div>
        </>
    )
}

export default Popup;
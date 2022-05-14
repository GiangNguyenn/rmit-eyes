import React, {useState} from 'react';
import {Modal} from 'antd'
export default function AvatarCell(props) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <img src={props.value} alt="" width={60} height={60} onClick={() => setIsOpen(true)} />
    <Modal title={'User Face Image'} visible={isOpen} onOk={()=> setIsOpen(false)} onCancel={() => setIsOpen(false)}>
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <img src={props.value} alt="user_face_image" width={500} style={{maxWidth: '80%'}} onClick={() => setIsOpen(true)} />
      </div>
    </Modal>
    </>
  )
}

export const avatarColumnProps = {
  maxWidth: 60,
  filterable: false,
  Cell: AvatarCell,
};

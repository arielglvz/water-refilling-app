import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import NoteCards from '../../components/Cards/NoteCards'
import { MdAdd } from 'react-icons/md'
import AddEditNotes from './AddEditNotes'
import Modal from 'react-modal'

const Home = () => {

  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: 'add',
    data: null,
  });

  return (
    <>
      <Navbar />

      <div className='container mx-auto  p-5'>
        <div className='grid grid-cols-3 gap-4 mt-8'>
          <NoteCards 
            title = 'Meeting on 7th April'
            date = '3rd April 2024'
            content = 'Meeting on 7th April Meeting on 7th April'
            tags = '#meeting'
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>

      <button 
        className='w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10' 
        onClick={() => {
          setOpenAddEditModal({ isShown: true, type: 'add', data: null })
        }}>
        <MdAdd className='text-[32px] text-white'/>
      </button>

      <Modal
        isOpen = {openAddEditModal.isShown}
        ariaHideApp={false}
        onRequestClose = {() => {}}
        style = {{
          overlay: {
            backgroundColor: 'rgba(0,0,0,0.2)',
          },
        }}
        contentLabel=''
        className='w-[90%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scrolly'
      >
        <AddEditNotes 
          type = {openAddEditModal.type}
          noteData={openAddEditModal.data}
          onClose={() => {
            setOpenAddEditModal({ isShown: false, type: 'add', data: null});
          }}
        />
      </Modal>

    </>
  )
}

export default Home
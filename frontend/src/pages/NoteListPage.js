import React, { useEffect, useState } from 'react'
import ListItem from './../components/ListItem';


const NoteListPage = () => {
    let [notes, setNotes]=useState([]);

    useEffect(() => {
      getNotes()
    }, [])

    let getNotes = async()=>{
        let response =await fetch('/api/notes/')
        let data =await response.json()
       
        setNotes(data)
    }
    return (
        <div className='notes'>
            <div className='notes-header'>
                <h2 className='notes-title'>☶ Notes</h2>
                <p className='notes-count'>{notes.length}</p>
            </div>
            <div className='notes-list'>
                {notes.map((note,index)=>(
                    <ListItem key={index} note={note}></ListItem>
                ))}
            </div>
        </div>
    )
}


export default NoteListPage
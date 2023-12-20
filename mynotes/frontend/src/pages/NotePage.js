import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";



export const NotePage = () => {
    const { id } = useParams();
    const [note, setNote] = useState(null);

    useEffect(() => {

        const getNote = async () => {
            try {
                if(id==='new')return
                let response = await fetch(`/api/notes/${id}`);
                let data = await response.json();
                setNote(data);
            } catch (error) {
                console.error("Error fetching note:", error);
            }
        };

        getNote();
    }, [id]);
    let createNote= async()=>{
        if(!note)return
        fetch(`/api/notes/`, {
            method: "POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(note)
        })
    }

    let updataNote= async()=>{

        console.log(note)
        if(id!=='new' && note.body===''){
            deleteNote()
            return
        }
        fetch(`/api/notes/${id}/`, {
            method: "PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(note)
        })
    }

    let deleteNote= async()=>{
        fetch(`/api/notes/${id}/`, {
            method: "DELETE",
            headers:{
                'Content-Type':'application/json'
            },
        })

    }

    return (
        <>
            <div className="note">
                <div className="note-header">
                    <h3>
                        {id!=='new'?
                        (<Link to="/">
                            <ArrowLeft onClick={updataNote}/>
                        </Link>):
                        (<Link to="/">
                        <ArrowLeft onClick={createNote}/>
                    </Link>)}
                    </h3>
                    {id !=='new'?(
                        <Link to ='/'>
                            <button onClick={deleteNote}>Delete</button>
                        </Link>
                    ):(
                        <Link to ='/'>
                            <button onClick={createNote}>Done</button>
                        </Link>
                    )}
                </div>
                <textarea onChange={(e)=>{setNote({...note,'body':e.target.value})}} value={note?.body}/>
                
                
            </div>
        </>
    );
};

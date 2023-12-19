import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";


export const NotePage = () => {
    const { id } = useParams();
    const [note, setNote] = useState(null);

    useEffect(() => {

        const getNote = async () => {
            try {
                let response = await fetch(`/api/notes/${id}`);
                let data = await response.json();
                setNote(data);
            } catch (error) {
                console.error("Error fetching note:", error);
            }
        };

        getNote();
    }, [id]);

    return (
        <>
            <div className="note">
                <div className="note-header">
                    <h3>
                        <Link to="/">
                        <ArrowLeft/>
                        </Link>
                    </h3>
                </div>
                <textarea defaultValue={note?.body}>
                    
                </textarea>
            </div>
        </>
    );
};
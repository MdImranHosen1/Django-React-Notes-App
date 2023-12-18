import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
            <div>{note?.body}</div>
        </>
    );
};

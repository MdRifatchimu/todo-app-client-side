import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const DashbaordAllNotes = () => {
    const { admin, user } = useAuth();
    const [note, setNote] = useState({});
    const [notes, setNotes] = useState([]);
    const [editNote, setEditNote] = useState('');

    useEffect(() => {
        fetch('https://fathomless-beach-05738.herokuapp.com/notes')
            .then(res => res.json())
            .then(data => setNotes(data))
    }, [])

    const myNotes = notes.filter(note => note.email === user.email);

    // const handleDeleteNotes = id => {
    //     const proceed = window.confirm('Are you sure, you want to delete?');
    //     if (proceed) {
    //         const url = `https://fathomless-beach-05738.herokuapp.com/notes/${id}`;
    //         fetch(url, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 if (data.deletedCount > 0) {
    //                     alert('Deleted Successfully');
    //                     const remainingNotes = notes.filter(note => note._id !== id);
    //                     setNotes(remainingNotes);
    //                 }
    //             })
    //     }
    // };

    const renderUser = (notes, index) => {
        return (
            <tr key="index">
                <td><h4>{notes.title}</h4></td>
                <td><h4>{notes.detail}</h4></td>
                <td>
                    <button className="btn btn-danger">DELETE</button>
                    <Link to={`/updatenote/${notes._id}`}>
                        <button className="btn btn-info">EDIT</button>
                    </Link>
                </td>
            </tr>
        )
    }

    return (
        <div>
            <h1>All Notes</h1>
            <table class="table table-striped mt-5">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Detail</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {admin.admin ? notes.map(renderUser) : myNotes.map(renderUser)}
                    </tbody>
                </table>
        </div>
    );
};

export default DashbaordAllNotes;
import Navigation from '../Navigation/Navigation';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const AddNotes = () => {
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

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const noteInfo = { ...note, email: user.email };
        noteInfo[field] = value;
        setNote(noteInfo);
    };

    const handleSaveChange = () => {
        console.log(editNote);
    }

    const handleAddNote = () => {
        // send to the server
        fetch('https://fathomless-beach-05738.herokuapp.com/notes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(note)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully Added!')
                }
            });
    }

    const handleDeleteNotes = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://fathomless-beach-05738.herokuapp.com/notes/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remainingNotes = notes.filter(note => note._id !== id);
                        setNotes(remainingNotes);
                    }
                })
        }
    };

    const handleEditNotes = id => {
        console.log(id)
    }

    const renderUser = (notes, index) => {
        return (
            <tr key="index">
                <td><h4>{notes.title}</h4></td>
                <td><h4>{notes.detail}</h4></td>
                <td>
                    <button className="btn btn-danger" onClick={() => handleDeleteNotes(notes._id)}>DELETE</button>
                    <Link to={`/updatenote/${notes._id}`}>
                        <button className="btn btn-info">EDIT</button>
                    </Link>
                </td>
            </tr>
        )
    }

    return (
        <div className="container w-50">
            <Navigation></Navigation>
            {
                admin.admin ? <h1 style={{ marginTop: "15%" }}>All Notes</h1> : <h1 style={{ marginTop: "15%" }}>Add Note</h1>
            }
            {
                admin.admin ? "" : <div>
                    <div class="form-floating mb-3">
                        <input type="email" onBlur={handleOnChange} name="title" class="form-control" id="floatingInput" placeholder="Note Title" />
                        <label for="floatingInput">Note Title</label>
                    </div>
                    <div class="form-floating">
                        <textarea name="detail" onBlur={handleOnChange} class="form-control" placeholder="Note Detail" id="floatingTextarea2" style={{ height: '200px' }}></textarea>
                        <label for="floatingTextarea2">Detail</label>
                    </div>
                    <button className="btn btn-info w-100 mt-3" onClick={handleAddNote}>Add Note</button>
                </div>
            }
            {
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
            }
        </div>
    );
};

export default AddNotes;
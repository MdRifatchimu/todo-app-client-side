import React, { useState } from 'react';
import { useParams } from 'react-router';
import Navigation from '../Navigation/Navigation';

const UpdateNote = () => {
    const [note, setNote] = useState({});
    const { todoId } = useParams();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const noteInfo = { ...note };
        noteInfo[field] = value;
        setNote(noteInfo);
    };

    const handleUpdateUser = () => {
        console.log(note)
        const url = `https://fathomless-beach-05738.herokuapp.com/notes/${todoId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(note)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update Successful');
                    setNote({});
                }
            })
    }
    return (
        <div style={{marginTop: '10%'}}>
            <Navigation></Navigation>
            <div className="container w-50">
                <h1 className="mt-5">Update Note</h1>
                <div class="form-floating mb-3">
                    <input type="email" onBlur={handleOnChange} name="title" class="form-control" id="floatingInput" placeholder="Note Title" />
                    <label for="floatingInput">Note Title</label>
                </div>
                <div class="form-floating">
                    <textarea name="detail" onBlur={handleOnChange} class="form-control" placeholder="Note Detail" id="floatingTextarea2" style={{ height: '200px' }}></textarea>
                    <label for="floatingTextarea2">Detail</label>
                </div>
                <button className="btn btn-info w-100 mt-3" onClick={handleUpdateUser}>Update Note</button>
            </div>
        </div>
    );
};

export default UpdateNote;
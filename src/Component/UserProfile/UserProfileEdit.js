import React from 'react';
import "./UserProfileEdit.css";

const UserProfileEdit = () => {
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-boxx">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-[20px] top-[20px]">✕</label>

                    <div className='userprifile-edit'>
                        <div>
                            <h3>Ueer Name:</h3>
                            <input type="text" />
                        </div>

                        <div>
                            <h3>Mail ID:</h3>
                            <input type="text" />
                        </div>

                        <div>
                            <h3>Pssword:</h3>
                            <input type="text" />
                        </div>

                        <div className='flex justify-end'>
                            <button>SAVE</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default UserProfileEdit;
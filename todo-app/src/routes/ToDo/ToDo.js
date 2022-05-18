import React from 'react';

const ToDo = () => {


    const handleToDo = (event) => {
        event.preventDefault();

        const title = event.target.todo_title.value;
        const desc = event.target.todo_desc.value;

        event.target.reset();
    };

    return (
        <div>
            <div className='lg:w-1/2 w-100 mx-auto bg-base-200 p-8 my-4 rounded'>
                <h1 className='text-center font-bold text-6xl mb-8'>My todo list</h1>
                <form onSubmit={handleToDo}>
                    <div className='grid grid-cols-1 gap-4'>
                        <input type="text" name="todo_title" className='input input-bordered' required placeholder='todo title' />
                        <textarea name="todo_desc" cols="30" rows="10" className='input input-bordered' required placeholder='todo description'></textarea>
                        <input className='btn btn-primary px-8' type="submit" value="Add" />
                    </div>
                </form>
            </div>
            <div className='container mx-auto'>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover">
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Purple</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ToDo;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../../shared/Loading';
import ToRow from './ToRow';

const ToDo = () => {
    const [lists, setLists] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const url = `https://arcane-castle-73517.herokuapp.com/list`;
        const getLists = async () => {
            const request = await fetch(url);
            const response = await request.json();
            setLists(response);
            setLoading(false);
            console.log(response);
        };
        getLists();
    }, [lists, loading]);

    const handleToDo = (event) => {
        event.preventDefault();

        const title = event.target.todo_title.value;
        const desc = event.target.todo_desc.value;
        const list = { title: title, desc: desc };

        axios.post('https://arcane-castle-73517.herokuapp.com/list', list)
            .then(res => console.log(res.data))


        event.target.reset();
    };

    return (
        <div>
            <div className='lg:w-1/2 w-100 mx-auto bg-base-200 p-8 my-4 rounded'>
                <h1 className='text-center font-bold text-6xl mb-8'>My todo list</h1>
                <form onSubmit={handleToDo}>
                    <div className='grid grid-cols-1 gap-4'>
                        <input type="text" name="todo_title" className='input input-bordered' required placeholder='todo title' />
                        <textarea name="todo_desc" cols="30" rows="10" className='input input-bordered' required placeholder='todo description: at least 150 letters/words'></textarea>
                        <input className='btn btn-primary px-8' type="submit" value="Add" />
                    </div>
                </form>
            </div>
            <div className='container mx-auto'>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Name</th>
                            </tr>
                        </thead>
                        {loading && <Loading/>}
                        <tbody>
                            {
                                lists.map(list => <ToRow
                                    key={list._id}
                                    list={list}
                                />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ToDo;
import React, { useEffect, useState } from "react";
import './index.scss';
import { useDispatch } from "react-redux";

import Books from "./components/Books/Books";
import Form from "./components/Form/Form";
import { getBooks } from './actions/books'

const App = () => {
    const [currentId, setCurrentId] = useState(null)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBooks())
    }, [currentId, dispatch])

    return(
        <main>
            <h1>Your BookShelf</h1>
            <div className="Books">
                <Books setCurrentId={setCurrentId}/>
            </div>
            <div className="Form">
                <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </div>
        </main>
    )
}
export default App
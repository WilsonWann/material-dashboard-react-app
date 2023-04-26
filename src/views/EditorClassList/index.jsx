import React, { useEffect, useRef, useState } from 'react'; // useState

// core components

// import { Outlet, useNavigate, Link } from 'react-router-dom';
import styles from './EditorClassList.module.css'

import EditorLeftWrapper from "./EditorLeftWrapper";
import EditorRightWrapper from "./EditorRightWrapper";

import { useDispatch, useSelector } from 'react-redux';
import * as GetClassAction from '../../actions/GetClassAction';
import { reDispatchMessage } from './../../reducers/errorMessage';



function EditorClassList() {
    const dispatch = useDispatch();
    const returnMessage = useSelector(state => state.getClassReducer.errorMessage);
    useEffect(() => {
        if (reDispatchMessage.includes(returnMessage)) {
            dispatch({ type: GetClassAction.REQUEST_CLASS_LIST })
        }
    }, [returnMessage]);

    useEffect(() => {
        dispatch({ type: GetClassAction.REQUEST_PARENT_CLASS })
        dispatch({ type: GetClassAction.REQUEST_CLASS_LIST })
    }, []);

    const [isModalOpen, setIsModalOpen] = useState(true);

    function openModal() {
        setIsModalOpen(true);
    }
    function closeModal() {
        setIsModalOpen(false);
    }

    return (
        <div className={styles['editor-container']}>
            <EditorLeftWrapper />
            <EditorRightWrapper />
        </div >

    );
}

export default EditorClassList;






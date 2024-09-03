"use client";

import React, {useEffect, useState} from 'react';
import cl from './TestPage.module.css'
import MyInput from "@/Components/UI/MyInput/MyInput";
import Output from "@/Components/UI/Output/Output";
import MyButton from "@/Components/UI/MyButton/MyButton";
const TestPage = () => {

    useEffect(() => {
        localStorage.getItem("content") !== null
        && setInputValue(localStorage.getItem("content"))
    }, []);


    const [inputValue, setInputValue] = useState('')


    function handleButton () {
        localStorage.setItem('content', inputValue);
    }

    return (
        <div className={cl.container}>
                <Output inputValue={inputValue}/>
                <MyInput
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={"Enter smth here"}/>
                <MyButton onClick={handleButton}>
                    SAVE TO LOCALSTORAGE
                </MyButton>
        </div>
    );
};

export default TestPage;
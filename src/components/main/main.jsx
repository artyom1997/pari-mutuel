import React from 'react'
import { useState } from 'react';
import './main.css'
import MainTab from '../main-tab/main-tab';
import Jackpot from '../jackpot/jackpot';
import Results from '../results/results';

function Main (){
    const [activeTab,setActiveTab] = useState('jackpot')

    const pageData = require("../../files/Json/games.json")
    
    return (
        <div className='main'>
            <MainTab activeTab={activeTab} setActiveTab={setActiveTab} />
            {
               activeTab === 'jackpot' ? <Jackpot data={pageData} /> : activeTab === 'results' ? <Results/> : null 
            }
        </div>
    )
}

export default React.memo(Main) 
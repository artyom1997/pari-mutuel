import './main.css'
import { useState } from 'react';
import MainTab from '../main-tab/main-tab';
import Jackpot from '../jackpot/jackpot';
import Results from '../results/results';

function Main (){
    const [activeTab,setActiveTab] = useState('jackpot')
    
    return (
        <div className='main'>
            <MainTab activeTab={activeTab} setActiveTab={setActiveTab} />
            {
               activeTab === 'jackpot' ? <Jackpot /> : activeTab === 'results' ? <Results/> : null 
            }
        </div>
    )
}

export default Main
import './popup.css';
import Step from './step/step';

function PopUp ({setPopup,info}){
   return (
       <div className='popup'>
           <div className='popup-body'>
                <div className='popup-inner'>
                    <div className='popup-title'>{info.title}</div>
                    <div className='popup-subtitle'>{info.subtitle}</div>
                    {
                        info.steps.map((el,i) => {
                            return <Step info={el} key={i} />
                        })
                    }
                    
                </div>

               <div className="popup-footer">
                   <button className='popup-btn' onClick={() => {
                       setPopup(false)
                   }}>Close</button>
               </div>
           </div>

       </div>
   )
}

export default PopUp
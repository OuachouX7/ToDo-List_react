import { useState } from "react"
import logo from './imgs/rocket.png'
import logo2 from './imgs/plus.png'
import logo3 from './imgs/Layer 1.png'
import './app.scss'
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';

gsap.registerPlugin(useGSAP);

function ToDo(){
    var [Tasks,setTasks] = useState([]);
    var [newTask,setnewTask] = useState('');
    var [Cnt,setCnt] = useState(0);

    const handleInput = (e) => {
        setnewTask(e.target.value);
    }

    const add = () => {
        
        if(newTask.trim() !== ''){
            
            setTasks(t => [...t,newTask]);
            setCnt(Cnt => Cnt + 1);

        }else{
            alert('you must write something !!!!!!!!!!!!')
        }
        
        
    }
    useGSAP(() => {
        

            gsap.fromTo(".task-container",{
                x : -1330,
                y:0,
                opacity : 0,
                duration : 1
            },{
                x : 0,
                y : 0,
                opacity : 1,
                duration : 1
            })
    
        
        }

)

    const remove = () => {
        let trash = document.getElementById('trash');
        trash.parentElement.remove();
        setCnt(Cnt => Cnt - 1);
    }

    const handleCheck = (e) => {
        let check = e.target;
        let next = check.nextElementSibling;
        next.classList.toggle('checked');
    }

    return(
        <div className="container">
            <div className="heading">
                <img src={logo} alt="" className="ficon"/>
                <h1>ToDo List</h1>
            </div>
            <div className="inpt-container">
                <input type="text" id="Task"  onChange={handleInput} placeholder="Add New Task..."/>
                <button id="Add" onClick={add}>
                    <p>Create</p>
                    <img src={logo2} alt="" />
                </button>
            </div>
            <div className="count-container">
                <div className="count">
                    <p> Tasks number :<span>
                                            {Cnt}
                                        </span>
                    </p>
                </div>

            </div>
            <div className="tasks-container">
                {Tasks.map(Task => <div className="task-container" id="animate"> 
                                       <input type="checkbox" id="check" onClick={handleCheck}/>
                                       <span className="span" key={Task}>{Task}</span>
                                       <button onClick={remove} id="trash">
                                        <img src={logo3} alt="" />
                                       </button>
                                    </div>
                            )
                }
            </div>
        </div>
    )
}

export default ToDo
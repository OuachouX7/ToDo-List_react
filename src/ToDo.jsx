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
    var [Cnt,setCnt] = useState(0);
    
    const add = () => {
        var Task = document.getElementById('Task');
        var newTask = Task.value;
        
        setTasks(t => [...t,newTask]);
        setCnt(Cnt => Cnt + 1);

    }
    useGSAP(() => {
        gsap.to("#animate",{
            x : 30
        })

    }

)

    const remove = () => {
        let trash = document.getElementById('trash');
        trash.parentElement.remove();
    }

    const handleCheck = () => {
        let check = document.getElementById('check');
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
                <input type="text" id="Task" placeholder="Add New Task..."/>
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
                                       <span className="span">{Task}</span>
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
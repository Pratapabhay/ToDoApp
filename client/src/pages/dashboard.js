// This component will show the tasks related to a particular project
import React, { useEffect } from 'react';
import NavBar from '../components/navBar';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions';
import { Button } from 'element-react';
import '../styles/todolist.css'
import {
    useParams
} from "react-router-dom";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from 'react';

function Dashboard(props) {

    let { projectId } = useParams();

    useEffect(() => {
        props.FETCH_TASKS(projectId);
    }, []) 

    console.log('asdf', props.tasks);
    const [ tasksLocalState, settasksLocalState ] = useState(props.tasks);
    const titleArray = ['To Do', 'In Progress', 'Completed'];
    console.log('Local State: ', tasksLocalState);

    const onDragStart = (ev, id) => {
        console.log('dragstart:',id);
        ev.dataTransfer.setData("id", id);
    }

    const onDragOver = (ev) => {
        ev.preventDefault();
    }

    const onDrop = (ev, cat) => {
        let id = ev.dataTransfer.getData("id");
        console.log('Div received !!', id);        
        // let tasks = this.state.tasks.filter((task) => {
        //     if (task.name == id) {
        //         task.category = cat;
        //     }
        //     return task;
        // });

        // this.setState({
        //     ...this.state,
        //     tasks
        // });
    }

    

    return (
        <div>
            <NavBar
                heading='DASHBOARD'
            />
            <div className='dashboard-main-container'>
                <div>
                    {/* <SideBar /> */}
                </div>
                <div className='lists-container'>
                    {
                        Object.keys(tasksLocalState).map((key, index) => (
                            <div className='list-container'>
                                <div className='list-container-header-placeholder'>
                                    <div className='list-container-content-item-heading'>
                                        { titleArray[index] }
                                    </div>
                                    <div>
                                        <Button
                                            size='small'
                                            className='list-container-header-new-task-button-placeholder'>
                                                <span className='list-container-header-new-task-button'>
                                                    New Task
                                                </span>
                                        </Button>
                                    </div>
                                </div>
                                <div className='list-container-header-line'></div>
                                {
                                    tasksLocalState[key].map((item, index) => (
                                        <div 
                                            key={index}
                                            className='list-container-content-item-placeholder'
                                            onDragOver={(e) => onDragOver(e)}
                                            onDrop={(e)=> { onDrop(e, 'Category Name')}}
                                            >
                                            <div className='list-container-content-item-heading'>
                                                {item.task.description}
                                            </div>
                                            <div className='list-container-content-item-footer'>
                                                <div className='list-container-content-item-name'>
                                                    {item.task.createdBy}
                                                </div>
                                                <div className='list-container-content-item-date-text'>
                                                    {item.task.dueDate.toLocaleString()}
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        tasks: state.todos,
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        FETCH_TASKS: (payload) => dispatch(actionCreators.fetchTasks(payload)),
    }
}

export default connect(mapStateToProps, mapActionsToProps)(Dashboard);
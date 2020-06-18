// This component will show the tasks related to a particular project
import React from 'react';
import NavBar from '../components/navBar';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions';
import { Button } from 'element-react';
import '../styles/todolist.css'

function Dashboard(props) {
    const titleArray = ['To Do', 'In Progress', 'Completed'];
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
                        Object.keys(props.tasks).map((key, index) => (
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
                                    props.tasks[key].map((task, index) => (
                                        <div 
                                            key={index}
                                            className='list-container-content-item-placeholder'
                                            >
                                            <div className='list-container-content-item-heading'>
                                                {task.description}
                                            </div>
                                            <div className='list-container-content-item-footer'>
                                                <div className='list-container-content-item-name'>
                                                    {task.createdBy}
                                                </div>
                                                <div className='list-container-content-item-date-text'>
                                                    {task.dueDate}
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
        FETCH_PROJECTS: (payload) => dispatch(actionCreators.fetchProjects(payload)),
    }
}

export default connect(mapStateToProps, mapActionsToProps)(Dashboard);
import React from 'react';
import '../../styles/projects.css'
import { Redirect } from 'react-router-dom';
import { withRouter } from "react-router-dom";

function ProjectCard(props) {

    const handleProjectNavigation = () => {
        const path = `dashboard/${props.projectId}`;
        props.history.push({
            pathname: path,
        });
    }

    return (
        <div 
                className='project-item-placeholder'
                onClick={handleProjectNavigation}
            >
            <div className='project-item-heading'>
                {props.description}
            </div>
            <div className='project-item-created-at'>
                CREATED AT: {props.createdAt}
            </div>
        </div>
    );

}

export default withRouter(ProjectCard);
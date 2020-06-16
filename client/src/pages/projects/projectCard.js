import React from 'react';
import '../../styles/projects.css'

function ProjectCard(props) {
    return (
        <div>
            <div class='project-item-placeholder'>
                <div class='project-item-heading'>
                    {props.description}
                </div>
                <div class='project-item-created-at'>
                    CREATED AT: {props.createdAt}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
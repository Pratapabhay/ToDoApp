// This page will show all the projects for the given user

import React, { Component } from 'react';
import * as actionCreators from '../../store/actions';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import NavBar from '../../components/navBar';
import ProjectCard from './projectCard';
import '../../styles/projects.css'
import NewProject from './newProject';

class Projects extends Component {

    componentDidMount() {
        this.props.FETCH_PROJECTS();
    }
    render() {
        return (
            <div>
                <NavBar heading="PROJECTS"/>
                <div className='projects-main'>
                    {this.props.projects.map((projectItem, index) => (
                        <ProjectCard
                            key={index}
                            description={projectItem.description}
                            createdAt={projectItem.createdAt}
                            >
                        </ProjectCard>
                    ))}
                    <NewProject />
                </div>
            </div>
        );
    }
}

Projects.propTypes = {

};

const mapStateToProps = (state) => {
    return {
        projects: state.projects,
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        FETCH_PROJECTS: (payload) => dispatch(actionCreators.fetchProjects(payload)),
    }
}

export default connect(mapStateToProps, mapActionsToProps)(Projects);
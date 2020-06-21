import React, { useState } from 'react';
import { Button, Form, Dialog, DatePicker, Input } from 'element-react';
import API from '../../services/index';
import * as actionCreators from '../../store/actions';
import { connect } from 'react-redux';


function NewProject(props) {
    const [isNewProjectDialogVisible, setisNewProjectDialogVisible] = useState(false);
    const [formData, setFormData] = useState({description: '', createdAt: new Date('YYYY-MM-DD')})

    const handleInputChange = (key, value) => {
        setFormData({formData, [key]: value})
    }
    
    const handleNewProject = () => {
        let body = {
            description: formData.description,
            createdAt: formData.createdAt
        } 
        API.PROJECTS.POST_PROJECT(body)
        .then(() => {
            props.FETCH_PROJECTS()
            handleCancelProject();
        })
        .catch((e) => {
            console.log('Error in Creating Project!!', e);
        })
    }

    const handleCancelProject = () => {
        setFormData({description: '', createdAt: new Date('YYYY-MM-DD')})
        setisNewProjectDialogVisible(false);
    }

    return (
        <div>
            <Button
                type="primary"
                size="small"
                onClick={() => setisNewProjectDialogVisible(true)}
            >
                New Project
            </Button>
            <Dialog
                title="Project Information"
                visible={ isNewProjectDialogVisible }
                onCancel={ () => setisNewProjectDialogVisible(false) }
            >
                <Dialog.Body>
                    <Form model={formData}
                    labelPosition='top'>
                        <Form.Item label="Project Description" labelWidth="120">
                            <Input
                                value={formData.description}
                                onChange={(val) => handleInputChange('description', val)}
                                >
                            </Input>
                        </Form.Item>
                        <Form.Item label="Created At" labelWidth="120">
                            <DatePicker
                                value={formData.createdAt}
                                placeholder="Pick a date"
                                onChange={(val) => handleInputChange('createdAt', val)}
                                disabledDate={time=>time.getTime() < Date.now() - 8.64e7}
                            />
                        </Form.Item>
                    </Form>
                </Dialog.Body>
                <Dialog.Footer className="dialog-footer">
                    <Button 
                        size='small'
                        onClick={ () => handleCancelProject() }> Cancel </Button>
                    <Button 
                        type="primary"
                        size='small'
                        onClick={ () => handleNewProject() }>
                            Submit
                    </Button>
                </Dialog.Footer>
            </Dialog>
        </div>
    );
}

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

export default connect(mapStateToProps, mapActionsToProps)(NewProject);
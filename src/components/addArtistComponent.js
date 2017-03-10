import React, {Component, PropTypes} from 'react';
import {render} from 'react-dom';

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import {Button, Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import values from '../values.js';

export default class AddArtist extends Component {

    constructor(props, context) {
        super(props, context);

        var data = this.props;
        console.log('data =' + data);
        this.state = {
          firstname: '',
          urlImage: '',
          urlVideo: '',
          id: '',
          description: ''
        }

        // console.log(this.state);
        // console.log(this.props);


        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeImage = this.handleChangeImage.bind(this);
        this.handleChangeVideo = this.handleChangeVideo.bind(this);
        this.handleChangeDescriprion = this.handleChangeDescriprion.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    getValidationState(value) {
        const length = value.length;
        if (length > 5)
            return 'success';
        else if (length > 0)
            return 'error';
        }

    handleChangeFirstName(e) {
        this.setState({firstname: e.target.value});
    }

    handleChangeDescriprion(e) {
      this.setState({description: e.target.value});
      console.log(e.target);
    }

    handleChangeImage(e) {
        this.setState({urlImage: e.target.value});
    }

    handleChangeVideo(e) {
        this.setState({urlVideo: e.target.value});
    }

    handleEdit() {
      var subm = this.state
      if (this.props.data) {
        subm.id = this.props.data.id;
      }
      this.props.onHandleEdit(subm);
    }

    closeModal() {
      this.props.onCloseModal();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <form className="margin_top">
                        <FormGroup controlId="formBasicText" validationState={this.getValidationState(this.state.firstname)}>
                            <ControlLabel>Enter atist firstname</ControlLabel>
                            <FormControl type='text' value={this.state.firstname} placeholder='Enter Name' onChange={this.handleChangeFirstName}/>
                            <FormControl.Feedback/>
                        </FormGroup>
                        <FormGroup controlId="formBasicText" validationState={this.getValidationState(this.state.urlVideo)}>
                            <ControlLabel>Enter url video</ControlLabel>
                            <FormControl type='text' value={this.state.urlVideo} placeholder='Enter Lastname' onChange={this.handleChangeVideo}/>
                            <FormControl.Feedback/>
                        </FormGroup>
                        <FormGroup controlId="formBasicText" validationState={this.getValidationState(this.state.urlImage)}>
                            <ControlLabel>Enter url poster</ControlLabel>
                            <FormControl type='text' value={this.state.urlImage} placeholder='Enter Lastname' onChange={this.handleChangeImage}/>
                            <FormControl.Feedback/>
                        </FormGroup>
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Description Artist</ControlLabel>
                            <FormControl componentClass="textarea" placeholder="description" onChange={this.handleChangeDescriprion}/>
                        </FormGroup>
                        <Button bsStyle="danger" onClick={() => this.closeModal()} className="col-md-2 col-md-offset-6">Cancel</Button>
                        <Button bsStyle="success" onClick={this.handleEdit} className="col-md-2 col-md-offset-1">Success</Button>
                    </form>
                </div>
            </div>
        );
    }
}

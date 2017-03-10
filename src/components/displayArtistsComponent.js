import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-awesome-modal';
import  Router,  { Link } from 'react-router';

import DescriptionArtist from './descriptionArtistComponent.js';
import AddArtist from './addArtistComponent.js';
// import RecordsPlayer from './recordsPlayerComponent.js';
import values from '../values.js';
import {Button} from 'react-bootstrap';
import "../main.css";

var idEdit;
// const edit;

export default class DisplayArtists extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
          visible: false,
          data: values.items,
          editArtist: ''
        }

        this.handleEditState = this.handleEditState.bind(this);
    }


    openModal(id) {
      for (var i = 0; i < this.state.data.length; i++) {
        if (this.state.data[i].id == id) {
          idEdit = i;
          break;
        }
      }
      idEdit = this.state.data[idEdit];
      this.setState({
        // editArtist: this.state.data[idEdit],
        visible: true,
      });
      console.log(idEdit);

    }

    editArtist(value) {
      this.setState({
        data: value
      })
    }

    deleteArtist(id) {
      var arr = this.state.data;
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].id == id) {
          arr.splice(i, 1);
          break;
        }
      }
      this.setState({
        data: arr
      })
      values.items = arr;
    }

    handleEditState(value) {
      // console.log(value);
      var arr = this.state.data;
      if (value.id == '') {
        value.id = arr.length;
        arr.splice(arr.length, 0, value);
      } else {
        for (var i = 0; i < arr.length; i++) {
          if (arr[i].id == value.id) {
            arr.splice(i, 1, value);
            break;
          }
        }
      }
      this.setState({
        data: arr,
        visible: false
      })
      values.items = arr;
      console.log(this.state);
    }

    closeModal() {
      this.setState({
        visible: false
      })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {
                      this.state.data.map(item =>//На этом участке в консоли ловлю переполнение стэка,
                        //если можно - обьясните как этого избежать или как это сделать правильно.
                        <div className="col-md-3">
                          <div className="tittle_button">
                            <button className="edit_button" onClick={() => this.openModal(item.id)}>Edit</button>
                            <button className="delete_button" onClick={() => this.deleteArtist(item.id)}data={item.id}>Delete</button>
                          </div>
                          <Link to={`/artist/${item.id}`}>
                              <img className="col-md-12 margin_bottom" src={item.urlImage}/>
                          </Link>
                      </div>
                      )
                    }
                    <div className="col-md-3">
                        <Button bsStyle='info' bsSize='large' block onClick={() => this.openModal()}>Add artist</Button>
                    </div>
                </div>
                <Modal
                  visible={this.state.visible}
                  width="650"
                  height="500"
                  effect="fadeInUp"
                  onClickAway ={() => this.closeModal()}
                  >
                  <center><h2>Enter artist property</h2></center>
                  <hr/>
                  <AddArtist data={idEdit} onHandleEdit={this.handleEditState} onCloseModal={() => this.closeModal()}/>
                </Modal>

            </div>
        );
    }
}

DisplayArtists.defaultProps = values;
// export default edit;

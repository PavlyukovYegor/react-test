import React, {Component, PropTypes} from 'react';
import {render} from 'react-dom';
import values from '../values.js';
import "../main.css";
import RecordsPlayer from './recordsPlayerComponent.js';

export default class DescriptionArtist extends Component {

    constructor(props, context) {
        super(props, context);

        var temp;
        for (var i = 0; i < values.items.length; i++) {
            if (values.items[i].id == this.props.params.id) {
                temp = values.items[i];
                break;
            }
        }
        // console.log(temp);

        this.state = {
            data: temp
        }

        // console.log(this.state);

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <img className="col-md-4" src={this.state.data.urlImage}/>
                        <div className="col-md-8">
                            <h3>
                                Artist Name: {this.state.data.name}
                            </h3>

                            <p className="text-justify">{'\u00A0'}{this.state.data.description}</p>
                        </div>
                    </div>
                </div>
                <center>
                    <h1>Performance record</h1>
                </center>
                <RecordsPlayer/>
            </div>
        )
    }
}
// DescriptionArtist.defaultProps = values.items;

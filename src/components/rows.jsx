import React, { Component } from 'react'
import { Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
export default class MovieRows extends Component {
  render(props) {
    return (


       <div  className="container">

            <div className="row"  >
                <div className="col-md-12 text-left" style={{background:'' }}>
<img width="120" src={this.props.movie.poster_src} alt="poster" style={{float:'left'}}/>
<strong className="" style={{marginLeft:'10px',}}>{this.props.movie.title}</strong>
<p>{this.props.movie.overview}</p>

                    </div>
                </div>
                <br/>
                </div>


    )
  }
}
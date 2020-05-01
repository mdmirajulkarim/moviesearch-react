import React, { Component } from 'react'
class MovieRows extends Component {
  render(props) {
      console.log('console more',this.props.movie.title)
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

export default MovieRows
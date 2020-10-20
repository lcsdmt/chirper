import React from 'react';

class ChirpCard extends React.Component {

  render() {
    return (
      <form className="d-flex justify-content-center">
        <div className="border border-danger rounded-pill shadow p-3 mb-5 bg-info">
          <div className="card-body">
            <h5>{this.props.userName}</h5>
            <p className="text-warning">{this.props.userMessage}</p>
          </div>
        </div>
      </form>
    )
  }
}

export default ChirpCard
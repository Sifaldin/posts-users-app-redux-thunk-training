import React, { Component } from 'react'
import { connect } from 'react-redux';

class UserHeader extends Component {


  renderUser() {
    return !this.props.user ? <div>Loading...</div> : <div className="header">{this.props.user.name}</div>
  }

  render() {
    return (
      <div>
        {this.renderUser()}
      </div>
    )
  }
}

const mapToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) }
}

export default connect(mapToProps)(UserHeader);
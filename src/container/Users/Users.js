import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import { fetchUser } from '../../actions/UserActions/userActions';
import userList from '../../components/Users/UsersList';


class Users extends Component {

    componentDidMount() {
        this.props.fetchUser()
    }

    render() {
        const is_loading = this.props.is_loading
        const user = this.props.users.map(user => (
            <div key={user.id}>
                <p>{user.name}</p>
            </div>
        ))

        return (
            <div>
                {this.props.users.map(user => (
                    <userList name={user.name}/>
                ))}
                <p>users</p>
                {is_loading ? <h1>loading</h1> :
                    this.props.users.map(user => (
                        <div key={user.id}>
                            <p>{user.name}</p>
                        </div>)
                    )
                }
            </div>
        )
    }
}

// Users.propTypes = {

// }

const mapStateToProps = state => ({
    users: state.users.users,
    is_loading: state.users.is_loading
})

export default connect(mapStateToProps, { fetchUser })(Users);
import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import HomePage from './homePage';
import { setUserProfile } from '../../redux/profileReducer';

class HomePageContainer extends Component {

    componentDidMount(){
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
            .then((res) => {
                this.props.setUserProfile(res.data)
            })
    }

    render(){
        return (
            <HomePage {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => {
    return{
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {setUserProfile})(HomePageContainer)



import React, { Component } from 'react';
import axios from 'axios';
import UserModule from '../../components/UserModule';

import {
  CompetitionPageContainer,
  UserModuleContainer
} from './styled';

import Header from '../../components/Header';
import CreatedBy from '../../components/CreatedBy';

var moment = require('moment');

class CompetitionPage extends Component {

  state = {
    userIds: [17,1],
    user1: null,
    user2: null,
    user1Score: 0,
    user2Score: 0,
    startDate: new Date(2018, 10, 27),
    endDate: new Date(2018, 11, 1),
    duration: 0,
    loading: true,
  }

  componentWillMount = async () =>{

    const duration =  new moment.duration(this.state.endDate - this.state.startDate).asDays();

    this.setState({
      duration
    });
  

    this.getUsersTasks(duration);
    this.getUsers();
  }

  getUsersTasks = (duration) => {
    
    [...this.state.userIds].forEach((id, userIndex) => {
      let tasks = 0;
      for(let index = 0; index < duration; index++){

        let currentDate = new Date();
        currentDate = moment(this.state.startDate, 'YYYY-MMMM-DD').add(index, 'days');

        const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
        const year = moment(currentDate).year();
        const day = moment(currentDate).date();
        const month = months[moment(currentDate, "MMM").month()];
        
        axios
          .get(`https://api.getmakerlog.com/users/${id}/stream/${year}/${month}/${day}/`)
          .then((response) => {
            const data = response.data.data;

            [...data].forEach((item) => {
              tasks++;
              if(userIndex === 0){
                this.setState({
                  user1Score: this.state.user1Score + (parseInt(item.praise) / 300) + tasks
                })
              } else {
                this.setState({
                  user2Score: this.state.user2Score + (parseInt(item.praise) / 300) + tasks 
                })
              }
            });

            
          }).catch(error => {})
      }
    });
  }

  getUsers(){
    [...this.state.userIds].forEach((id, userIndex) => {
      axios
        .get(`https://api.getmakerlog.com/users/${id}/`)
        .then((response) =>{
          const user = response.data;
          if(userIndex === 0){
            this.setState({
              user1: user
            })
          } else {
            this.setState({
              user2: user,
              loading: false
            })
          }
        })
    });
  }

  render() {
    const { user1Score, user2Score, user1, user2, loading } = this.state;
    return (
      <CompetitionPageContainer>
        <Header />
        {!loading &&
          <UserModuleContainer>
            <UserModule user={user1} score={user1Score.toFixed(2)} />
            <UserModule user={user2} score={user2Score.toFixed(2)} />
          </UserModuleContainer>
        }
        <CreatedBy />
      </CompetitionPageContainer>
    );
  }
}

export default CompetitionPage;

import React, { Component, Fragment } from 'react';
import axios from 'axios';
import UserModule from '../../components/UserModule';

import {
  CompetitionPageContainer,
  UserModuleContainer,
  Versus,
  ContentContainer,
  SplitContainer
} from './styled';

import Header from '../../components/Header';
import CreatedBy from '../../components/CreatedBy';
import ScoreBar from '../../components/ScoreBar';
import NumericalTable from '../../components/NumericalTable';

var moment = require('moment');

class CompetitionPage extends Component {

  state = {
    userIds: [17,1],
    user1: null,
    user2: null,
    user1Score: 0,
    user2Score: 0,
    user1Tasks: 0,
    user2Tasks: 0,
    user1Praise: 0,
    user2Praise: 0,
    user1TasksPerDay: [],
    user2TasksPerDay: [],
    user1PointsPerDay: [],
    user2PointsPerDay: [],
    user1PraisePerDay: [],
    user2PraisePerDay: [],
    startDate: new Date(2018, 10, 27),
    endDate: new Date(2018, 11, 1),
    duration: 0,
    loading: true,
    complete: false
  }

  componentWillMount = async () =>{

    const duration =  new moment.duration(this.state.endDate - this.state.startDate).asDays();

    this.setState({
      duration
    });


    if(new Date() > this.state.endDate){
      this.setState({
        complete: true
      })
    }
  

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
        
        // eslint-disable-next-line
        axios.get(`https://api.getmakerlog.com/users/${id}/stream/${year}/${month}/${day}/`).then((response) => {
            const data = response.data.data;
            let dailyTasks = 0;
            let dailyPoints = 0;
            let dailyPraise = 0;
            [...data].forEach((item) => {
              tasks++;
              dailyTasks++;
              dailyPoints = dailyPoints + (parseInt(item.praise) / 300) + tasks;
              dailyPraise = dailyPraise + parseInt(item.praise);
              if(userIndex === 0){
                this.setState({
                  user1Score: this.state.user1Score + (parseInt(item.praise) / 300) + tasks,
                  user1Tasks: tasks,
                  user1Praise: this.state.user1Praise + item.praise
                })
              } else {
                this.setState({
                  user2Score: this.state.user2Score + (parseInt(item.praise) / 300) + tasks,
                  user2Tasks: tasks,
                  user2Praise: this.state.user2Praise + item.praise
                })
              }
            });

            if(userIndex === 0){
              let tempTasksArray = this.state.user1TasksPerDay;
              tempTasksArray.push(dailyTasks);

              let tempPointsArray = this.state.user1PointsPerDay;
              tempPointsArray.push(dailyPoints);

              let tempPraiseArray = this.state.user1PraisePerDay;
              tempPraiseArray.push(dailyPraise);

              this.setState({
                user1TasksPerDay: tempTasksArray,
                user1PointsPerDay: tempPointsArray,
                user1PraisePerDay: tempPraiseArray
              })         
            } else {
              let tempArray = this.state.user2TasksPerDay;
              tempArray.push(dailyTasks);

              let tempPointsArray = this.state.user2PointsPerDay;
              tempPointsArray.push(dailyPoints);

              let tempPraiseArray = this.state.user2PraisePerDay;
              tempPraiseArray.push(dailyPraise);

              this.setState({
                user2TasksPerDay: tempArray,
                user2PointsPerDay: tempPointsArray,
                user2PraisePerDay: tempPraiseArray
              })  
            }

            
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
    const { user1Score, user2Score, user1Tasks, user2Tasks, user1Praise, user2Praise, user1, user2, loading, complete,
            duration, user1TasksPerDay, user1PointsPerDay, user1PraisePerDay, user2TasksPerDay, user2PointsPerDay, user2PraisePerDay} = this.state;
    return (
      <CompetitionPageContainer>
        <Header />
        {!loading &&
          <ContentContainer>
            <UserModuleContainer>
              <UserModule user={user1} score={user1Score.toFixed(2)} winner={complete ? (user1Score > user2Score) : null} />
              <Versus>vs</Versus>
              <UserModule user={user2} score={user2Score.toFixed(2)} winner={complete ? (user1Score < user2Score) : null} />
            </UserModuleContainer>
            <ScoreBar user1Score={user1Score.toFixed(2)} user2Score={user2Score.toFixed(2)} value={'Points'} emoji={`🎮`}/>
            <ScoreBar user1Score={user1Tasks} user2Score={user2Tasks} value={'Tasks'} emoji={`✅`}/>
            <ScoreBar user1Score={user1Praise} user2Score={user2Praise} value={'Praise'} emoji={`🙏`}/>
            <SplitContainer>
              <NumericalTable 
                tasksPerDay={user1TasksPerDay}
                pointsPerDay={user1PointsPerDay}
                praisePerDay={user1PraisePerDay}/>
              <NumericalTable 
                tasksPerDay={user2TasksPerDay}
                pointsPerDay={user2PointsPerDay}
                praisePerDay={user2PraisePerDay}/>
            </SplitContainer>
          </ContentContainer>
        }
        <CreatedBy />
      </CompetitionPageContainer>
    );
  }
}

export default CompetitionPage;

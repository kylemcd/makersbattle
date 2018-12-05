import React, { Component, Fragment } from "react";
import axios from "axios";
import Helmet from "react-helmet";
import Moment from "react-moment";
import { SemipolarSpinner } from 'react-epic-spinners';
import {
  CompetitionPageContainer,
  UserModuleContainer,
  Versus,
  ContentContainer,
  SplitContainer,
  DividerRed,
  DividerBlue,
  DateContainer,
  TweetLink,
  LoadingContainer,
  LoadingCard
} from "./styled";
import UserModule from "../../components/UserModule";
import Header from "../../components/Header";
import CreatedBy from "../../components/CreatedBy";
import ScoreBar from "../../components/ScoreBar";
import NumericalTable from "../../components/NumericalTable";
import Sponsors from "../../components/Sponsors";
import EmailSubscribe from "../../components/EmailSubscribe";
var moment = require("moment");
class CompetitionPage extends Component {
  state = {
    userIds: [73,881],
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
    startDate: new Date(2018, 11, 5),
    endDate: new Date(2018, 11, 11),
    duration: 0,
    loading: true,
    complete: false
  };
  componentDidMount = async () => {
    const duration = new moment.duration(
      this.state.endDate - this.state.startDate
    ).asDays();
    console.log(this.state.endDate);
    this.setState({
      duration
    });
    if (new Date() > this.state.endDate) {
      this.setState({
        complete: true
      });
    }
    await this.getUsersTasks(duration);
    this.getUsers();
  };
  getUsersTasks = async duration => {
    var user1Score = 0;
    var user1Tasks = 0;
    var user1Praise = 0;
    var user1TasksPerDay = [];
    var user1PointsPerDay = [];
    var user1PraisePerDay = [];
    var user2Score = 0;
    var user2Tasks = 0;
    var user2Praise = 0;
    var user2TasksPerDay = [];
    var user2PointsPerDay = [];
    var user2PraisePerDay = [];
    for (
      let userIndex = 0;
      userIndex < this.state.userIds.length;
      userIndex++
    ) {
      const id = this.state.userIds[userIndex];
      let tasks = 0;
      for (let index = 0; index < duration; index++) {
        let currentDate = new Date();
        currentDate = moment(this.state.startDate, "YYYY-MMMM-DD").add(
          index,
          "days"
        );
        const months = [
          "jan",
          "feb",
          "mar",
          "apr",
          "may",
          "jun",
          "jul",
          "aug",
          "sep",
          "oct",
          "nov",
          "dec"
        ];
        const year = moment(currentDate).year();
        const day = moment(currentDate).date();
        const month = months[moment(currentDate, "MMM").month()];

        let response;

        try {
          response = await axios.get(
            `https://api.getmakerlog.com/users/${id}/stream/${year}/${month}/${day}/`
          );
        } catch (error) {
          if (userIndex === 0) {
            user1TasksPerDay.push(0);
            user1PointsPerDay.push(0);
            user1PraisePerDay.push(0);
          } else {
            user2TasksPerDay.push(0);
            user2PointsPerDay.push(0);
            user2PraisePerDay.push(0);
          }
        }

        if (response) {
          const data = response.data.data;
          let dailyTasks = 0;
          let dailyPoints = 0;
          let dailyPraise = 0;
          tasks = data.length;
          [...data].forEach(item => {
            dailyTasks++;
            dailyPoints = dailyPoints + parseInt(item.praise) / 15 + tasks;
            dailyPraise = dailyPraise + parseInt(item.praise);
            if (userIndex === 0) {
              console.log(user1Score);
              user1Score = user1Score + parseInt(item.praise) / 15 + tasks;
              user1Tasks = tasks;
              user1Praise = user1Praise + item.praise;
            } else {
              user2Score = user1Score + parseInt(item.praise) / 15 + tasks;
              user2Tasks = tasks;
              user2Praise = user1Praise + item.praise;
            }
          });
          if (userIndex === 0) {
            user1TasksPerDay.push(dailyTasks);
            user1PointsPerDay.push(dailyPoints);
            user1PraisePerDay.push(dailyPraise);
          } else {
            user2TasksPerDay.push(dailyTasks);
            user2PointsPerDay.push(dailyPoints);
            user2PraisePerDay.push(dailyPraise);
          }
        }
      }
    }
    this.setState({
      user1Score,
      user1Tasks,
      user1Praise,
      user1TasksPerDay,
      user1PointsPerDay,
      user1PraisePerDay,
      user2Score,
      user2Tasks,
      user2Praise,
      user2TasksPerDay,
      user2PointsPerDay,
      user2PraisePerDay
    });
  };
  getUsers() {
    [...this.state.userIds].forEach((id, userIndex) => {
      axios.get(`https://api.getmakerlog.com/users/${id}/`).then(response => {
        const user = response.data;
        if (userIndex === 0) {
          this.setState({
            user1: user
          });
        } else {
          this.setState({
            user2: user,
            loading: false
          });
        }
      });
    });
  }
  render() {
    const {
      startDate,
      endDate,
      user1Score,
      user2Score,
      user1Tasks,
      user2Tasks,
      user1Praise,
      user2Praise,
      user1,
      user2,
      loading,
      complete,
      user1TasksPerDay,
      user1PointsPerDay,
      user1PraisePerDay,
      user2TasksPerDay,
      user2PointsPerDay,
      user2PraisePerDay
    } = this.state;
    return (
      <CompetitionPageContainer>
        <Helmet title="Makers Battle">
          <meta property="og:title" content="Makers Battle" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://makersbattle.com" />
          <meta property="og:image" content="opengraph.png" />
        </Helmet>
        <Header />
        {loading ? (
          <LoadingContainer>
            <LoadingCard>
              <SemipolarSpinner color="#231F38"/>
            </LoadingCard>
          </LoadingContainer> 
          ) : (
          <Fragment>
            <ContentContainer>
              <UserModuleContainer>
                <UserModule
                  user={user1}
                  score={user1Score.toFixed(2)}
                  winner={complete ? user1Score > user2Score : null}
                />
                <Versus>vs</Versus>
                <UserModule
                  user={user2}
                  score={user2Score.toFixed(2)}
                  winner={complete ? user1Score < user2Score : null}
                />
              </UserModuleContainer>
              <DateContainer>
                <Moment format="MM-DD-YYYY">{startDate}</Moment> -{" "}
                <Moment format="MM-DD-YYYY">{endDate}</Moment>
              </DateContainer>
              <ScoreBar
                user1Score={user1Score.toFixed(2)}
                user2Score={user2Score.toFixed(2)}
                value={"Points"}
                emoji={`🎮`}
              />
              <ScoreBar
                user1Score={user1Tasks}
                user2Score={user2Tasks}
                value={"Tasks"}
                emoji={`✅`}
              />
              <ScoreBar
                user1Score={user1Praise}
                user2Score={user2Praise}
                value={"Praise"}
                emoji={`🙏`}
              />
              <SplitContainer>
                <NumericalTable
                  tasksPerDay={user1TasksPerDay}
                  pointsPerDay={user1PointsPerDay}
                  praisePerDay={user1PraisePerDay}
                />
                <DividerRed />
                <DividerBlue />
                <NumericalTable
                  tasksPerDay={user2TasksPerDay}
                  pointsPerDay={user2PointsPerDay}
                  praisePerDay={user2PraisePerDay}
                />
              </SplitContainer>
              <TweetLink>
                Want to participate in an upcoming challenge? Fill out{" "}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScB8nqrNtExRgmxAbefByo4TIp65KiqqGVRQrI5z2yFZ01Uew/viewform?usp=sf_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  this form
                </a>
              </TweetLink>
            </ContentContainer>
            <Sponsors />
            <EmailSubscribe />
          </Fragment>
        )}
        <CreatedBy />
      </CompetitionPageContainer>
    );
  }
}
export default CompetitionPage;
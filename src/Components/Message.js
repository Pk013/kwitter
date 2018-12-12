import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import {
  Icon,
  Divider,
  Container,
  Card,
  Grid,
  GridColumn
} from "semantic-ui-react";
// import { likeMessage } from "../Actions/actions"
class Message extends Component {
  //   state = {
  //       isLiked: this.props.isLiked,
  //       totalLikes: this.props.totalLikes,
  //       likeId: this.props.likeId,
  //   }

  //   handleLikeMessage = () => {
  //       this.props.likeMessage(this.props.userId, this.props.messageId, this.props.auth.token)
  //       .then(like => {
  //           return this.setState({isLiked: true, totalLikes: this.state.totalLikes + 1, likeId: like})
  //       })
  //   }

  //   likeMessage = () => {
  //       return (
  //           <GridColumn
  //           style={{
  //               color: "rgb(45,45,45",
  //           }}>

  //           </GridColumn>
  //       )
  //   }
  render() {
    return (
      <Fragment>
        <div>
          <Card
            fluid
            centered
            style={{
              border: "3px solid",
              height: "auto",
              padding: "1em",
              marginBottom: "1em"
            }}
          >
            <Grid.Row
              columns={2}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly"
              }}
            >
              <Grid.Column
                style={{
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <span>{this.props.username}</span>
              </Grid.Column>
              <Switch>
                <Route path="/feed" />
              </Switch>
            </Grid.Row>

            <Grid.Row
              columns={2}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly"
              }}
            >
              <Grid.Column>
                <Divider />
                <img />
                <Divider />
              </Grid.Column>
            </Grid.Row>
          </Card>
        </div>
        <Fragment>
          {/* //   place props in styling, from fragment section. */}
          <div>{this.props.text}</div>
          <div>{this.props.username}</div>
          <div>Kweeted by</div>
          <button onClick={this.props.toggleLike}>
            {this.props.isLiked ? "Unlike" : "Like"}
          </button>
          <p>Likes: {this.props.numOfLikes}</p>
        </Fragment>{" "}
      </Fragment>
    );
  }
}

// const mapStatetoProps = ({auth, messages}) => ({
//     auth,
//     messages
// });

// const mapDispatchtoProps = (dispatch) => {
//     return {
//         likeMessage: (userId, messageId, token) => {
//             return dispatch(likeMessage(userId, messageId, token))
//         }
//     }
// }

// export default connect ( mapStatetoProps, mapDispatchtoProps)(Message)
export default Message;

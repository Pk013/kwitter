import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { Divider, Card, Grid, GridColumn } from "semantic-ui-react";

class Message extends Component {
  render() {
    return (
      <Card
      backgroundColor="green">
        <Grid.Row
        columns={1}
        style={{
          
          display:"flex",
          flexDirection:"row",
          justifyContent:"space-between"}}>
          </Grid.Row>
            <Grid.Column
            style={{
              display: "flex",
              alignSelf: "center"
            }}>
          </Grid.Column>
        {/* //   place props in styling, from fragment section. */}
        <div>{this.props.text}</div>
        <div>Kweeted by {this.props.username}</div>
        <button onClick={this.props.toggleLike}>
          {this.props.isLiked ? "Unlike" : "Like"}
        </button>
        <p>Likes: {this.props.numOfLikes}</p>
        
      </Card>
    );
  }
}
export default Message;

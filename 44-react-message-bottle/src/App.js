import React from "react";

const apiUrl =
  "http://fetch-message-in-the-bottle.herokuapp.com/api/v2/messages";

class MessageLister extends React.Component {
  state = {
    messages: []
  };

  componentDidMount() {
    console.log(this.state);
    fetch(apiUrl)
      .then(r => r.json())
      .then(msgObjs =>
        this.setState({ messages: msgObjs }, () => console.log(this.state))
      );
  }

  render() {
    return (
      <>
        {this.state.messages.map(msg => (
          <p key={msg.id}>{msg.message}</p>
        ))}
        <ShowMsgsIds data={this.state.messages} />
      </>
    );
  }
}

let countChildRenders = 0;

class ShowMsgsIds extends React.Component {
  state = {
    msgIds: []
  };

  static getDerivedStateFromProps(props, state) {
    const ids = props.data.map(msgObj => msgObj.id);
    const newState = { msgIds: ids };
    return newState;
  }

  render() {
    console.log("This is render number ", ++countChildRenders);
    return this.state.msgIds.map(msgId => <p key={msgId}>{msgId}</p>);
  }
}

export default MessageLister;

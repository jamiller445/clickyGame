import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    clickedId: "",
    topScore: 0,
    score: 0,
    message: "",
    lastClicked: 0,
    clickedList: [],
    shakeit: "false"
  };

  shuffleArray = (friendsArray) => {
    const shuffledArray = friendsArray.sort(function(a, b){return 0.5 - Math.random()});
    return shuffledArray;
    };

  resetGame = () => {
    console.log("In Reset");
    this.setState({score: 0});
    this.setState({lastClicked: 0});
    this.setState({shakeit: "true"})
    this.setState({clickedList: []})
    // this.setState({shakeit: false})
    this.setState({clickedId: 0});
    console.log("state= ",this.state);
  };
  
  displayFriend = id => {    
    if (this.state.lastClicked === 0){
      if (this.state.topScore > this.state.score){
        this.setState({score: this.state.score + 1});
        this.state.clickedList.push(id);
        this.setState({shakeit: "false"});
        this.setState({lastClicked: id});
        this.setState({clickedId: id});
      }
      else {
        this.setState({score: this.state.score + 1});
        this.setState({topScore: this.state.topScore + 1});
        this.state.clickedList.push(id);
        this.setState({shakeit: "false"});
        this.setState({lastClicked: id});
        this.setState({clickedId: id});
      // this.setState({score: this.state.score + 1});
      // this.setState({topScore: this.state.topScore + 1});
      console.log("firstID= ",id);
      }
    } 
      else {
        console.log("friend id=",id);
        if (this.state.clickedList.includes(id)) {
          console.log("clickedList= ",this.state.clickedList);
          console.log("friend id=",id);
          this.resetGame()
        }
        else {
          this.state.clickedList.push(id); 
          this.setState({score: this.state.score + 1});
          if (this.state.topScore <= this.state.score){this.setState({topScore: this.state.topScore + 1})}
        }
      }
    this.setState({clickedId: id})
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    this.shuffleArray(friends);
    return (
      <Wrapper
      shakeWrapper={this.state.shakeit} >
        <Title
          heading="Clicky Game"
          score={this.state.score}
          topScore={this.state.topScore}
        />
          {this.state.friends.map(friend => (
          <FriendCard
            displayFriend={this.displayFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

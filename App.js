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
    shakeit: "false"
  };
  
  sh


  shuffleArray = (friendsArray) => {
    const shuffledArray = friendsArray.sort(function(a, b){return 0.5 - Math.random()});
    return shuffledArray;
    };

  // {console.log("friendsArray= ",this.shuffleArray(this.state.friends))}

  resetGame = () => {
    this.setState({lastClicked: 0});
    this.setState({score: 0});
    this.setState({shakeit: "true"})
    // this.setState({shakeit: false})
    this.setState({clickedId: 0});
  };
  

  displayFriend = id => {

    if (this.state.lastClicked === 0){
      this.state.shakeit = "false"
      this.state.lastClicked = id
      this.setState({clickedId: id})
      this.setState({score: this.state.score + 1});
      this.setState({topScore: this.state.topScore + 1});
      console.log("id= ",id , " lastClicked= ",this.state.lastClicked);
    } 
    else if (this.state.lastClicked === id){
      this.resetGame();
      // {console.log("friend id=",id)}
      // {console.log("friend match")}
      // console.log("GAME OVER");
      
      }
      else {
        {console.log("friend id=",id)}
        {console.log("friend match")}
        // let s = s + 1 ;
        this.setState({score: this.state.score + 1});
        this.setState({topScore: this.state.topScore + 1});
        this.setState({clickedId: id})  
      }

    // let shuffledArray = this.shuffleArray(friends);
    // Filter this.state.friends for friends with an id not equal to the id being removed
    // const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    // this.setState({ friends });
    this.setState({clickedId: id})
    
    
    
      // this.setState({clickedId: id})
      // console.log("game over");
      // lastClicked = id; 
    
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    this.shuffleArray(friends);
    return (
      <Wrapper
      shakeWrapper={this.state.shakeit} >
      
        {/* <Title>Clicky Game</Title> */}
        <Title
          heading="Clicky Game"
          score={this.state.score}
          topScore={this.state.topScore}
        />
        {/* {this.state.friends = this.state.friends.sort(function(a, b){return 0.5 - Math.random()})} */}
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

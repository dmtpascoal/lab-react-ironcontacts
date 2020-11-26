import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import ActorCard from './components/ActorCard';

class App extends React.Component {
  state = {
    contacts: contacts.slice(0, 5),
  };
  clickHandler = () => {
    let actors = [...this.state.contacts];
    let random = contacts[Math.floor(Math.random() * contacts.length)];
    actors.push(random);
    console.log(actors);
    this.setState({ contacts: actors });
  };

  sortByName = () => {
    let names = [...this.state.contacts];
    names.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
    console.log(names);
    this.setState({ contacts: names });
  };
  sortByPopularity = () => {
    let popular = [...this.state.contacts];
    popular.sort((a, b) => {
      if (a.popularity < b.popularity) {
        return 1;
      } else {
        return -1;
      }
    });
    this.setState({ contacts: popular });
  };

  Delete = (famousIndex) => {
    let famous = [...this.state.contacts];
    famous.splice(famousIndex, 1);
    this.setState({
      contacts: famous,
    });
  };
  render() {
    return (
      <div className="App">
        <button onClick={this.clickHandler}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <h1>IRON CONTACTS</h1>
        {this.state.contacts.map((element, index) => {
          return (
            <ActorCard
              key={index}
              img={element.pictureUrl}
              name={element.name}
              popularity={element.popularity}
              delete={() => this.Delete(index)}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import { purple100, purple500 } from 'material-ui/styles/colors';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;


const styles = {
  bangers: {
    fontFamily: "bangers",
  },
  oswald: {
    fontFamily: "oswald",
  },
};

export default class TeamStats extends Component {
  render() {
    const monsters = this.props.monsters;
    const numMonsters = monsters.length;

    const cunning = Math.round((monsters.reduce((cunning, monster) => {
      return cunning + monster.cunning;
    }, 0) / ( 3 * numMonsters )) * 100 );

    const strength = Math.round((monsters.reduce((strength, monster) => {
      return strength + monster.strength;
    }, 0) / ( 3 * numMonsters )) * 100 );

    const smashingSkills = Math.round((monsters.reduce((smashingSkills, monster) => {
      return smashingSkills + monster.smashingSkills;
    }, 0) / ( 3 * numMonsters )) * 100 );

    const fighting = Math.round((monsters.reduce((fighting, monster) => {
      return fighting + monster.fighting;
    }, 0) / ( 3 * numMonsters )) * 100 );

    const scary = Math.round((monsters.reduce((scary, monster) => {
      return scary + monster.scary;
    }, 0) / ( 3 * numMonsters )) * 100 );

    const specialPowers = Math.round((monsters.reduce((specialPowers, monster) => {
      return specialPowers + monster.specialPowers;
    }, 0) / ( 3 * numMonsters )) * 100 );

    const agility = Math.round((monsters.reduce((agility, monster) => {
      return agility + monster.agility;
    }, 0) / ( 3 * numMonsters )) * 100 );

    const resilience = Math.round((monsters.reduce((resilience, monster) => {
      return resilience + monster.resilience;
    }, 0) / ( 3 * numMonsters )) * 100 );

    const defense = Math.round((fighting + scary + specialPowers + agility + resilience)/5);

    const offense = Math.round((strength + cunning +
      smashingSkills + scary + agility + resilience)/6);

    const total = Math.round((strength + cunning +
      smashingSkills + scary + agility + resilience + fighting + specialPowers)/8);

    const data = {
      labels: ['Cunning', 'Stength', 'Smashing Skills', 'Fighting', 'Scary', 'Special Powers', 'Agility', 'Resilience'],
      datasets: [
        {
          label: 'In % of max possible',
          backgroundColor: 'rgba(339, 89, 161, 0.2)',
          borderColor: 'rgba(339, 89, 161, 1)',
          pointBackgroundColor: 'rgba(339, 89, 161, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(339, 89, 161, 1)',
          data: [cunning, strength, smashingSkills, fighting, scary,
            specialPowers, agility, resilience]
        },

        {
           label: "Monster Averages",
           backgroundColor: "rgba(255,99,132,0.2)",
           borderColor: "rgba(255,99,132,1)",
           pointBackgroundColor: "rgba(255,99,132,1)",
           pointBorderColor: "#fff",
           pointHoverBackgroundColor: "#fff",
           pointHoverBorderColor: "rgba(255,99,132,1)",
           data: [3, 48, 40, 19, 12, 39, 34, 3]
       }
      ]
    };


    return (
      <div>
        <h2 style={styles.bangers}>Monster Powers</h2>
        <div className="row">
          <div className="col s12 m7">
            <Line data={data}
            width={500}
            height={500}
            option={{
              maintainAspectRatio: false
            }}/>
          </div>
          <div className="col s12 m5">
            <h3 style={styles.bangers}>Powers in % of max possible</h3>
            <Divider />
            <h4 style={styles.oswald} >Attack Power: {offense}%</h4>
            <h4 style={styles.oswald}>Defense Power: {defense}%</h4>
            <h4 style={styles.oswald}>Total Power: {total}%</h4>
            <Divider />
            <h5 style={styles.oswald}>Number of Monsters: {numMonsters}</h5>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <Paper zDepth={1}>
        <BottomNavigation>
          <BottomNavigationItem
            label="Recents"
            icon={recentsIcon}
            onTouchTap={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Favorites"
            icon={favoritesIcon}
            onTouchTap={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Nearby"
            icon={nearbyIcon}
            onTouchTap={() => this.select(2)}
          />
        </BottomNavigation>
      </Paper>
          </div>
        </div>
      </div>
    );
  }
}
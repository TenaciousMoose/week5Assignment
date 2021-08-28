class Player {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }

    describe() {
        return `${this.name} plays ${this.position}`;
    }
}

class Team {
    constructor(name) {
        this.name = name;
        this.players = []
    }

    addPlayer(player) {
        if (player instanceof Player) {
            this.players.push(players);
        } else {
            throw new Error(`You can only add an instance of Band Member. Argument is not a band member: ${player}`);
        }
    }

    describe() {
        return `${this.name} has ${this.players.length} band members`;
    }
}

class Menu {
    constructor() {
        this.teams = [];
        this.selectedTeam = null;
    }
    start() {
        let selection = this.showMainMenuOptions();

        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createTeam();
                    break;
                case '2':
                    this.viewTeam();
                    break;
                case '3':
                    this.deleteTeam();
                    break;
                case '4':
                    this.displayTeams();
                    break;
                default:
                    selection = 0;
            }

            selection = this.showMainMenuOptions();
        }

        alert('Goodbye!');
    }
    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) create new band
        2) view band
        3) delete band
        4) display all bands
        `);
    }

    showTeamMenuOptions(teamInfo) {
        return prompt(`
            0) back
            1) create band member
            2) delete band member
            ----------------
            ${teamInfo}
        `);
    }

    displayTeams() {
        let teamString = '';
        for (let i = 0; i < this.teams.length; i++) {
            teamString += i + ') ' + this.teams[i].name + '\n';
        }
        alert(teamString);
    }

    createTeam() {
        let name = prompt(`Enter name for new band:`);
        this.teams.push(new Team(name));
    }

    viewTeam() {
        let index = prompt(`Enter the index of the band you wish to view:`)
        if (index > -1 && index < this.teams.length) {
            this.selectedTeam = this.teams[index];
            let description = 'Band Name: ' + this.selectedTeam.name + ' \n';

            for (let i = 0; i < this.selectedTeam.players.length; i++) {
                description += i + ') ' + this.selectedTeam.player[i].name + ' - ' + this.selectedTeam.players[i].position + '\n';
            }

            let selection = this.showMainMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createPlayer();
                    break;
                case '2':
                    this.deletePlayer();
            }
        }
    }

    deleteTeam() {
        let index = prompt(`Enter the index of the band you wish to delete: `);
        if (index > -1 && index < this.teams.length) {
            this.teams.splice(index, 1);
        }
    }

    createPlayer() {
        let name = prompt(`Enter name for new band member: `);
        let position = prompt(`Enter position for new band member: `);
        this.selectedTeam.players.push(new Player(name, position));
    }

    deletePlayer() {
        let index = prompt('Enter the index of the band member you wish to delete: ');
        if (index > -1 && index < this.selectedTeam.players.length) {
            this.selectedTeam.players.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();



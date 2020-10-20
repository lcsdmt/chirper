import React from 'react';
import ChirpCard from './components/Card';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            message: '',
            chirps: [
                {
                    userName: "Riley",
                    userMessage: "letterkenny chirp king"
                },
                {
                    userName: "Jonesy",
                    userMessage: "letterkenny chirp king"
                },
                {
                    userName: "Shoresy",
                    userMessage: "letterkenny chirp king"
                }
            ]
        }
    }

    nameInput = event => {
        this.setState({ name: event.target.value });
    }
    messageInput = event => {
        this.setState({ message: event.target.value });
    }
    render() {
        return (<React.Fragment>
            <form className="d-flex justify-content-center p-2"  >
                <div className="form-group w-50" id="chirperForm">
                    <label className="mt-2">Name</label>
                    <input className="form-control" value={this.state.name} onChange={this.nameInput} id="displayMessage" cols="30" rows="10"></input>
                    <label className="mt-2">Chirp</label>
                    <textarea className="form-control" value={this.state.message} onChange={this.messageInput} id="chirpMessage" cols="30" rows="4"></textarea>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-danger mt-2"
                            onClick={event => {
                                event.preventDefault();
                                let chirp = this.state.chirps.slice();
                                chirp.unshift({
                                    userName: this.state.name,
                                    userMessage: this.state.message,
                                });
                                this.setState({ chirps: chirp });
                                this.setState({
                                    name: '',
                                    message: ''
                                })
                            }}>Chirp, Ferda!</button>
                    </div>
                </div>
            </form>
            {this.state.chirps.map((element) => {
                return (
                    <ChirpCard key={element.id} userName={element.userName} userMessage={element.userMessage} />
                )
            })}
        </React.Fragment>)
    }
}

export default App;

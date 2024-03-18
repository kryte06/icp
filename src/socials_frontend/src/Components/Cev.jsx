import React, { Component } from 'react';
import './Style/styles.css';
import { Button } from 'semantic-ui-react';

class Cev extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGenre: null
    };
  }

  handleMenuClick = ({ key }) => {
    this.setState({ selectedGenre: key });
  }

  render() {
    const { selectedGenre } = this.state;

    return (
      <form
        style={{
          maxWidth: 600,
        }}
      >
        <div style={{ display: 'block' }}>
          <div>
            <label>
              Event:
              <input type="text" required />
            </label>
          </div>

          <div>
            <label>
              Genre:
              <select onChange={(e) => this.setState({ selectedGenre: e.target.value })}>
                <option value="">Select Genre</option>
                <option value="games">Games</option>
                <option value="hackathons">Hackathons</option>
                <option value="academics">Academics</option>
                <option value="others">Others</option>
              </select>
            </label>
          </div>

          <div>
            <label>
              Details:
              <textarea required></textarea>
            </label>
          </div>

          <div>
            <label>
              Location:
              <input type="text" required />
            </label>
          </div>

          <div>
            <label>
              Date:
              <input type="date" required />
            </label>
          </div>

          <div>
            <label>
              Time:
              <input type="time" required />
            </label>
          </div>
          
          <div>
            <Button secondary type = "submit">Submit</Button>
          </div>
        </div>
      </form>
    );
  }
}

export default Cev;

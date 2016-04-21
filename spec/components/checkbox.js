import React from 'react';
import Checkbox from '../../components/checkbox';

class CheckboxTest extends React.Component {
  state = {
    checkbox_1: true,
    checkbox_2: false,
    checkbox_3: false
  };

  handleChange = (field, value) => {
    this.setState({...this.state, [field]: value});
  };

  handleFocus = () => {
    console.log('Focused');
  };

  handleBlur = () => {
    console.log('Blur');
  };

  render () {
    return (
      <section>
        <h5>Checkboxes</h5>
        <p>Checkboxes showcase...</p>

        <Checkbox
          className={'customClass'}
          checked={this.state.checkbox_1}
          label="Checked checkbox"
          onChange={this.handleChange.bind(this, 'checkbox_1')}
        />
        <Checkbox
          checked={this.state.checkbox_2}
          label="Not checked checkbox"
          onChange={this.handleChange.bind(this, 'checkbox_2')}
        />
        <Checkbox
          checked={this.state.checkbox_3}
          label="Disabled checkbox"
          disabled
          onChange={this.handleChange.bind(this, 'checkbox_3')}
        />
      </section>
    );
  }
}

export default CheckboxTest;

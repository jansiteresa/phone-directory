import React, {Component} from 'react';
import Header from "./Header";
import './AddSubscriber.css';

class AddSubscriber extends Component {

    constructor()
    {
        super();
        this.state = {
            id: 0,
            name: '',
            phone: ''
        }
    }
    
    inputChangedHandler = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
        console.log(this.state);
    }

    render() {
        const {name, phone} = this.state;
        return(
            <div>
                <Header heading="Add Subscriber"/>
                <div className='component-body-container'>
                    <button className='custom-btn'> Back </button>
                    <form className='subscriber-form'>
                        <label htmlFor='name' className='label-control'> Name: </label><br></br>
                        <input id='name' typer='text' className='input-control' name='name' onChange={this.inputChangedHandler} /> <br></br><br></br>
                        <label htmlFor='phone' className='label-control'> Phone: </label><br></br>
                        <input id='phone' typer='text' className='input-control' name='phone' onChange={this.inputChangedHandler}/> <br></br><br></br>
                        <div className='subscriber-infor-container'>
                            <span className='subscriber-to-add-heading'> Subscriber to be added:</span><br></br>
                            <span className='subscriber-info'> Name: {name}</span><br></br>
                            <span className='subscriber-info'> Phone: {this.state.phone}</span><br></br>
                        </div>
                        <button className='custom-btn add-btn' type='submit'>Add</button>
                    </form>
                
                </div>
            </div>
        )
    }
}

export default AddSubscriber;
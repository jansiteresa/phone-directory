import React, {Component} from 'react';
import Header from "./Header";
import './AddSubscriber.css';

class AddSubscriber extends Component {
    render() {
        return(
            <div>
                <Header heading="Add Subscriber"/>
                <div className='component-body-container'>
                    <button className='custom-btn'> Back </button>
                    <form className='subscriber-form'>
                        <label htmlFor='name' className='label-control'> Name: </label><br></br>
                        <input id='name' typer='text' className='input-control' name='name'/> <br></br><br></br>
                        <label htmlFor='phone' className='label-control'> Phone: </label><br></br>
                        <input id='phone' typer='text' className='input-control' name='phone'/> <br></br><br></br>
                        <div className='subscriber-infor-container'>
                            <span className='subscriber-to-add-heading'> Subscriber to be added:</span><br></br>
                            <span className='subscriber-info'> Name: </span><br></br>
                            <span className='subscriber-info'> Phone: </span><br></br>
                        </div>
                        <button className='custom-btn add-btn' type='submit'>Add</button>
                    </form>
                
                </div>
            </div>
        )
    }
}

export default AddSubscriber;
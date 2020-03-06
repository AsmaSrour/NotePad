import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {connect} from 'react-redux'
import moment from 'moment'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Add_Reminder , Remove_Peminder , clear} from '../Actions/action'
import logo from './notes.ico'


class App extends Component{

    state = {
        text: '',
        date: new Date()
    }

    render_Reminders =() => {
        const {reminders} = this.props ; 
        return(
            <ul className="list-group">
                {
                    reminders.map( reminder => {
                        return (
                            <li key ={reminder.id} className="list-group-item" >
                                <div>{reminder.text}</div>
                                <div>{moment(new Date (reminder.date)).fromNow() }</div>
                                <div className="closeIcon btn btn-danger" onClick={() => this.props.Remove_Peminder(reminder.id)}></div>
                            </li>
                        )
                    })
                
                }
            </ul>
        )
    } 


    render(){
        return(
            <div className='App'>
                <img src={logo} alt=''/>

                <div className="Reminder_Title">
                <h2>What should you do ?</h2>
                </div>

                <input 
                        onChange={(e) => this.setState({text : e.target.value})}
                        className="form-control"
                        value={this.state.text}
                        type="text"
                        placeholder="Enter What You Think..."
                />
                 <DatePicker
                        className="form-control"
                        value={this.state.date}
                        placeholderText="Enter Date.."
                        selected={this.state.date}
                        onChange={(date) => {this.setState({date : date})}}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeCaption="time"
                        dateFormat="MMMM d, yyyy h:mm aa"
                        />
                <button 
                    onClick = { () => {
                    this.props.Add_Reminder(this.state.text , this.state.date) 
                    this.setState({text:'' , date: ''})
                    }}
                    className="btn btn-primary btn-block"
                >
                    Add Reminder
                </button>

                {this.render_Reminders()}

                <button 
                    className="clear_rem btn btn-danger btn-block"
                    onClick = { () => this.props.clear()}
                >
                    Clear Reminders
                </button>

            </div>
        )
    }
}
export default connect (state => {
    return{
        reminders : state
    }
}, {Add_Reminder , Remove_Peminder ,clear} ) (App) 
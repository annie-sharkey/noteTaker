import React, { Component } from "react";
import "./Note.css";
import Typing from 'react-typing-animation';

class Note extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            notes: [
                { title: "Main course 1", description:"blah", id: 0 },
            ],
            categories: [],
            title: '',
            description: '',
            category: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // runs handleAddNote when "Make Note!" button is pressed
    // Code for getting current date: https://www.nicesnippets.com/blog/how-to-get-current-date-and-time-in-reactjs
    handleSubmit(event) {
        const newNote = {
            title: this.state.title,
            description: this.state.description,
            date: new Date().toLocaleString(),
            id: this.props.notes[this.props.notes.length-1].id + 1,
            category: this.state.category
        }
        this.props.handleAddNote(newNote)
        this.setState({
            title: '',
            description: '',
            category: ''
        })
    }

    // updates state every time the text fields for title, description, or category for a new potential note is changed
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    render() {
        return (
            <div className="page" style={{ justifyContent: "center" }}>
                
                <div className="title" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginLeft: 30 }}>
                    <Typing>Note Taker</Typing>
                    <img src="https://www.freepnglogos.com/uploads/pencil-png/pencil-png-transparent-png-pictures-icons-and-png-2.png"
                    style={{ height: 80, width: 80, paddingTop: 20 }}></img>
                </div>

                <form onSubmit={this.handleSubmit} className="form">
                    <div style={{ display: "flex" }} className="makeNote">
                        <div style={{ flex: 1, paddingLeft: 325, paddingRight: 0, marginRight: 0 }}>
                            <label className="label">
                            Title:{"               "}<br/>
                            <input type="text" name="title" id="title" placeholder='' 
                            value={this.state.title} onChange={this.handleChange} className="textbox"
                            style={{ width: 200}} />
                            </label>
                            <br/>

                            <label className="label">
                            Category:<br/>
                            <input type="text" name="category" id="category" placeholder='' value={this.state.category} 
                            onChange={this.handleChange} className="textbox"
                            style={{ width: 200 }} />
                            </label>
                            <br/>
                        </div>

                        <div style={{ flex: 2, paddingRight: 300, paddingLeft: 0, marginLeft: 0 }}>
                            <label className="label">
                            Description:<br/>
                            <textarea type="text" name="description" id="description" placeholder='' 
                            value={this.state.description} onChange={this.handleChange}
                            style={{ height: 75, width: 400 }} className="textbox" />
                            </label>
                            <br/>
                        </div>
                    </div>
                    
                </form>
                <br/>
                <button className="makeButton" type="button" onClick={this.handleSubmit}>Make Note!</button>


                {/* References for Form + handleSubmit and handleChange: 
                https://stackoverflow.com/questions/36683770/how-to-get-the-value-of-an-input-field-using-reactjs
                https://medium.com/zestgeek/how-to-handle-multiple-form-inputs-in-reactjs-2f68e3cf3cf8
                https://reactjs.org/docs/forms.html
                 */}
                <div>
                    <br></br>
                    <br></br>
                </div>

            </div>
        )
    }
}

export default Note
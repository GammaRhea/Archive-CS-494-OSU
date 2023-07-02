import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

// attempt 1
// class Toggle extends React.Component {
//     constructor (props) {
//         super(props)
//         this.state = {
//             isOn: false,
//             url: "",
//             cap: ""
//         }
//         this.handleClick = this.handleClick.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }

//     handleClick() {
//         this.setState(oldState => ({
//             isOn: !oldState.isOn
//         }))
//     }

//     handleSubmit(event) {
//         event.preventDefault()
//         console.log("submitting url form data:", document.getElementById("url_frm").value)
//         console.log("submitting cap form data:", document.getElementById("cap_frm").value)
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={this.handleClick}>
//                     {this.state.isOn ? "Close Photo Entry" : "Open Photo Entry"}
//                 </button> 
//                 { this.state.isOn ? <div>
//                     <form id="url_frm">
//                         <label>
//                             <input onChange={this.handleChange} placeholder="URL" type="text" value={this.state.url}/>
//                         </label>
//                     </form>
//                     <form id="cap_frm">
//                         <label>
//                             <input placeholder="Caption" type="text" value={this.state.cap}/>
//                         </label>
//                     </form>
//                     <button onClick={this.handleSubmit} type="submit">Submit</button>
//                     <button onClick={this.handleClick} type="cancel">Cancel</button>
//                 </div> 
//                 : null
//                 }
//             </div>
//         )
//     }
// }

const formData = {url: "", cap: ""}

const cardList = [
    {
        "key": 0,
        "url": "http://placekitten.com/280/280?image=1",
        "cap": "A Cute Kitten"
    }
]

class Toggle extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            isOn: false,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(oldState => ({
            isOn: !oldState.isOn
        }))
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.state.isOn ? "Close Photo Entry" : "Open Photo Entry"}
                </button>
                { this.state.isOn ? 
                <div>
                    {this.props.children}
                    <button type="submit">Submit</button>
                    <button onClick={this.handleClick} type="cancel">Cancel</button>
                </div> : null }
            </div>
        )
    }
}

class DataForm extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        console.log(event.target.value)
        this.props.handleChange(event.target.value)
    }

    render() {
        return (
            <form>
                <input onChange={this.handleChange} placeholder={this.props.placeText} type = "text" />
            </form>
        )
    }
}

function Card(props) {
    return <div className="card">{props.children}</div>
}

class CardDictionary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cards: Object.keys(cardList)
        }
        this.renderDictionary = this.renderDictionary.bind(this)
    }

    renderDictionary() {
        console.log(this.state.cards)
        return (this.state.cards.map(key => {
            <Card key={key.key}>
                <img src={key.url} alt={key.url} />
                <br></br>
                {key.cap}
                <button type="x">X</button>
            </Card>
        }))
    }

    render() {
        return (
            <div>
                {this.renderDictionary()}
            </div>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            urlValue: Object.keys(formData)[0],
            capValue: Object.keys(formData)[1]
        }
        this.handleURLChange = this.handleURLChange.bind(this)
        this.handleCapChange = this.handleCapChange.bind(this)
    }

    // This is working, good
    handleURLChange(newValue) {
        this.setState({
            urlValue: newValue
        })
    }

    handleCapChange(newValue) {
        this.setState({
            capValue: newValue
        })
    }

    render() {
        return (
            <div className="wrapper">
                <div className="one">
                    <Toggle>
                        <DataForm placeText="URL" handleChange={this.handleURLChange} />
                        <DataForm placeText="Caption" handleChange={this.handleCapChange}/>
                    </Toggle>
                </div>
                <div className="two">
                    <CardDictionary />
                    <Card>
                        <img src="http://placekitten.com/280/280?image=1" alt="http://placekitten.com/480/480?image=1"/>
                        <br></br>
                        A Cute Kitten
                        <button type="x">X</button>
                    </Card>
                </div>
            </div>
        )
    }
}

// I'm stuck and not how to proceed here and it's late so I'm going to explain my process and write some psuedo code to say what I would do like Professor Hess suggested.
// I lifted state up to bring my formData (url and caption) that the user types into the input forms and at the suggestion of Sumer's suggestion I also pulled my Array of Cards up
// I'm having an issue getting my CardList to properly propagate on my Application using the CardDictionary Class I wrote, which is what has me stuck.
// Trying to access the array with cards: Object.keys doesnt seem to be working because I can't seem to pull out the data I want, possible because I created the const obj with []
// I tried research how to to properly return lifted state arrays, but I've had trouble finding React info without Hooks
//
// If it was working the next step and it was properly working I would have then hooked up the submit button to use the .push function to add a piece to the array and update the dom.
// That would theoretically render the new card to the screen. I would have created "handleSubmit" under my Toggle Class to do this.
//
// After that, I would have taken the advice by one of my classmates on the Ed Discussion board and use the card's "key" value in order to delete the data from the array, and then hook up the 'X'
// Button in the CardDictionary Class. Once clicked it would likely call splice or filter to remove the item from that list.
// I apologize for being unable to finish all the components necessary for this assignment.
// I feel like I have put in good work, but unfortunately due to my other courses I am a little behind being able to complete it. I will make better use of my time for assignment 2 and try to get
// a head start.
//
// I look forward to discussing my psuedo code with Sumer in order to find a solution so I can learn what I did wrong.

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

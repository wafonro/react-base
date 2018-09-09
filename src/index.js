import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { About } from './components/About'
import { Clients } from './components/Clients'
import { Nav } from './components/nav'
require("./index.css")
class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <Nav />
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/clients" component={Clients} />
                </div>
            </BrowserRouter>

        )
    }
}

let app = document.getElementById("app")
app ? ReactDOM.render(<App />, app) : null
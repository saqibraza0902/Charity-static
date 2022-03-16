import React from "react"
import {BrowserRouter as Router , Route , Routes} from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Causes from "./components/Causes"
import Event from "./components/Event"
import Causes_Detail from "./components/Causes_Detail";
import Event_Detail from "./components/Event_Detail";
export default function RoutePage(){
    return (
        <div>
              <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Event />} />
        <Route path="/event_detail" element={<Event_Detail />} />
        <Route path="/about" element={<About />} />
        <Route path="/causes" element={<Causes />} />
        <Route path="/causes_detail" element={<Causes_Detail />} />
       <Route path="/contact" element={<Contact />}>
      </Route>
    </Routes>
   </Router>
        </div>
    )
}
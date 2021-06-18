import React, { Component } from 'react'
import Tour from '../tour/Tour'
import tourData from '../../data/tourData'
import './TourList.scss'

export default class TourList extends Component {
    state = {
        tours: tourData
    }
    removeTour = id => {
        // console.log(id)
        const { tours } = this.state
        const sortedTours = tours.filter(c => c.id !== id);
        this.setState({ tours: sortedTours })
    }
    render() {
        // console.log(this.state.tours)
        const { tours } = this.state;
        return (
            <section className="tour-list">
                {tours.map(d => (<Tour key={d.id} tour={d} removeTour={this.removeTour}></Tour>))}
            </section>
        )
    }
}

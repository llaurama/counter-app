import React, {Component} from 'react';
import './App.css';
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {

    state = {
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 3},
            {id: 4, value: 0},
        ]
    };

    handleReset = () => {
        const counters = this.state.counters.map(counter => {
            counter.value = 0;
            return counter;
        });
        this.setState({counters});
    };

    handleDecrease = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = counter;
        if (counters[index].value !== 0) {
            counters[index].value--;
        }
        this.setState({counters});
    };

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = counter;
        counters[index].value++;
        this.setState({counters});
    };

    handleDelete = counter => {
        const counters = this.state.counters.filter(c => c.id !== counter.id);
        this.setState({counters});
    };

    render() {
        return (
            <div>
                <NavBar
                    totalCounters={this.state.counters.filter(c => c.value > 0).length}
                />
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDecrease={this.handleDecrease}
                        onDelete={this.handleDelete}
                    />
                </main>
            </div>
        );
    }
}

export default App;

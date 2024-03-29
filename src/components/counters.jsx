import React, {Component} from "react";
import Counter from "./counter";

class Counters extends Component {
    render() {
        const {counters, onReset, onDecrease, onIncrement, onDelete} = this.props;
        return (
            <div className="row">
                <div className="col-3z">
                    <button
                        onClick={onReset}
                        className="btn btn-primary btn-sm m-2"
                    >Reset
                    </button>
                </div>
                {counters.map(counter =>
                    <Counter
                        key={counter.id}
                        onDecrease={onDecrease}
                        onIncrement={onIncrement}
                        onDelete={onDelete}
                        counter={counter}
                    />)}
            </div>
        );
    }
}

export default Counters;
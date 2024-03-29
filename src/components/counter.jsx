import React, {Component} from "react";

class Counter extends Component {
    render() {
        return (
            <div className="container">
                <span
                    className={this.getBadgeClasses()}>{this.formatValue()}
                </span>
                <button
                    onClick={() => this.props.onDecrease(this.props.counter)}
                    className="btn btn-secondary btn-sm m-2">-
                </button>
                <button
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm">+
                </button>
                <button
                    onClick={() => this.props.onDelete(this.props.counter)}
                    className="btn btn-danger btn-sm m-2">Delete
                </button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatValue() {
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;
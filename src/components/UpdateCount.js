import React from 'react'


class UpdateCount extends React.Component {
    state = {
        count: 0
    };
    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        });
    }
    render() {
        const { count } = this.state;
        if (count === 4) {
            // Imitate an error!
            throw new Error('Application crashed!');
        }
        return (
            <div>
                <h1>{count}</h1>
                <button onClick={this.handleClick}>+</button>
            </div>
        );
    }
};

export default UpdateCount;
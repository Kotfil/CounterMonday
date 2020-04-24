import React from 'react';
import './App.css';

class App extends React.Component {

    state = {
        counter: 0,
        classToggleInc: false,
        classToggleReset: true,
        changeNumberStyle: false,
        changeButtonStyleInc: false,
        changeButtonStyleReset: true,
    };


    doIncrement = () => {
        const newValue = this.state.counter + 1;
        this.setState({counter: newValue});
        if (this.state.counter > -1) {
            this.setState({
                classToggleReset: false,
                changeButtonStyleReset: false,
            })
            ;
        }
        if (this.state.counter === 4) {
            this.setState({
                classToggleInc: true,
                changeNumberStyle: true,
                changeButtonStyleInc: true,
            });
        }
    };

    doReset = () => {
        this.setState({
            counter: 0,
            classToggleInc: false,
            classToggleReset: true,
            changeNumberStyle: false,
            changeButtonStyleInc: false,
            changeButtonStyleReset: true,
        });
    };

    render() {

        const changeNumberClass = this.state.changeNumberStyle ? 'numberFive' : 'number';
        const changeButtonClassInc = this.state.changeButtonStyleInc ? 'buttonDisabled' : null;
        const changeButtonClassReset = this.state.changeButtonStyleReset ? 'buttonDisabled' : null;

        return (
            <div className={'app'}>
                <div className={'container'}>
                    <div className={changeNumberClass}>
                        <span>{this.state.counter}</span>
                    </div>
                    <div className={'buttons'}>
                        <button onClick={this.doIncrement}
                                className={`incButton ${changeButtonClassInc}`}
                                disabled={this.state.classToggleInc}>inc
                        </button>
                        <button
                            className={`resetButton ${changeButtonClassReset}`}
                            disabled={this.state.classToggleReset}
                            onClick={this.doReset}>reset
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

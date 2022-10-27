import React from "react";

export default class DateLocal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            options: {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long',
                timezone: 'UTC',
            },
        };
    };

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    };

    componentWillUnmount() {
        clearInterval(this.timerID);
    };

    tick() {
        this.setState({
            date: new Date()
        });
    };

    render() {
        return (
            <div className='DateLocal' title='Текущая дата'>
                {'Сегодня -> '+' '+ this.state.date.toLocaleTimeString("ua", this.state.options)}
            </div>
        )
    }
}
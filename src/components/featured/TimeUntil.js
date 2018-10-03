import React, { Component } from 'react';

import Slide from 'react-reveal/Slide';

class TimeUntil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'Dec, 16, 2018',
            countdown: [0, 0, 0, 0]
        };
    }

    getTimeUntil = (deadline) => {
        const time = Date.parse(deadline) - Date.parse(new Date());
        if (time < 0) {
            
        } else {
            const seconds = Math.floor((time/1000)%60);
            const minutes = Math.floor((time/1000/60)%60);
            const hours = Math.floor((time/(1000*60*60))%24);
            const days = Math.floor(time/(1000*60*60*24));

            this.setState({
                countdown: [days, hours, minutes, seconds]
            });
        }
    }

    componentDidMount(){
        setInterval(() => this.getTimeUntil(this.state.deadline), 1000);
    }

    render() {
        const { countdown } = this.state;
    
        const labels = ['days', 'hr', 'min', 'sec'];
        const countdown_items = countdown.map((val, idx) => {
            return (
                <div className='countdown_item'>
                    <div className='countdown_time'>{val}</div>
                    <div className='countdown_tag'>{labels[idx]}</div>
                </div>
            )
        })
        return (
            <Slide left delay={1000}>
                <div className='countdown_wrapper'>
                    <div className='countdown_top'>
                        Event starts in
                    </div>
                    <div className='countdown_bottom'>
                        {countdown_items}
                    </div>
                </div>
            </Slide>
        );
    }
}

export default TimeUntil;
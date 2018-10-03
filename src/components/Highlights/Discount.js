import React, { Component } from 'react';

import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utils/MyButton';

class Discount extends Component {
    state = {
        discountStart: 0,
        discountEnd: 30
    }

    porcentage = () => {
        const { discountStart, discountEnd } = this.state;
        if (discountStart < discountEnd) {
            this.setState({
                discountStart: discountStart + 1
            })
        }
    }

    componentDidUpdate(){
        setTimeout(() => {
            this.porcentage();
        }, 30)
    }



    render() {
        const { discountStart } = this.state;
        return (
            <div className='center_wrapper'>
                <div className='discount_wrapper'>
                    <Fade
                        onReveal={() => this.porcentage()}
                    >
                        <div className='discount_porcentage'>
                            <span>{discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                    <Slide right>
                        <div className='discount_description'>
                            <h3>Purchase tickets before 20th JUNE</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.</p>
                            <MyButton
                                text='Puchase Tickets'
                                bck= '#ffa800'
                                color='#fff'
                                link='http://google.com'
                            />
                        </div>
                    </Slide>
                    
                </div>
            </div>
        );
    }
}

export default Discount;
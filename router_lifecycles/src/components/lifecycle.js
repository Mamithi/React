import React, {PureComponent} from 'react';

class Lifecycle extends PureComponent {
    // 1.  Get default props

    // 2. Set default state
    state = {
        title:'Life Cycles'
    }

    // // 5. After jsx
    // componentDidMount() {
    //     console.log('5. After jsx')
    //     document.querySelector('h3').style.color='red';
    // }
    // // 3. Before render
    // componentWillMount() {
    //     console.log('3. Before render');
    //     // document.querySelector('h3').style.color='red';

    // }

    // componentWillUpdate() {
    //     console.log('Before update')
    // }

    // componentDidUpdate() {
    //     console.log('After update')
    // }

    // shouldComponentUpdate(nextProps, nextState) {

    //     if( nextState.title === this.state.title ){
    //         return false;
    //     }

    //     return true;
    // }

    // componentWillReceiveProps() {
    //     console.log('Before Receive props')
    // }

    // componentWillUnmount() {
    //     console.log('Unmount')
    // }

    // 4 . Render jsx
    render() {
        console.log('RENDER')
        return (
            <div>
                <h3>{this.state.title}</h3>
                <div onClick={
                    () => this.setState({
                         title: 'Something else'
                        })  
                }>Click me</div>
              
            </div>
        )
    }

}

export default Lifecycle;
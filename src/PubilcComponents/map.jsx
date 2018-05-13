import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'react-amap';

export const Map_default = (props) => {
    return (
        <div style={{ width: "100%", height: 372 }}>
            <Map amapkey={"3f20764a4b3545292bb4d4a940799dd4"} />
        </div>
    )
}

export const Map_plugins = (props) => {
    const plugins = [
        'MapType',
        'Scale',
        'OverView',
        'ControlBar', // v1.1.0 新增
        {
            name: 'ToolBar',
            options: {
                visible: true,  // 不设置该属性默认就是 true
                onCreated(ins) {
                    console.log(ins);
                },
            },
        }
    ]
    return <div style={{ width: '100%', height: 372 }}>
        <Map amapkey={"3f20764a4b3545292bb4d4a940799dd4"}
            plugins={plugins}
        />
    </div>
}

class Map_even extends Component {
    constructor() {
        super();
        this.state = {
            center: { longitude: 115, latitude: 30 }
        };
    }
    changeCenter() {
        this.setState({
            center: {
                longitude: 115 + Math.random() * 10,
                latitude: 30 + Math.random() * 10,
            }
        });
    }
    render() {
        return <div>
            <div style={{ width: '100%', height: '360px' }}>
                <Map center={this.state.center} />
            </div>
            <button onClick={() => { this.changeCenter() }}>Random Change Center</button>
        </div>
    }
}

export default Map_even;




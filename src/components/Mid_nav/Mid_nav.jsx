import React, { Component, cloneElement } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Form, Icon, message, Carousel, Input, Button, Checkbox } from 'antd';
const { Header, Content, Footer } = Layout;
import "./Mid_nav.scss";

class Mid_nav extends Component {
    render() {
        return (
                    <Header style={{ background: "#ccc", padding: 0, height: 90, lineHeight: 0, position: "relative" }}>
                        {/* <img  alt=""/> */}
                        <ul className="nav_middle">
                            <li><h3><Link to="/home">首页</Link></h3></li>
                            <li><h3><Link to="/home/two">智能硬件</Link></h3></li>
                            <li><h3><Link to="/home/three">数据资产</Link></h3></li>
                            <li><h3><Link to="/home/four">APP下载</Link></h3></li>
                            <li><h3><Link to="/">关于我们</Link></h3></li>
                        </ul>
                    </Header>
        )
    }
}

// export const login = ({ value, onIncrement, onDecrement }) => (
//     <div className="aaa">
//       <h1>{value}</h1>
//       <button onClick={onIncrement}>+</button>
//       <button onClick={onDecrement}>-</button>
//     </div>
//   )

// export const  a = "1";
// export default Login;
export default Mid_nav

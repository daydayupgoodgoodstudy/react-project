import React, { Component, cloneElement } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Form, Icon, message, Carousel, Input, Button, Checkbox } from 'antd';
const { Header, Content, Footer } = Layout;
import "./Foot_info";

class Foot_info extends Component {
    render() {
        return (
            <Footer className="footer_last">
                        <h6>©睦合达版权所有，并保留所有ICP备案证书号:京ICP备14047970号</h6>
                        <div className="footer_title">
                            <div className="footer_title_box">
                                <div className="footer_icon">
                                    <Icon type="mail" style={{ fontSize: 30, marginRight: 5, color: '#08c' }} />
                                </div>
                                <ul>
                                    <li>顶顶顶顶</li>
                                    <li>顶顶顶顶</li>
                                </ul>
                            </div>
                            <div className="footer_title_box">
                                <div className="footer_icon">
                                    <Icon type="mail" style={{ fontSize: 30, marginRight: 5, color: '#08c' }} />
                                </div>
                                <ul>
                                    <li>顶顶顶顶</li>
                                    <li>顶顶顶顶</li>
                                </ul>
                            </div>
                            <div className="footer_title_box">
                                <div className="footer_icon">
                                    <Icon type="mail" style={{ fontSize: 30, marginRight: 5, color: '#08c' }} />
                                </div>
                                <ul>
                                    <li>顶顶顶顶</li>
                                    <li>顶顶顶顶</li>
                                </ul>
                            </div>
                        </div>
                    </Footer>
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
export default Foot_info

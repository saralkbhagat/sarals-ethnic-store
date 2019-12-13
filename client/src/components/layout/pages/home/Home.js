import React, { Component } from 'react'
import { connect } from 'react-redux';
import './Home.css';
class Home extends Component {
    componentDidMount() {
        if (this.props.auth.isAuthenticated &&
            this.props.auth.user.isAdmin &&
            this.props.auth.user.role === 'admin') {
            this.props.history.push("/dashboard");
        }
    }
    render() {
        return (
            <div className='home-container'>
                <section id="showcase" className="grid">
                    <div className="bg-image"></div>
                    <div className="content-wrap">
                        <h1>Welcome to Saral's Ethnic Store</h1>
                        <p>Authentic indian Ethnic Wears</p>
                        <a href="#section-b" className="btn">Read More</a>
                    </div>
                </section>

                <main id="main">

                    <section id="section-a" className="grid">
                        <div className="content-wrap">
                            <h2 className="content-title">Saral's Ethnic - Clothing Store </h2>
                            <div className="content-text">
                                <p>We think about the convenience of your choice. Our products are supplied with star rating that should help hesitant buyers to take a decision.</p>
                            </div>
                        </div>
                    </section>

                    <section id="section-b" className="grid">
                        <ul>
                            <li>
                                <div className="card">
                                    <img className="img-home" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7432057/2018/9/19/3e816f15-5fe5-4cdc-b239-4f4ee8673e811537337776056-India-3011537337775771-1.jpg" alt="" />
                                    <div className="card-content">
                                        <h3 className="card-title">Kurta</h3>
                                        <p>A Kurta is a loose shirt that normally features long sleeves and a buttoned placket. The length is normally upto the knees of the wearer. The material and styling depend on the occasion (formal or casual) and can be either cotton, silk or brocade with embroidered detailing.</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="card">
                                    <img className="img-home" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2102195/2018/11/21/9d3197f0-2b12-4050-bfaa-d75560fed48d1542777790820-Vishudh-Women-Teal-Blue-Printed-A-Line-Kurta-9661542777790645-1.jpg" alt="" />
                                    <div className="card-content">
                                        <h3 className="card-title">Kurti</h3>
                                        <p>A Kurti refers to a shorter length version of a kurta that usually finishes at the hips. Kurti is also be used to refer to tunics for women as opposed to Kurtas that refer to tunics for men.</p>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </section>

                    <section id="section-d" className="grid">
                        <div className="box">
                            <h2 className="content-title">Contact Us</h2>
                            <p>1500 SW 12th Ave Apt 501 Portland OR 97201</p>
                            <p>bhagat@pdx.edu</p>
                        </div>
                        <div className="box">
                            <h2 className="content-title">About Our Company</h2>
                            <p>Our clothing store is more than just another average online retailer. We sell not only top quality products, but give our customers a positive online shopping experience.</p>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps)(Home);

import React from 'react';
import './Login.css';

export default function Loginbox() {
    return (
        <>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/Images/1.jpg" className="d-block w-50" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/Images/2.jpg" className="d-block w-50" alt="..." />
                    </div>
                </div>
            </div>

            <div class="outer-container">
                <div className="login-container">
                    <div className="login-box">
                        <h2>Consumer Login</h2>
                        <form>
                            <div className="form-group">
                                <input type="text" id="gstin" name="gstin" placeholder="GSTIN No." required />
                            </div>
                            <div className="form-group">
                                <input type="password" id="password" name="password" placeholder="Password" required />
                            </div>
                            <button type="submit">Login</button>
                            <br />
                            <div className="my-2">
                                <a href="/register">Sign up as a Consumer</a>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}

// page.js
import './globals.css';
import { connectDB } from "@/util/database.js";

export default function MainPage() {
    return (
            <div className="slogan">
                <div className="ellipse"></div>
                <p>Discover APAC's Innovators: Your Gateway to the Region's Startups</p>
                <div className='explain'>
                    <p>This website aims to provide a comprehensive list of innovative startups using the Next.js framework. Our objective is to offer a platform where users can discover and learn about startups, their mission, and their contributions to the tech world.</p>
                    <p>Feel free to browse our directory and discover some of the most promising startups!</p>
                </div>

                {/* Email form */}
                <div className="email-form">
                    <input type="email" placeholder="Email address" className="email-input" />
                    <button className="request-button">Request a free trial</button>
                </div>
            </div>
    );
}

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { trackEvent } from "../../utils/analytics"
import { analyticsLocations } from "../../utils/constants"
import "./reachout.scss";

export default function Reachout() {
    const form = useRef();
    const [status, setStatus] = useState("");

    const [formData, setformData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData({
            ...formData,
            [name]: value
        })
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get("name").trim();
        const email = formData.get("email").trim();
        const subject = formData.get("subject").trim();
        const message = formData.get("message").trim();

        if (!name || !email || !subject || !message) {
            alert("Please fill out all the fields correctly.");
            return;
        }
        trackEvent(`reachout_form_submit_initiate`, {
            location: analyticsLocations.reachout
        })
        const userEmail =
          form.current?.elements?.email?.value ||
          form.current?.querySelector('input[name="email"]')?.value ||
          "";

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
            (result) => {
                console.log(result.text);
                setStatus(`✅ Message sent successfully! An acknowledgement will be sent to ${userEmail}`);
                form.current.reset();
                setformData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                })   
                trackEvent(`reachout_form_submit_success`, {
                    location: analyticsLocations.reachout
                })
            },
            (error) => {
                console.log(error.text);
                setStatus("❌ Failed to send message. Try again later.");
                trackEvent(`reachout_form_submit_failure`, {
                    location: analyticsLocations.reachout
                })
            }
        );
    };

    return(
        <>
            <div className="page__reachout">
                <h1 className="page__reachout-title">
                    <span className="page__reachout-title--primary">LET'S WORK </span>
                    <span className="page__reachout-title--secondary">TOGETHER</span>
                </h1>
                <p className="page__reachout-subtitle">
                    Whether you're interested in working together on a new project, want to query about my services, or just want to say hello, I'd love to hear from you.
                </p>
                <p className="page__reachout-subtitle">
                    Kindly leave me a message, I will get back to you at the earliest.
                </p>
                <form ref={form} onSubmit={handleSubmit}>
                    <div className="reachout-form">
                        <div className="form-p2">
                            <p htmlFor="name">Name</p>
                                <input 
                                    placeholder="Your Name"
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                        </div>
                        <div className="form-p2">
                            <p htmlFor="email">Email</p>
                                <input
                                    placeholder="Your Email Id"
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                        </div>
                        <div className="form-p2">
                            <p htmlFor="message">Subject</p>
                            <input 
                                placeholder="Subject"
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-p2">
                            <p htmlFor="message">Message</p>
                            <textarea 
                                placeholder="Message"
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
                {status && <p className="status">{status}</p>}
            </div>
        </>
    )
}
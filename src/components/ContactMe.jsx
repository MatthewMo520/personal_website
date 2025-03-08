import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaPhone, FaLinkedin, FaFileDownload } from 'react-icons/fa';

function ContactMe() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailParams = {
            from_name: 'Matthew Mo',
            to_name: formData.name || 'No name provided',
            to_email: formData.email || 'no-reply@example.com',
            from_email: 'matthew.mo520@gmail.com',
            message: formData.message || 'No message provided',
        };

        emailjs.send('service_08ebulw', 'template_lgvtvr9', emailParams, 'nSJ063WJqSfxk3zDV')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                });
            })
            .catch((error) => {
                console.error('FAILED...', error);
                alert('Failed to send message. Please try again later.');
            });
    };

    return (
        <div className="contact-me-section p-8 bg-white rounded-lg flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
            <div className="w-full md:w-1/2 p-8 bg-gray-100 rounded-lg shadow-md">
                <p className="text-gray-600 mb-6">Feel free to reach out to me for any inquiries or collaboration opportunities. You can contact me via the following methods:</p>
                <ul className="mb-6 space-y-4">
                    <li className="flex items-center">
                        <FaEnvelope className="text-gray-700 mr-2" />
                        <span className="font-semibold text-gray-700">Email:</span> mzmo@uwaterloo.ca
                    </li>
                    <li className="flex items-center">
                        <FaPhone className="text-gray-700 mr-2" />
                        <span className="font-semibold text-gray-700">Phone:</span> (437) 982-6562
                    </li>
                    <li className="flex items-center">
                        <FaLinkedin className="text-gray-700 mr-2" />
                        <span className="font-semibold text-gray-700">LinkedIn:</span>
                        <button
                            onClick={() => window.open('https://www.linkedin.com/in/matthew-mo520', '_blank')}
                            className="ml-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                        >
                            Visit Profile
                        </button>
                    </li>
                </ul>
                <a href="/resume.pdf" className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 flex items-center">
                    <FaFileDownload className="mr-2" /> Download Resume
                </a>
            </div>
            <div className="w-full md:w-1/2 p-8 bg-gray-100 rounded-lg shadow-md">
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Your Email"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            rows="4"
                            placeholder="Your Message"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactMe;
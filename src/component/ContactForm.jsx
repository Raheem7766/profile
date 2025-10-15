import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaCheck } from "react-icons/fa"

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectType: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', projectType: '', message: '' });
        }, 3000);
    };

    if (isSubmitted) {
        return (
            <div className='min-h-screen flex items-center justify-center'>
                <div className='w-[90%] max-w-[500px] bg-gradient-to-r from-[#25104a] via-[#2b0b3a] to-[#483670] rounded-[20px] p-8 border-2 border-[#7127BA] text-center'>
                    <div className='w-16 h-16 bg-[#7127BA] rounded-full flex items-center justify-center mx-auto mb-6'>
                        <FaCheck size={32} className='text-white' />
                    </div>
                    <h3 className='text-[24px] font-semibold text-white mb-4'>Message Sent!</h3>
                    <p className='text-white text-[16px] opacity-80'>
                        Thank you for reaching out. I'll get back to you within 24 hours.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className='min-h-screen py-12'>
            <div className='w-[90%] max-w-[600px] mx-auto'>
             

                {/* Contact Form */}
                <div className='bg-gradient-to-r from-[#25104a] via-[#2b0b3a] to-[#483670] rounded-[20px] p-8 border-2 border-[#7127BA]'>
                    <h1 className='text-[25px] md:text-[32px] font-bold text-white mb-2 text-center'>Book Appointment</h1>
                    <p className='text-white text-[16px] opacity-80 text-center mb-8'>
                        Let's discuss your project and create something amazing together
                    </p>
                    
                    <form onSubmit={handleSubmit} className='space-y-6'>
                        <div>
                            <label className='block text-white text-[16px] font-medium mb-3'>Name *</label>
                            <input 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className='w-full p-4 rounded-[16px] bg-[#1a0b2e] border-2 border-[#7127BA] text-white placeholder-gray-400 focus:border-[#9857D3] focus:outline-none transition-colors text-[16px]'
                                placeholder='Your Full Name'
                            />
                        </div>
                        
                        <div>
                            <label className='block text-white text-[16px] font-medium mb-3'>Email *</label>
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className='w-full p-4 rounded-[16px] bg-[#1a0b2e] border-2 border-[#7127BA] text-white placeholder-gray-400 focus:border-[#9857D3] focus:outline-none transition-colors text-[16px]'
                                placeholder='your.email@example.com'
                            />
                        </div>
                        
                        <div>
                            <label className='block text-white text-[16px] font-medium mb-3'>Project Type *</label>
                            <select 
                                name="projectType"
                                value={formData.projectType}
                                onChange={handleChange}
                                required
                                className='w-full p-4 rounded-[16px] bg-[#1a0b2e] border-2 border-[#7127BA] text-white focus:border-[#9857D3] focus:outline-none transition-colors text-[16px]'
                            >
                                <option value="">Select Project Type</option>
                                <option value="web-design">Web Development</option>
                                <option value="ui-ux">Web 3</option>
                                <option value="frontend">Crypto Blockchain Development</option>
                                <option value="fullstack">Mobile App Development Flutter</option>
                            </select>
                        </div>
                        
                        <div>
                            <label className='block text-white text-[16px] font-medium mb-3'>Project Details *</label>
                            <textarea 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={6}
                                className='w-full p-4 rounded-[16px] bg-[#1a0b2e] border-2 border-[#7127BA] text-white placeholder-gray-400 focus:border-[#9857D3] focus:outline-none transition-colors resize-none text-[16px]'
                                placeholder='Tell me about your project, timeline, budget, and any specific requirements...'
                            ></textarea>
                        </div>
                        
                        <div className='pt-4'>
                            <button 
                                type="submit"
                                className='w-full p-4 rounded-[16px] bg-gradient-to-r from-[#7127BA] to-[#9857D3] text-white font-bold text-[18px] hover:from-[#9857D3] hover:to-[#7127BA] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#7127BA]/30'
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

                {/* Contact Info */}
                <div className='mt-8 text-center'>
                    <p className='text-white text-[16px] opacity-80 mb-4'>
                        Or reach out directly at:
                    </p>
                    <p className='text-[#7127BA] text-[18px] font-medium'>
                        ibrahimmemon930@gmail.com
                    </p>
                </div>
            </div>
        </div>
    );
}

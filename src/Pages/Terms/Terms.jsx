import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='w-[80%] mx-auto my-[130px]'>
            <h1 className='text-primary text-4xl mb-10'>TERMS AND CONDITIONS</h1>
            <h3 className='text-2xl text-gray-900 mb-5'>Welcome to our website. By logging into our website, you agree to be bound by the following terms and conditions:</h3>
            <ol>
                <li className='mb-5 text-gray-600'>Access to the Website: We grant you a non-exclusive, non-transferable, revocable license to access and use our website, subject to these terms and conditions.</li>
                <li className='mb-5 text-gray-600'>
                Your Responsibilities: You agree to use our website only for lawful purposes, and in a way that does not infringe upon the rights of others, or restrict or inhibit anyone else’s use and enjoyment of the website.
                </li>
                <li className='mb-5 text-gray-600'>
                User Account: In order to access certain features of our website, you may need to create a user account. You agree to provide accurate, complete, and up-to-date information in connection with your user account, and to promptly update such information as necessary.
                </li>
                <li className='mb-5 text-gray-600'>
                Security: You are responsible for maintaining the confidentiality of your user account login information, including your username and password. You agree to notify us immediately if you become aware of any unauthorized use of your user account.
                </li>
                <li className='mb-5 text-gray-600'>
                Intellectual Property: All content on our website, including text, graphics, logos, images, and software, is the property of our company or its licensors and is protected by copyright and other intellectual property laws. You may not copy, modify, distribute, or use any content on our website without our prior written consent.
                </li>
                <li className='mb-5 text-gray-600'>
                Disclaimer of Warranties: We make no representations or warranties of any kind, express or implied, regarding the operation of our website or the information, content, materials, or products included on our website. You agree that your use of our website is at your sole risk.
                </li>
                <li className='mb-5 text-gray-600'>
                Limitation of Liability: Our company will not be liable for any damages of any kind arising from the use of our website, including, but not limited to, direct, indirect, incidental, punitive, and consequential damages.
                </li>
                <li className='mb-5 text-gray-600'>
                Indemnification: You agree to indemnify and hold our company, its affiliates, officers, directors, agents, and employees harmless from any claim or demand, including reasonable attorneys’ fees, made by any third party due to or arising out of your use of our website, your violation of these terms and conditions, or your violation of any rights of another.
                </li>
                <li className='mb-5 text-gray-600'>
                Modification: We reserve the right to modify these terms and conditions at any time without prior notice. Your continued use of our website after any such modification constitutes your acceptance of the modified terms and conditions.
                </li>
                <li className='mb-5 text-gray-600'>
                Governing Law: These terms and conditions will be governed by and construed in accordance with the laws of the jurisdiction in which our company is located, without giving effect to any principles of conflicts of law.
                </li>
                <li className='mb-5 text-gray-600'>
                If you do not agree to these terms and conditions, please do not log into our website. If you have any questions or concerns regarding these terms and conditions, please contact us.<Link className='text-primary' to='/singUp'> Back to Register page</Link>
                </li>
            </ol>
        </div>
    );
};

export default Terms;
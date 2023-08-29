import React from 'react'

const Footer = () => {
    return(
        <div className='bg-blue p-12 flex flex-row justify-evenly'>
           <div>
                <h3 className='text-green-50 font-black mb-2'>Products & Solutions</h3>
                <ul>
                    <li className='text-green-50'>Automobile Insurance</li>
                    <li className='text-green-50'>Life Insurance</li>
                    <li className='text-green-50'>Vacation Insurance</li>
                    <li className='text-green-50'>Business Insurance</li>
                    <li className='text-green-50'>Child's Education</li>
                </ul>
            </div>
            <div>
                <h3 className='text-green-50 font-black mb-2'>Self Service</h3>
                <ul>
                    <li className='text-green-50'>Manage your Policy</li>
                    <li className='text-green-50'>Make a Payment</li>
                    <li className='text-green-50'>Imsurance Claims</li>
                    <li className='text-green-50'>Check Account Statement</li>
                </ul>
            </div>
            <div>
                <h3 className='text-green-50 font-black mb-2'>Connect With Us</h3>
                <ul>
                    <li className='text-green-50'>Facebook</li>
                    <li className='text-green-50'>Instagram</li>
                    <li className='text-green-50'>LinkedIn</li>
                    <li className='text-green-50'>Twitter</li>
                </ul>
            </div>
            <div>
                <h3 className='text-green-50 font-black mb-2'>Popular Links</h3>
                <ul>
                    <li className='text-green-50'>Personal Account</li>
                    <li className='text-green-50'>Complaints</li>
                    <li className='text-green-50'>Financials</li>
                    <li className='text-green-50'>Who we are?</li>
                    <li className='text-green-50'>FAQ</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;
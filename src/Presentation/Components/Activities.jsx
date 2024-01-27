import React from 'react'

export default function Activities() {
    const activities = [
        {
            title: "Infothon",
            place: "Vidyavardhaka College of Engineering, Mysore",
            content: 'Joined the Infothon hackathon at Vidyavardhaka College of Engineering, contributing my skills and enthusiasm. The experience fueled my dedication to learning and collaborative problem-solving.'
            , date: 'Jan 20, 2024'
        },
        {
            title: "Roolothon",
            place: "Srinivas institute of Technology, Valachil Mangluru",
            content: "Achieved 2nd Prize at Roolothon hackathon, demonstrating a passion for creative problem-solving. Excited to bring this mindset to collaborative projects for mutual success!"
            , date: 'Dec 21, 2023 '
        },
        {
            title: "CodeBlaze Hackathon",
            place: "Sahyadri college of Engineering, Mangaluru",
            content: "Claimed the First Prize at CodeBlaze Hackathon in Sahyadri College, emphasizing top-tier coding skills and innovative problem-solving"
            , date: 'Dec 09, 2023'
        },
        {
            title: "Girl Geek Hackathon",
            place: "National Institute of Technology, Karnataka",
            content: "Participated in the Girl Geek Hackathon at NITK Surathkal, contributing to a vibrant coding community. While not clinching an award, the experience enriched my skills and passion for collaborative problem-solving."
            , date: 'Nov 29, 2023'
        }
    ];
    return (
        <section id='activites'>

            <div className='w-10/12 mx-auto   '>

                <h3 className='text-3xl font-bold text-center md:pt-5 mb-5'>Activities</h3>
                {activities.map((item, index) => (
                    <div className='shadow p-3 rounded-lg my-3 hover:shadow-lg transition duration-300 z-20' key={index}>
                        <h3 className='text-3xl mb-2 font-extrabold tracking-tight  '>{item.title}</h3>
                        <p className='text-sm py-1'>{ item.date}</p>
                        <p className='mb-3 text-gray-500'>{item.content}</p>
                        <p className='text-red-600'>{item.place}</p>
                    </div>
                ))}
            </div>

        </section>
    )
}

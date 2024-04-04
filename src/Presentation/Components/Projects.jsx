import React from 'react'
import IrisProject from '../../assets/Projects/iris.png';
import MechExcel from '../../assets/Projects/mechexcel.png';
import portfolio from '../../assets/Projects/portfolio.png';
export default function Projects() {
    const projects = [
        {
            title: "MechExcel",
            link: 'mechexcel.in',
            screenshot: MechExcel,
            techstacks: [
                'React JS',
            ]
        },
        {
            title: "Portfolio", link: 'https://adarshsavalagi.github.io/portfolio/',
            screenshot: portfolio,
            techstacks: [
                'React JS',
            ]
        },
        {
            title: "Aldebrans Iris", link: 'https://aldebransiris.online/',
            screenshot: IrisProject,
            techstacks: [
                'React JS',
            ]
        },
    ];
    return (
        <section id='work'>

                <div className='w-10/12 mx-auto text-center z-40 '>

                    <h3 className='text-3xl font-bold text-center md:pt-5 mb-5'>Projects</h3>
                    <div className=' mx-auto mb-5 grid grid-cols-1 md:grid-cols-3 gap-4'>
                        {projects.map((item, index) => (
                            <ProjectCard key={index} name={item.title} image={item.screenshot} techstacks={item.techstacks} link={item.link} />
                        ))}
                    </div>
                    <button className="btn p-3 px-5 border mx-auto rounded-lg mb-5 bg-white">view more...</button>
                </div>
        </section>
    )
}


function ProjectCard(props) {
    return (
        <div className='shadow text-start rounded-lg bg-white  z-40'>
            <img src={props.image} alt={props.name} className='rounded-lg ' />
            {props.techstacks.map((item, index) => (
                <kbd key={index} className=" px-2 ml-2 py-1.5 text-xs font-semibold text-gray-800  border border-gray-200 rounded-lg ">{item}</kbd>
            ))}
            <div className='flex flex-row justify-between'>
                <h3 className='text-xl p-3 font-bold'>{props.name}</h3>
              <button className='p-3 cursor-pointer bg-white'>  <a className='' href={props.link} target='_blank'>View Project</a></button>
            </div>
        </div>
    )
}

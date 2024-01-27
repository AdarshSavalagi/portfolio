import React from 'react'

// importing techstacks logos
import flutterIcon from '../../assets/techstacks/flutterio-icon.svg';
import djanagoIcon from '../../assets/techstacks/django.svg';
import reactIcon from '../../assets/techstacks/react-2.svg';
import dockerIcon from '../../assets/techstacks/docker.svg';
import kubernetesIcon from '../../assets/techstacks/kubernetes.svg';
import mongoIcon from '../../assets/techstacks/mongo.svg';
import fastApiIcon from '../../assets/techstacks/fastapi.svg';
import tailwindIcon from '../../assets/techstacks/tailwind.svg';
import gcpIcon from '../../assets/techstacks/gcp.svg';
import angularIcon from '../../assets/techstacks/angular-icon.svg';
import postgreIcon from '../../assets/techstacks/postgresql-icon.svg';
import restIcon from '../../assets/techstacks/Django REST.svg';
export default function Container2() {

  const techstack = [
    {
      name: 'Flutter',
      logo: flutterIcon
    },
    {
      name: 'Django',
      logo: djanagoIcon
    },
    {
      name: 'React',
      logo:reactIcon
    },
    {
      name: 'Django REST',
      logo: restIcon
    },
    {
      name: 'Docker',
      logo: dockerIcon
    },
    {
      name: 'Google Cloud ',
      logo: gcpIcon
    },
    {
      name: 'Kubernetes',
      logo: kubernetesIcon
    },
    {
      name: 'MongoDB',
      logo: mongoIcon
    },
    {
      name: 'FastAPI',
      logo: fastApiIcon
    },
    
    {
      name: 'Tailwind CSS',
      logo: tailwindIcon
    },
    {
      name: 'Angular JS',
      logo: angularIcon
    },
    {
      name: 'PostgreSQL',
      logo: postgreIcon
    },
    
  ];
  return (
    <>
      <h3 className='text-3xl font-bold text-center mb-5'>Experience</h3>
      <div className='w-9/12 text-center grid grid-cols-2 md:grid-cols-4 gap-4 mx-auto'>

        {techstack.map((item,index) => (
          <div key={index} className="bg-white p-4  ">
           <img src={item.logo} alt={item.name}  className='mx-auto'/>
           <br />
          <p className=''>{item.name}</p>
          </div>
        ))}
      </div>
    </>
  )
}

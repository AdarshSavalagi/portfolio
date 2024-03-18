
// importing techstacks logos
import flutterIcon from '../assets/techstacks/flutterio-icon.svg';
import djanagoIcon from '../assets/techstacks/django.svg';
import reactIcon from '../assets/techstacks/react-2.svg';
import dockerIcon from '../assets/techstacks/docker.svg';
import kubernetesIcon from '../assets/techstacks/kubernetes.svg';
import mongoIcon from '../assets/techstacks/mongo.svg';
import fastApiIcon from '../assets/techstacks/fastapi.svg';
import tailwindIcon from '../assets/techstacks/tailwind.svg';
import gcpIcon from '../assets/techstacks/gcp.svg';
import angularIcon from '../assets/techstacks/angular-icon.svg';
import postgreIcon from '../assets/techstacks/postgresql-icon.svg';
import restIcon from '../assets/techstacks/Django REST.svg';
import nginxIcon from '../assets/techstacks/nginx-svgrepo-com.svg';
import firebaseIcon from '../assets/techstacks/firebase.svg';
class Techstack {
    constructor(name, image) {
        this.name = name,
            this.image = image
    }
}
const ReactTS =new Techstack('React', reactIcon);
const FlutterTS =new Techstack('Flutter', flutterIcon);
const DjangoTS = new Techstack('Django', djanagoIcon);
const RestTS =new  Techstack('Django REST', restIcon);
const DockerTS = new Techstack('Docker', dockerIcon);
const GCPTS = new Techstack('Google Cloud', gcpIcon);
const KubernetesTS =new  Techstack('Kubernetes', kubernetesIcon);
const MongoTS = new Techstack('MongoDB', mongoIcon);
const FastapiTS = new Techstack('FastAPI', fastApiIcon);
const TailwindTS = new Techstack('Tailwind CSS', tailwindIcon);
const AngularTS = new Techstack('Angular JS', angularIcon);
const PostgreTS =  new Techstack('PostgreSQL', postgreIcon);
const NginxTs = new Techstack("Nginx",nginxIcon);
const FirebaseTs= new Techstack("Firebase",firebaseIcon);

export const techstacks = [
    FlutterTS, DjangoTS, ReactTS, RestTS, DockerTS, GCPTS, KubernetesTS, MongoTS, FastapiTS, TailwindTS, AngularTS, PostgreTS,NginxTs,FirebaseTs,
];
import Image from 'next/image';
import Link from 'next/link';

export default function Project(props) {
    
    return ( 
        <div>
         {/* image */}
         <Image 
         src={props.imageUrl}
         width={500}
         height={500}
         loading="lazy"
         alt="picture of one of JJWILLMIN's projects"/>

         {/* text container */}
         <div>
            <h2>{props.name}</h2>            
            <Link href={`/${props.link}`} key={props.id}><button>View Project</button></Link>
         </div>
        </div>
     )
}

 
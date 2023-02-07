import { useRouter } from "next/router";
import Image from "next/image";
import {
    aboutImage, image10, image11, image17, image18,
    image19, image20, image21, image25, image26, image27, image28, image29, image3,
    image6, image2, exocticImg1,
     exocticImg3, exocticImg4, exocticImg5,  exocticImg6,
    image7, image8, image9, exocticImg2, graImg, image5
} from "../components/Images";

// commit changes to git and upload to github repo and the end of the day


const Projectinfo = [
    {
        id: 1,
        name: 'portharcourt-gardens',
        title: 'PORT HARCOURT GARDENS EXOTIC ESTATE AT G. R. A. PORT HARCOURT',
        mainImage: image17,
        images: [
            aboutImage, image8, image18, graImg,
            image19, image20, image3, image21
        ]

    },
    {
        id: 2,
        name: 'new-bussa-rd',
        title: 'NEW BUSSA, NIGER STATE TOWNSHIP ROAD REHABILITATION',
        mainImage: image6,
        images: [
            image25, image26, image27, image28, image29
        ]

    },
    {
        id: 3,
        name: 'paradise-estate-gardens',
        title: 'PARADISE GARDEN ESTATE AT ELIOZU TOWN',
        mainImage: image7,
        images: [
            image9, image10, image11, image2, exocticImg1,
            exocticImg2, exocticImg3, exocticImg4, exocticImg5, 
            exocticImg6, image5 
            
        ]

    }
]

const Page = () => {

    const router = useRouter();
    const { id } = router.query;

    const project = Projectinfo.find(project => project.name === id);
    const images = project?.images;
    // if(images){
    //     console.log(images)
    // }
    return (
        <div >
            <div>
                <h1>{project?.title}</h1>
                <Image
                    src={project?.mainImage}
                    width={450}
                    height={400}
                />
            </div>
            {/* gallery */}
            <div>
                {images?.map(image => <Image
                    src={image}
                    width={500}
                    height={500}
                />
                )}
            </div>
        </div>
    )
}

export default Page;
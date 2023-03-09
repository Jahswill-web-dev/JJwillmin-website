import { useRouter } from "next/router";
import Image from "next/image";
import Header from '../components/Header';

// import buildUrl from "cloudinary-build-url";


const Projectinfo = [
    {
        id: 1,
        name: 'portharcourt-gardens',
        title: 'PORT HARCOURT GARDENS EXOTIC ESTATE AT G. R. A. PORT HARCOURT',
        mainImage: 'https://res.cloudinary.com/drpzv54qa/image/upload/v1677324251/J.%20J.%20WILLMIN%20Images/image-4_nyoj8m.png',
        images: [
            'https://res.cloudinary.com/drpzv54qa/image/upload/v1677495800/J.%20J.%20WILLMIN%20Images/about-image_cntrjy.png',
            'https://res.cloudinary.com/drpzv54qa/image/upload/v1677324250/J.%20J.%20WILLMIN%20Images/image-8_a2klv8.png',
            'https://res.cloudinary.com/drpzv54qa/image/upload/v1677324236/J.%20J.%20WILLMIN%20Images/image-18_neqwmb.png',
            'https://res.cloudinary.com/drpzv54qa/image/upload/v1677324251/J.%20J.%20WILLMIN%20Images/gra-img_aumcni.png',
            'https://res.cloudinary.com/drpzv54qa/image/upload/v1677324238/J.%20J.%20WILLMIN%20Images/image-19_ng9fcx.png',
            'https://res.cloudinary.com/drpzv54qa/image/upload/v1677324238/J.%20J.%20WILLMIN%20Images/image-20_vxqced.png',
            'https://res.cloudinary.com/drpzv54qa/image/upload/v1677324252/J.%20J.%20WILLMIN%20Images/image-3_mccfyp.png',
            'https://res.cloudinary.com/drpzv54qa/image/upload/v1677324239/J.%20J.%20WILLMIN%20Images/image-21_l1pfcr.png'
        ]

    },
    {
        id: 2,
        name: 'new-bussa-rd',
        title: 'NEW BUSSA, NIGER STATE TOWNSHIP ROAD REHABILITATION',
        mainImage: 'https://res.cloudinary.com/drpzv54qa/image/upload/v1677324235/J.%20J.%20WILLMIN%20Images/image-6_ekqnbf.png',
        images: [
        'https://res.cloudinary.com/drpzv54qa/image/upload/v1677324242/J.%20J.%20WILLMIN%20Images/image-25_c6eajo.png',
        'https://res.cloudinary.com/drpzv54qa/image/upload/v1677324245/J.%20J.%20WILLMIN%20Images/image-26_wiwzvp.png', 
        'https://res.cloudinary.com/drpzv54qa/image/upload/v1677324244/J.%20J.%20WILLMIN%20Images/image-27_jlrsrv.png',
        'https://res.cloudinary.com/drpzv54qa/image/upload/v1678359292/J.%20J.%20WILLMIN%20Images/image-28_druoqu.png', 
        'https://res.cloudinary.com/drpzv54qa/image/upload/v1677324246/J.%20J.%20WILLMIN%20Images/image-29_x4kkxq.png'
        ]

    },
    {
        id: 3,
        name: 'paradise-estate-gardens',
        title: 'PARADISE GARDEN ESTATE AT ELIOZU TOWN',
        mainImage: 'https://res.cloudinary.com/drpzv54qa/image/upload/v1677324235/J.%20J.%20WILLMIN%20Images/image-7_kgmkjt.png',
        images: [
          'https://res.cloudinary.com/drpzv54qa/image/upload/v1677324250/J.%20J.%20WILLMIN%20Images/image-9_jmecgn.png', 
          'https://res.cloudinary.com/drpzv54qa/image/upload/v1677324244/J.%20J.%20WILLMIN%20Images/image-10_yp0gqz.png',
          'https://res.cloudinary.com/drpzv54qa/image/upload/v1677324236/J.%20J.%20WILLMIN%20Images/image-11_i5smbi.jpg', 
          'https://res.cloudinary.com/drpzv54qa/image/upload/v1677324249/J.%20J.%20WILLMIN%20Images/image-2_xigjjh.png',
          'https://res.cloudinary.com/drpzv54qa/image/upload/v1677324249/J.%20J.%20WILLMIN%20Images/exoctic-img1_nr37mr.png',
          'https://res.cloudinary.com/drpzv54qa/image/upload/v1677496182/J.%20J.%20WILLMIN%20Images/exImg2_fcbjkq.png',
          'https://res.cloudinary.com/drpzv54qa/image/upload/v1677324247/J.%20J.%20WILLMIN%20Images/exImg3_dbknz4.png', 
          'https://res.cloudinary.com/drpzv54qa/image/upload/v1677324248/J.%20J.%20WILLMIN%20Images/exImg4_xwa5bx.png', 
          'https://res.cloudinary.com/drpzv54qa/image/upload/v1677324248/J.%20J.%20WILLMIN%20Images/exImg5_qrxkpy.png',
          'https://res.cloudinary.com/drpzv54qa/image/upload/v1677324250/J.%20J.%20WILLMIN%20Images/exImg6_og5xea.png',
          'https://res.cloudinary.com/drpzv54qa/image/upload/v1677324248/J.%20J.%20WILLMIN%20Images/exImg5_qrxkpy.png'

        ]

    }
]

const Page = () => {
    // 
    const router = useRouter();
    const { id } = router.query;
    const project = Projectinfo.find(project => project.name === id);
    const images = project?.images;

    return (
        <>
            <Header />
            <div className="pt-[5rem] sm:pt-20 items-center text-primary">
                <div className="flex flex-col-reverse items-center justify-center sm:flex-row gap-[1rem] mx-auto">
                    <h1 className="text-2xl sm:text-3xl sm:w-[50%] text-center">{project?.title}</h1>
                    <Image
                        src={project?.mainImage}
                        width={450}
                        height={400}
                        class="sm:max-w-[50% ] sm:w-[50%] sm:p-[3rem]"
                    />
                </div>
                {/* gallery  */}
                {/* use chatgpt for css grid */}
                <div className="px-[2.5rem] text-primary flex flex-row flex-wrap">
                    {images?.map(image => <Image
                        src={image}
                        width={500}
                        height={500}
                        className="py-[1rem] px-5 "
                        style={{ display: 'grid', 'grid-template-columns': 'repeat(auto-fill,minmax(200px, 1fr))' }}
                    />
                    )}
                </div>
            </div>
        </>
    )
}

export default Page;
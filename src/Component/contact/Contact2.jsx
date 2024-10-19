import './contact2.css'; // Your CSS file for styling
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
// import { GlowingStarsBackgroundCard } from "../ui/glowing-stars"; // Adjust path if needed
// import { GlowingStarsBackgroundCard } from "../ui/glowing-stars"; // Adjust the path as necessary
import { GridBackgroundDemo } from "../ui/GridBackgroundDemo"
import { GlobeDemo } from '../ui/GlobeDemo';


const Contact2 = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset, // To reset the form after submission
    } = useForm();

    const date = new Date();
    const onSubmit = (data) => {
        const alldata = { ...data, date };
        console.log(alldata);

        axios.post('https://portfolio-pied-eight-66.vercel.app/contactus', alldata)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your contact information is saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    reset(); // Reset the form fields after submission
                }
            })
            .catch(error => {
                console.error("There was an error submitting the form!", error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "There was an error submitting your information!",
                });
            });
    };

    return (
        <section>
            <>
                <section className=''>
                    <div className='w-[90%] mx-auto banner pb-10 md:pb-20'>
                        <>
                            <GridBackgroundDemo header={'Contact Us'}>

                            </GridBackgroundDemo>
                           
                        </>
                        {/* <img data-aos="fade-left" data-aos-delay="500" className='mx-auto pt-5 pb-5 md:pb-16' src="https://sujob258549.github.io/silverhok/img/icon.png" alt="" /> */}
                        <section className="rounded-md" style={{ boxShadow: "1px 1px 10px" }}>
                            <div className="container px-6 py-6 lg:py-12 mx-auto">
                                <div className="lg:flex lg:items-center lg:-mx-6">
                                    <div className="lg:w-1/2 text-center lg:text-left">
                                       <GlobeDemo></GlobeDemo>
                                    </div>

                                    <div className="mt-8 lg:w-1/2 lg:mt-0 lg:mx-6">
                                        <div className='main-form'>
                                            <div className="main-card">
                                                <h4 className="title">Contact form</h4>
                                                <form onSubmit={handleSubmit(onSubmit)}>
                                                    <label htmlFor="name" className='flex justify-start text-white'>Name</label>
                                                    <label className="field">
                                                        <input
                                                            {...register('name', { required: true })}
                                                            placeholder="Enter Your Full name"
                                                            className="input-field"
                                                        />
                                                        {errors.name && <span className="text-red-500">This field is required</span>}
                                                    </label>

                                                    <label htmlFor="email" className='flex pt-5 justify-start text-white'>Email</label>
                                                    <label className="field">
                                                        <input
                                                            type="email"
                                                            {...register('email', { required: true })}
                                                            placeholder="Enter Your Email address"
                                                            className="input-field"
                                                        />
                                                        {errors.email && <span className="text-red-500">This field is required</span>}
                                                    </label>

                                                    <div className="w-full mt-6">
                                                        <label className="block mb-2 text-sm text-gray-600 text-left dark:text-gray-200">Message</label>
                                                        <textarea
                                                            {...register('message', { required: true })}
                                                            className="field w-full pb-16 text-white"
                                                            placeholder="Message"
                                                        ></textarea>
                                                        {errors.message && <span className="text-red-500">This field is required</span>}
                                                    </div>

                                                    <button type="submit" className="btn">
                                                        Send...
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </section>
            </>
        </section>
    );
};

export default Contact2;

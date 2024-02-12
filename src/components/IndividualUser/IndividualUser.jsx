import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const IndividualUser = () => {
  const singleUserDetails = useLoaderData();
  const { firstName, lastName, image, email, address, company } = singleUserDetails;

  useEffect(() => {
    document.title = `User | ${firstName}`;
  }, [firstName]);

  useEffect ( () => {
    AOS.init({duration: 2000})
}, [])

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl p-6 mt-12">
      <figure>
        <img
          src={image}
          alt="userImage"
          className="lg:w-full lg:h-full md:w-1/2"
          data-aos="fade-right"
        />
      </figure>
      <div data-aos="fade-left" className="card-body lg:ms-32 md:ms-20">
        <h2 className="card-title font-bold text-4xl mb-8">{firstName} {lastName}</h2>
        <h3 className="text-2xl font-medium text-gray-400"><span className="text-md font-medium text-gray-500">Email:</span> {email}</h3>
          <h3 className="text-2xl font-medium text-gray-400"><span className="text-md font-medium text-gray-500">Company:</span> {company.name}</h3>
          <h3 className="text-2xl font-medium text-gray-400"><span className="text-md font-medium text-gray-500">Address:</span> {address.address} , {address.city} {address.state}</h3>
      </div>
    </div>
  );
};

export default IndividualUser;

import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const UserCard = ({user}) => {
    const { id, firstName, lastName, email, image, address, company } = user;

    useEffect ( () => {
      AOS.init({duration: 2000})
  }, [])
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl w-1/2 h-3/2"
            data-aos="fade-down"
          />
        </figure>
        <div className="card-body items-center text-center">
          <Link to={`/${id}`} className="card-title font-bold text-xl">{firstName} {lastName}</Link>
          <h3 className="font-medium text-gray-400"><span className="text-md font-medium text-gray-500">Email:</span> {email}</h3>
          <h3 className="font-medium text-gray-400"><span className="text-md font-medium text-gray-500">Company:</span> {company.name}</h3>
          <h3 className="font-medium text-gray-400"><span className="text-md font-medium text-gray-500">Address:</span> {address.address} , {address.city} {address.state}</h3>
        </div>
      </div>
    );
};

export default UserCard;
import { useEffect, useState } from "react";
import UserCard from "../UserCard/UserCard";
import AOS from 'aos';
import 'aos/dist/aos.css';

const AllUsers = () => {
  const [people, setPeople] = useState([]);
  const [sortValue, setSortValue] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const jsonData = await response.json();
      setPeople(jsonData.users);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const sortBy = () => {
    if (sortValue === "name") {
      return people.sort((a, b) => a.firstName?.localeCompare(b.firstName));
      // setPeople(people)
    } else if (sortValue === "email") {
      return people.sort((a, b) => a.email?.localeCompare(b.email));
      // setPeople(people)
    } else if(sortValue === "age") {
      return people.sort((a, b) => a.age - b.age);
      // setPeople(people)
    } else {
      return people.sort((a, b) => a.id - b.id);
    }
  };

  useEffect ( () => {
    AOS.init({duration: 3000, mirror: true})
}, [])

  return (
    <div className="">
      <div className="flex justify-between">
        <div>
          <input
            className="border-2 border-cyan-600 lg:w-96 p-1"
            type="search"
            name=""
            id=""
            placeholder="Search by Username"
          />
          <button className="border-2 border-cyan-600 p-1 lg:ms-4 md:ms-4 mt-2 lg:mt-0 md:mt-0 font-bold px-3 hover:bg-black hover:text-cyan-600">Search</button>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-2 items-center">
          <h2 className="lg:me-2 md:me-2 text-xl font-bold lg:ms-0 md:ms-0 ms-8 me-4">Sort By</h2>
          <select
            className="border-2 border-cyan-600 lg:p-1 md:p-1 p-2"
            onChange={(e) => setSortValue(e.target.value)}
            name=""
            id=""
          >
            <option value="id">---</option>
            <option value="name">Name</option>
            <option value="email">Email</option>
            <option value="age">Age</option>
          </select>
        </div>
      </div>

      <div  data-aos="fade-up" data-aos-mirror="true" className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-6">
        {sortBy()?.map((item) => {
          return <UserCard key={item.id} user={item}></UserCard>;
        })}
      </div>
    </div>
  );
};

export default AllUsers;

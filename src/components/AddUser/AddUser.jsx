import { motion } from "framer-motion"

const AddUser = () => {

    const handleSubmit = () => {
        // rest of the code in backend
    }

  return (
    <div
      className=" 
      w-full text-black"
    >
      <div className="text-center mt-24">
        <h2 className="text-3xl  font-black text-[#130F49]">
          Submit User&apos;s Information
        </h2>
        <hr className="border-b-[3px] w-[250px] mt-1 border-cyan-600 mx-auto" />
      </div>

      <form
        className="card  shadow-2xl p-10 mx-auto text-base leading-6 space-y-6 sm:text-lg sm:leading-7 overflow-hidden mb-16 mt-8 bg-white"
        onSubmit={handleSubmit}
      >
        <div className="relative">
          <input
            name="firstName"
            type="text"
            className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            placeholder="Full Name"
            value=""
            required
          />

          <label
            htmlFor="firstName"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            First Name
          </label>
        </div>
        <div className="relative">
          <input
            name="lastName"
            type="text"
            className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            placeholder="Full Name"
            value=""
            required
          />

          <label
            htmlFor="lastName"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            Last Name
          </label>
        </div>
        <div className="relative">
          <input
            name="email"
            type="text"
            className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            placeholder="Full Name"
            value=""
            required
          />

          <label
            htmlFor="email"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            Email
          </label>
        </div>

        <div className="relative">
          <input
            name="companyName"
            type="email"
            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            placeholder="Email"
            value=""
            required
          />

          <label
            htmlFor="companyName"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            Company Name
          </label>
        </div>

        <div className="relative">
          <input
            name="address"
            type="text"
            className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            placeholder="address"
            required
          />

          <label
            htmlFor="address"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            Address
          </label>
        </div>

        <div className="relative">
          <input
            name="userImageUrl"
            type="text"
            className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            placeholder="address"
            required
          />

          <label
            htmlFor="userImageUrl"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            User Image URL
          </label>
        </div>

        <div className="text-center">
          <motion.button
            type="submit"
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px #000",
              boxShadow: "0px 0px 8px #000",
            }}
            className="btn w-3/4 mb-3 mr-3 text-white bg-gradient-to-br mt-5 from-cyan-600 to-black hover:from-black hover:to-cyan-600 text-lg"
          >
            Submit
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;

import React, { useState } from "react";
export default function MyPoem() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [petName, setPetName] = useState("");
  const [address, setAddress] = useState("");
  const [favoriteColor, setFavoriteColor] = useState("");
  const [hobby, setHobby] = useState("");
  const [age, setAge] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e) => {
    // It stops the page from refreshing when the form is submitted.
    //  We use it so the data stays and we can control the form ourselves
    e.preventDefault();
    if (
      !firstName ||
      !lastName ||
      !petName ||
      !address ||
      !favoriteColor ||
      !hobby ||
      !age
    ) {
      alert("Please fill the form");
      setIsSubmitted(false);
    } else {
      console.log("Form Submitted");
      setIsSubmitted(true);
    }
  };
  const renderPoem = () => {
    if (!isSubmitted) {
      return <em>Fill in the form to reveal your peom...</em>;
    }
  else {
      return (
        <>
        <div className="font-normal" >
        
          <p>
            In the land of <strong>{address}</strong>, where the sky is{" "}
            <strong> {favoriteColor}</strong>, he lived {""}{" "}
            <strong>
              {" "}
              {firstName} {lastName}
            </strong>
            ,<br></br> who loved <strong>{hobby}</strong> so much and he's{" "}
            <strong>{age}</strong> Years old.
          </p>
          <p>
            with their pet <strong>{petName}</strong> always nearby, they
            laughed and played as the sun went down
          </p>
          </div>
        </>
      );
    }
  };
  return (
    <>
      <h1 className="pt-4 text-3xl font-bold mb-3">Poem:</h1>
      <div>{renderPoem()}</div>
      <form
        action="submit"
        className="bg-slate-600   mt-14 rounded-xl py-6 p-14  gap-4  h-[580px] md:h-[390px] lg:h-[420px] m-3 "
        onSubmit={handleSubmit}
      >
        <h1 className="text-white text-3xl">STUDENT FORM</h1>
        <div className="grid grid-cols-1 md:grid md:grid-cols-2 mt-4">
          <input
            type="text"
            value={firstName}
            placeholder="First Name"
            className="p-2  border rounded-xl mx-4 my-2"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            value={lastName}
            placeholder="Last Name"
            className="p-2  border rounded-xl mx-4 my-2"
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            value={petName}
            placeholder="Pet Name"
            className="p-2  border rounded-xl mx-4 my-2"
            onChange={(e) => setPetName(e.target.value)}
          />
          <input
            type="text"
            value={address}
            placeholder="Address"
            className="p-2  border rounded-xl mx-4 my-2"
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="text"
            value={favoriteColor}
            placeholder="Favorite color"
            className="p-2  border rounded-xl mx-4 my-2"
            onChange={(e) => setFavoriteColor(e.target.value)}
          />
          <input
            type="text"
            value={hobby}
            placeholder="Hobby"
            className="p-2  border rounded-xl mx-4 my-2"
            onChange={(e) => setHobby(e.target.value)}
          />
          <input
            type="number"
            value={age}
            placeholder="Your age"
            className="p-2  border rounded-xl mx-4 my-2"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-white rounded-md hover:bg-blue-300 lg:px-8 lg:py-3 lg:mt-10 md:px-6 md:py-3 md:mt-6  sm:px-6 sm:py-3 sm:mt-6  px-6 py-3 mt-6"
        >
          Submit
        </button>
        <div>
          {isSubmitted && (
            <p className="text-white mt-4 text-center">
              Thank you for Submitting
            </p>
          )}
        </div>
      </form>
    </>
  );
}










import React from "react";
import { useFormContext } from "react-hook-form";
import TextInputField from "../textInputField";
import { optionsData } from './../../assets/data';
import SelectInput from "../inputOptionGenerator";
import Divider from "../divider";


const InputSection = ({ onSubmit }) => {
  const { register, handleSubmit } = useFormContext();

  return (
    <div className="input-section w-full lg:w-1/3 bg-white p-5 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-700">Input Details</h2>
      <Divider name={"page data"} />
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <div className="mb-4">
          <label
            htmlFor="layout"
            className="block mb-2 text-sm font-medium text-gray-700">
          </label>
          <input
            type="text"
            id="layout"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Chose your layout"
            {...register("layout", { required: true })}
          />
        </div> */}
        <TextInputField
          id="coverpagename"
          label="Cover Page Name:"
          placeholder="Enter a cover page name"
          register={register}
        />

        {/* department data */}
        <SelectInput
          id={optionsData[0].id}
          label={optionsData[0].label}
          options={optionsData[0].options}
          register={register}
        />

        <TextInputField
          id="courseTitle"
          label="Course Title:"
          placeholder="Enter a course title."
          register={register}
        />
        <TextInputField
          id="courseCode"
          label="Course Code:"
          placeholder="Enter the course code."
          register={register}
        />
        <TextInputField
          id="coverType"
          label="Type of Cover Page:"
          placeholder="Enter the cover page type."
          register={register}
        />
        <TextInputField
          id="titleName"
          label="Title:"
          placeholder="Enter the course title."
          register={register}
        />

        {/* teachers data */}

        <Divider name={"Teacher's data"} />

        <TextInputField
          id="teacherName"
          label="Teacher Name:"
          placeholder="Enter the teacher's name."
          register={register}
        />

        <SelectInput
          id={optionsData[1].id}
          label={optionsData[1].label}
          options={optionsData[1].options}
          register={register}
        />

        <SelectInput
          id="teacherDepartment"
          label="Teacher's Department"
          options={optionsData[0].options}
          register={register}
        />

        {/* student data */}

        <Divider name={"page data"} />

        <TextInputField
          id="studentName"
          label="Student Name:"
          placeholder="Enter the student's name."
          register={register}
        />
        <TextInputField
          id="studentId"
          label="Student ID:"
          placeholder="Enter the student ID."
          register={register}
        />
        <TextInputField
          id="studentSection"
          label="Student Section:"
          placeholder="Enter the student's section."
          register={register}
        />

        <div className="mb-4">
          <label
            htmlFor="submitDate"
            className="block mb-2 text-sm font-medium text-gray-700">
            Submit Date:
          </label>
          <input
            type="date"
            id="submitDate"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            {...register("submitDate")}
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
            Generate Cover Page
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputSection;

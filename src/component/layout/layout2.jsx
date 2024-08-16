import React from "react";
import logo from "../../assets/Nubtklogo.jpg";
import { useFormContext } from "react-hook-form";

const Layout2 = () => {
  const { watch } = useFormContext();
  const watchFields = watch();

  return (
    <div className="output-section w-full lg:w-2/3">
      <div
        id="content"
        className="w-full lg:w-[210mm] h-auto lg:h-[297mm] p-5 lg:p-[20mm] border border-gray-300 bg-white shadow-md box-border flex flex-col order-1">
        <div className="w-[250px] h-[250px] mx-auto mb-5 flex justify-center items-center">
          <img src={logo} alt="NUBTK" className="max-w-full max-h-full" />
        </div>
        <h1 className="text-center m-1 text-2xl font-bold">
          Northern University of Business & Technology Khulna
        </h1>
        <h2 id="departmentText" className="text-center m-1 text-lg font-bold">
          Department of{" "}
          {watchFields.department
            ? watchFields.department.slice(0, 1).toUpperCase() +
              watchFields.department.slice(1)
            : ""}
        </h2>
        <p className="text-center m-1">
          Course Title:{" "}
          <span id="courseTitleText">{watchFields.courseTitle}</span>
        </p>
        <p className="text-center m-1">
          Course Code: <span id="courseCodeText">{watchFields.courseCode}</span>
        </p>
        <h2
          id="coverTypeText"
          className="text-center m-1 text-lg font-bold mt-4 mb-5">
          {watchFields.coverType}
        </h2>
        <p className="text-center m-1">
          Title: <span id="titleNameText">{watchFields.titleName}</span>
        </p>
        <table className="w-full border-collapse mt-7 mb-[150px]">
          <tbody>
            <tr>
              <th className="border border-black p-2 w-1/2 bg-gray-100 text-center">
                Submitted To
              </th>
              <th className="border border-black p-2 w-1/2 bg-gray-100 text-center">
                Submitted By
              </th>
            </tr>
            <tr>
              <td className="border border-black p-2 w-1/2 align-middle text-left">
                <p>
                  <span id="teacherNameText">{watchFields.teacherName}</span>
                </p>
                <p>
                  <span id="teacherDesignationText">
                    {watchFields.teacherDesignation}
                  </span>
                </p>
                <p>
                  Department of{" "}
                  <span id="teacherDepartmentText">
                    {watchFields.teacherDepartment}
                  </span>
                </p>
              </td>
              <td className="border border-black p-2 w-1/2 align-middle text-left">
                <p>
                  <span id="studentNameText">{watchFields.studentName}</span>
                </p>
                <p>
                  Student ID:{" "}
                  <span id="studentIdText">{watchFields.studentId}</span>
                </p>
                <p>
                  Section: <span id="sectionText">{watchFields.section}</span>
                </p>
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="border border-black p-2 text-center">
                Date of Submission:{" "}
                <span id="submissionDateText">
                  {watchFields.submissionDate}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Layout2;

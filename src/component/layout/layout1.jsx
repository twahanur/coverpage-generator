import logo from "../../assets/Nubtklogo.jpg";
import { useFormContext } from "react-hook-form";

const Layout1 = () => {
  const { watch } = useFormContext();
  const watchFields = watch();


  

  return (
    <div className="output-section w-full lg:w-2/3 bg-red">
      <div
        id="content"
        className="w-full lg:w-[210mm] h-auto lg:h-[297mm] p-5 lg:p-[20mm]  border-gray-300shadow-md box-border flex flex-col order-1 border-2">
        <div className="w-[250px] h-[250px] mx-auto  flex justify-center items-center">
          <img src={logo} alt="NUBTK" className="max-w-full max-h-full" />
        </div>
        <h1 className="text-center mb-5 text-2xl font-bold">
          Northern University of Business & Technology Khulna
        </h1>
        <h1 id="departmentText" className="text-center m-1 text-xl font-bold">
          Department of{" "}
          {watchFields.department
            ? watchFields.department.slice(0, 1).toUpperCase() +
              watchFields.department.slice(1)
            : ""}
        </h1>
        <h2 className="text-center m-1 text-lg">
          <span className="font-semibold">Course Title:</span>{" "}
          <span id="courseTitleText">{watchFields.courseTitle}</span>
        </h2>
        <p className="text-center m-1 text-lg">
          <span className="font-semibold">Course Code:</span>{" "}
          <span id="courseCodeText">{watchFields.courseCode}</span>
        </p>

        {/* assignment */}
        <h2
          id="coverTypeText"
          className="text-center m-1 text-2xl font-bold  mb-5">
          {watchFields.coverType}
        </h2>
        <p className="text-center m-1 text-lg">
          <span className="font-semibold">Title:</span>{" "}
          <span id="titleNameText">{watchFields.titleName}</span>
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
              <td className="border border-black p-5 w-1/2 align-middle text-left">
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
                    {watchFields.teacherDepartment?watchFields.teacherDepartment:watchFields.department}{", NUBTK"}
                  </span>
                </p>
              </td>
              <td className="border border-black p-2 w-1/2 align-middle text-left">
                <p>
                  <span id="studentNameText">
                    Name: {watchFields.studentName}
                  </span>
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
          </tbody>
        </table>
        <div className="mt-30 w-full flex justify-center text-lg">
          Date of Submission:{" "}
          <span id="submissionDateText">{watchFields.submissionDate}</span>
        </div>
        <div className="absolute -bottom-48">
         <u className="font-semibold">{"Teacher's Signature"}</u>
        </div>
      </div>
    </div>
  );
};

export default Layout1;

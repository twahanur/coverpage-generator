import { useForm, FormProvider } from "react-hook-form";
import InputSection from "./component/inputSection/inputSection";
import Layout1 from "./component/layout/layout1";
import { usePDF } from "react-to-pdf";

function App() {
  const methods = useForm();
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5 font-serif">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-4xl font-bold mb-6">
          Cover Page Generator
        </h1>

        <FormProvider {...methods}>
          <div className="flex flex-col lg:flex-row gap-5 justify-center">
            <InputSection onSubmit={onSubmit} />
            <div ref={targetRef}>

              <Layout1 />
            </div>
          </div>
        </FormProvider>

        {/* <ShareMediaComponent /> */}
        <div className="flex justify-center mt-6">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors mx-2">
            User Guide
          </button>
          <button
            onClick={() => toPDF()}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors mx-2">
            Download PDF
          </button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors mx-2">
            Share
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

// import { Document, Page } from "@react-pdf/renderer";
function Roadmap() {
  // const downloadPdf = () => {
  //   const pdfUrl = "../assets/resources/roadmap.pdf";
  //   window.location.href = pdfUrl;
  // };

  const downloadPdf = () => {
    const pdfUrl = "../assets/resources/roadmap.pdf";
    const anchor = document.createElement("a");
    anchor.href = pdfUrl;
    anchor.download = "roadmap.pdf";
    anchor.click();
  };

  return (
    <div>
      <div className=" grow text-white">
        <div className="">
          <div className=" px-20 py-20 border-2 rounded-3xl bg-blue-600 border-white flex flex-col gap-5">
            {/* <Document>
              <Page pageNumber={1} src="../assets/resources/roadmap.pdf" />
            </Document> */}

            <h1 className="text-lg">Link to download pdf 👇</h1>
            <button
              className="border-2 border-white rounded-full"
              onClick={downloadPdf}
            >
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;

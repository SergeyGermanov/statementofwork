// to do (Sergey):
// add a JS function to populate dropdown for Countries and Timezones from Object files

function generatePDF() {

    // Landscape export, 2×4 inches
    // const doc = new jsPDF({
    //   orientation: "landscape",
    //   unit: "in",
    //   format: [1, 1]
    // });


    var doc = new jsPDF('p', 'pt', 'letter'); //create jsPDF object
    doc.fromHTML(
        document.querySelector("#pdfSave"), // page element which you want to print as PDF
        10,
        10,
        {
            width: 570, //set width
        },
        function (a) {
            doc.save("StatementOfWork.pdf"); // save file name as HTML2PDF.pdf
        }
    );
}

// jQuery

$(".ui.dropdown").dropdown();
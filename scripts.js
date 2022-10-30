// to do (Sergey):

// functions that populate dropdown for Countries and Timezones from Object files

let countriesDropdown = (countries) => {
    let dropdown = document.querySelectorAll('.countriesDropdown');
    let optionsString = "";

    countries.forEach((element, index) => {
        optionsString += `<div class="item" value="${index}"><i class="${element.flagCode} flag"></i>${element.name}</div>`;
    });

    dropdown.forEach(element => {
        element.innerHTML = optionsString;
    });
}


let timezoneDropdown = (timezones) => {
    let dropdown = document.querySelectorAll('.timezonesDropdown');
    let optionsString = "";

    timezones.forEach((element, index) => {
        optionsString += `<div class="item" value="${index}">${element.name}</div>`;
    });

    dropdown.forEach(element => {
        element.innerHTML = optionsString;
    });
}

//populates all the country and timezone dropdowns
document.addEventListener("DOMContentLoaded", () => {
    countriesDropdown(countries);
    timezoneDropdown(timezones);
});

// PDF library use

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

// Semantics for dropdowns jQuery

$(".ui.dropdown").dropdown();
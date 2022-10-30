// to do (Sergey):

// functions that populate dropdown for Countries and Timezones from Object files

let countriesDropdown = (countries) => {
    let dropdown = document.querySelectorAll('.countriesDropdown');
    let optionsString = "";

    countries.forEach((element, index) => {
        optionsString += `<div class="item" data-value="${element.name}"><i class="${element.flagCode} flag"></i>${element.name}</div>`;
    });

    dropdown.forEach(element => {
        element.innerHTML = optionsString;
    });
}


let timezoneDropdown = (timezones) => {
    let dropdown = document.querySelectorAll('.timezonesDropdown');
    let optionsString = "";

    timezones.forEach((element, index) => {
        optionsString += `<div class="item" data-value="${element.name}">${element.name}</div>`;
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

// on button click - Generate SoW

const form = document.querySelector("#sowForm");
const termConditions = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas!";

//create Div after clicking "Generate SoW"

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let summaryString = '';
    let arr = [...form.elements];

    let summary = document.querySelector("#summary");

    //create String with results
    arr.forEach(element => {
        (element.value !== "") && (summaryString += `<br> ${element.name} ${element.value}`);
    });

    //add summary to div
    (summaryString !== "") && (summary.innerHTML = `<div class="ui positive message" id="pdfSave">
                       <a class="ui teal right corner label" onclick="clipboardFunc()">
                        <i class="copy link icon" ></i>
                       </a>                        
                        <div id="clipboardText">
                        ${summaryString} 
                        <br>
                        Terms and Conditions:
                        ${termConditions}                       
                        </div>
                     </div>
                     <div class="fluid ui vertical animated button" tabindex="0" onclick="generatePDF()">
                     <div class="hidden content">PDF <i class="file pdf icon"></i></div>
                     <div class="visible content">Download</div>
                   </div>
                   </div>
                     `);

    summaryString = "";
});

//clipboard copy button

let clipboardFunc = () => {

    let clipboardText = document.querySelector("#clipboardText").innerHTML;
    let copyText = `${clipboardText.replaceAll(
        "<br>",
        "\n"
    )}`;

    function listener(e) {
        e.clipboardData.setData("text/html", copyText);
        e.clipboardData.setData("text/plain", copyText);
        e.preventDefault();
    }

    document.addEventListener("copy", listener);
    document.execCommand("copy");
    document.removeEventListener("copy", listener);
};
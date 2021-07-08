// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {

    const headerHeader = document.createElement("div");
    const spanDateHeader = document.createElement("span");
    const h1Header = document.createElement("h1");
    const spanTempHeader = document.createElement("span");

    headerHeader.classList.add("header");
    spanDateHeader.classList.add("date");
    spanTempHeader.classList.add("temp");

    spanDateHeader.textContent = "MARCH 28, 2020";
    h1Header.textContent = "Lambda Times";
    spanTempHeader.textContent = "98" + '\u00B0';

    headerHeader.append(spanDateHeader, h1Header, spanTempHeader);

    return headerHeader;

}

const headerContainer = document.querySelector(".header-container");
headerContainer.appendChild(Header());


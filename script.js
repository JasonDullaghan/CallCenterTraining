
let businessTypeBtn = null;
let businessSizeBtn = null;
let sportsPackageBtn = null;
let sportsPackage = null;
let spanishBusiness = null;
let spanishBusinessBtn = null;
let numberOfTvs = 1;
let spanishPackage = null;
let spanishPackageBtn = null;
let Price = 0;

function selectBusinessType(type, button) {
  if (businessTypeBtn) {
    businessTypeBtn.classList.remove("active");
  }
  businessTypeBtn = button;
  businessTypeBtn.classList.add("active");
  businessType = type;
  updateResult();
}
function updateTvs() {
  numberOfTvs = document.getElementById("numberOfTvs").value;
  updateResult(); // Update the result when the number of TVs is changed
}

function selectSportsPackage(option, button) {
  if (sportsPackageBtn) {
    sportsPackageBtn.classList.remove("active");
  }
  sportsPackageBtn = button;
  sportsPackageBtn.classList.add("active");
  sportsPackage = option;
  updateResult();
}

function selectLanguage(option, button) {
  if (spanishBusinessBtn) {
    spanishBusinessBtn.classList.remove("active");
  }
  spanishBusinessBtn = button;
  spanishBusinessBtn.classList.add("active");
  spanishBusiness = option;
  updateResult();

  // Show or hide the Spanish package question
  if (spanishBusiness === "yes") {
    document.getElementById("spanishPackageQuestion").style.display =
      "block";
  } else {
    document.getElementById("spanishPackageQuestion").style.display =
      "none";
  }
}

function selectSpanishPackage(option, button) {
  if (spanishPackageBtn) {
    spanishPackageBtn.classList.remove("active");
  }
  spanishPackageBtn = button;
  spanishPackageBtn.classList.add("active");
  spanishPackage = option;
  updateResult();
}

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function updateResult() {
  const selectedOptions = document.getElementById("selectedOptions");
  const results = document.getElementById("results");
  if (businessType && sportsPackage && spanishBusiness && numberOfTvs) {
    // Check combinations of button presses
    if (businessType === "public") {
      if (sportsPackage === "yes") {
        if (spanishBusiness === "yes") {
          if (spanishPackage === "allChannels") {
          } else if (spanishPackage === "addOnPackage") {
            // Handle the combination: Public Viewing, Yes, Yes, All Spanish-speaking channels

            //update the script based on the boxes checked

            results.innerHTML =
              "<i> Reccomended Script: <br> Hello! Based on your preferences, I'd recommend our best value package, the Business Entertainment Pack. It offers over 105 channels, including ESPN & ESPN 2, for just $89.99 per month. \nTo further enhance your viewing experience, I also recommend adding the DirecTV Deportes international package, which includes ESPN Deportes, TUDN, TyC Sports, and GOLTV for just $9.99 per month. \nBy combining the Business Entertainment Pack with the DirecTV Deportes add-on, you'll receive an extensive selection of channels tailored to your business needs.";

            const packageInfo = `
                <h2>Recommended Packages</h2>
<p>We recommend the following packages for your business:</p>
<ol>
  <li>
    <input type="checkbox" name="package-options" id="entertainment-pack" data-price="89.99" data-package = "Business Entertainment Pack" checked>
    <strong>Reccomended: Business Entertainment Pack</strong> ($89.99)
    <ul>
      <li>Offers over 105 channels, including ESPN & ESPN 2</li>
      <li>$99.99 after the 12-month period, and $119.99 afterwards</li>
    </ul>
  </li>
  <li>
    <input type="checkbox" name="package-options" id="XTRA-pack" data-price="114.99" data-package = "Commercial XTRA Pack">
    <strong>Higher Price Option: Commercial XTRA Pack</strong> ($114.99)
    <ul>
      <li>Offers over 185 channels, Regional Sports Networks, and Music Choice Premium</li>
      <li>$174.99 for the next 12 months, and $194.99 afterwards</li>
    </ul>
  </li>
  <li>
    <input type="checkbox" name="package-options" id="business-pack" data-price="59.99" data-package = "Business Select Pack">
    <strong>Lower Price Option: Business Select Pack</strong> ($59.99)
    <ul>
      <li>Offers over 95 channels</li>
      <li>$79.99 after the 24-month period</li>
    </ul>
  </li>
  <li>
    <input type="checkbox" name="package-options" id="commercial-pack" data-price="29.99" data-package = "Commercial Basic Plus">
    <strong>Lowest Price Option: Commercial Basic Plus</strong> ($29.99)
    <ul>
      <li>Offers over 45 channels</li>
    </ul>
  </li>
</ol>

<h2>International Add-On Packages</h2>
<p>Enhance your viewing experience with these international add-on packages for just $9.99 each:</p>
<ol>
  <li>
    <input type="checkbox" name = "international-options" id="deportes-package" data-price="9.99" data-addon = "DirecTV Deportes" checked>
    <strong>Recommended: DirecTV Deportes</strong>
    <ul>
      <li>ESPN Deportes, TUDN, TyC Sports, GOLTV</li>
    </ul>
  </li>
  <li>
    <input type="checkbox" name = "international-options" id="mexico-package" data-price="9.99" data-addon = "Mexico Plus">
    <strong>Mexico Plus</strong>
    <ul>
      <li>MN, Universo, A3S, Telemundo, UMas, and more</li>
    </ul>
  </li>
  <li>
    <input type="checkbox" name = "international-options" id="americas-package" data-price="9.99" data-addon = "Americas Plus">
    <strong>Americas Plus</strong>
    <ul>
      <li>PERU Magico, Discovery en Espanol, Telemundo, UMas, Hola TV, and more</li>
    </ul>
  </li>
</ol>
          `;
            document.getElementById("package-container").innerHTML =
              packageInfo;

            // Handle the combination: Public Viewing, Yes, Yes, Spanish-speaking add-on package
            // Add event listeners to all checkboxes
            document
              .querySelectorAll("input[type='checkbox']")
              .forEach((checkbox) => {
                checkbox.addEventListener("change", updateTotalPrice);
              });
            document
              .getElementById("num-tvs")
              .addEventListener("input", updateTotalPrice);

            document
              .querySelectorAll(
                "input[type='checkbox'][name='package-options']"
              )
              .forEach((checkbox) => {
                checkbox.addEventListener("change", (event) => {
                  if (event.target.checked) {
                    document
                      .querySelectorAll(
                        "input[type='checkbox'][name='package-options']"
                      )
                      .forEach((otherCheckbox) => {
                        if (otherCheckbox !== event.target) {
                          otherCheckbox.checked = false;
                        }
                      });
                  }
                  // Call the updateTotalPrice function initially to set the recommended script text
                  updateTotalPrice();
                });
              });
          }
        } else if (spanishBusiness === "no") {
          // Handle the combination: Public Viewing, Yes, No
        }
      } else if (sportsPackage === "no") {
        if (spanishBusiness === "yes") {
          if (spanishPackage === "allChannels") {
            // Handle the combination: Public Viewing, No, Yes, All Spanish-speaking channels
          } else if (spanishPackage === "addOnPackage") {
            // Handle the combination: Public Viewing, No, Yes, Spanish-speaking add-on package
          }
        } else if (spanishBusiness === "no") {
          // Handle the combination: Public Viewing, No, No
        }
      }
    } else if (businessType === "private") {
      // Similar nested if-else statements for private viewing
    } else if (businessType === "individual") {
      // Similar nested if-else statements for individual viewing
    }
  }

  // Call the updateTotalPrice function initially to set the recommended script text
  // Add event listener to the number of TVs input field

  function updateTotalPrice() {
    let selectedInternational = [];
    let selectedPackageCheckbox = document.querySelector(
      "input[type='checkbox'][name='package-options']:checked"
    );

    let selectedInternationalCheckbox = document.querySelector(
      "input[name='international-options']:checked"
    );
    let basePackagePrice = parseFloat(
      document.querySelector(
        "input[type='checkbox'][name='package-options']:checked"
      ).dataset.price
    );
    let internationalPrice = Array.from(
      document.querySelectorAll(
        "input[name='international-options']:checked"
      )
    ).reduce(
      (total, option) => total + parseFloat(option.dataset.price),
      0
    );

    // Calculate the additional cost for TVs
    let numTvs = parseInt(document.getElementById("num-tvs").value);
    let tvCost = numTvs > 1 ? (numTvs - 1) * 14.99 : 0;
    let TVs = numTvs > 1 ? "TV's" : "TV"

    let totalPrice = basePackagePrice + internationalPrice + tvCost;
    let selectedPackage = selectedPackageCheckbox.dataset.package;
    selectedInternational.push(
      //selectedInternationalCheckbox.dataset.addon
      Array.from(
        document.querySelectorAll(
          "input[name='international-options']:checked"
        )
      ).map((option) => option.dataset.addon)
    );
    console.log(selectedInternational);
    let addOns = selectedInternational[0].length > 1 ? "add-ons" : "add-on";
    
    //make the international add-on of <strong>${selectedInternational.join(",  ")}</strong> package only display when the array is > 1

    //document.getElementById("recommended-script").innerHTML = `Based on your selections, we recommend the <strong>${selectedPackage}</strong> with the international add-on of <strong>${selectedInternational.join(",  ")}</strong> package and <strong>${numTvs}</strong> ${TVs} for a total of <strong>$${totalPrice.toFixed(2)}</strong> per month.`;
    document.getElementById("recommended-script").innerHTML = `New selections script: <br> <i> We recommend the <strong>${selectedPackage}</strong>${selectedInternational[0].length >= 1 ? ` with the international ${addOns} of <strong> ${ selectedInternational.join(", ")}</strong> package` : ""} and <strong>${numTvs}</strong> ${TVs} for a total of <strong>$${totalPrice.toFixed(2)}</strong> per month.`;

  }

  // Call the updateTotalPrice function initially to set the recommended script text
}

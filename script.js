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
/*
document.addEventListener('DOMContentLoaded', (event) => {
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdownMenu.addEventListener('click', function(e) {
e.preventDefault();
if(e.target.matches('.dropdown-item')){
const question = e.target.textContent;

let answer = '';
switch(question) {
  case 'If the customer says they don’t need it':
    answer = "I completely understand. However, it's always better to be safe than sorry. Our warranty plan provides you with the peace of mind that your TV is protected in case of any damage. Plus, if you ever need to use the plan, our team is here to help you every step of the way.";
    break;
  case 'How do I sign up for the warranty plan?':
    answer = "It's very simple. I can add the warranty plan to your account right now. Would you like to proceed with the purchase? Great! I have added the warranty plan to your account, and you will receive an email confirmation shortly. Thank you for choosing our TV service and for investing in the protection of your TV.";
    break;
  case 'What is the warranty plan?':
    let numberOfReceivers = 10; // This should be replaced with the actual number of receivers
    if(numberOfReceivers >= 1 && numberOfReceivers <= 5) {
      answer = "You are eligible for our “Tier 1” warranty program, which is $200 per year after the first year, which is fully covered. We also have options for a 2-year warranty plan, which is $350, and our 3-year plan is $450.";
    } else if(numberOfReceivers >= 6 && numberOfReceivers <= 15) {
      answer = "You are eligible for our “Tier 2” warranty program, which is $250 per year after the first year, which is fully covered. We also have options for a 2-year warranty plan, which is $400, and our 3-year plan is $500.";
    } else if(numberOfReceivers > 15) {
      answer = "You are eligible for our “Tier 3” warranty program, which is $300 per year after the first year, which is fully covered. We also have options for a 2-year warranty plan, which is $450, and our 3-year plan is $550.";
    }
    break;
}

// display answer in the modal
const modalBody = document.querySelector('.modal-body');
modalBody.innerHTML += `<p><strong>${question}</strong><br>${answer}</p>`;
}
});
});
*/

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

function selectLanguage(type, button) {
  if (spanishBusinessBtn) {
    spanishBusinessBtn.classList.remove("active");
  }
  spanishBusinessBtn = button;
  spanishBusinessBtn.classList.add("active");
  spanishBusiness = type;
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
    console.log(businessType, sportsPackage, spanishBusiness, numberOfTvs);
    if (businessType === "public") {
      if (sportsPackage === "yes") {
        if (spanishBusiness === "addOnPackage") {
          // Handle the combination: Public Viewing, Yes, Yes, All Spanish-speaking channels

          //update the script based on the boxes checked

          const packageInfo = `
            <div class="card">
<div class="card-body" >
<h2 class="card-title">Recommended Packages</h2>
<p class="card-text">We recommend the following packages for your business:</p>
<ol>
<li class="mb-2">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" name="package-options" id="commercial-pack" data-price="29.99" data-package="Commercial Basic Plus">
    <label class="form-check-label" for="commercial-pack">
      <strong>Lowest Price Option: Commercial Basic Plus</strong> ($29.99)
    </label>
  </div>
  <ul>
    <li>Offers over 45 channels</li>
  </ul>
</li>
<li class="mb-2">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" name="package-options" id="business-pack" data-price="59.99" data-package="Business Select Pack">
    <label class="form-check-label" for="business-pack">
      <strong>Lower Price Option: Business Select Pack</strong> ($59.99)
    </label>
  </div>
  <ul>
    <li>Offers over 95 channels</li>
    <li>$79.99 after the 24-month period</li>
  </ul>
</li>
<li class="mb-2">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" name="package-options" id="entertainment-pack" data-price="89.99" data-package="Commercial Entertainment Pack">
    <label class="form-check-label" for="entertainment-pack">
      <strong>2nd Sport Option: Commercial Entertainment Pack</strong> ($89.99)
    </label>
  </div>
  <ul>
    <li>Offers over 105 channels, including ESPN & ESPN 2</li>
    <li>$99.99 after the 12-month period, and $119.99 afterwards</li>
  </ul>
</li>
<li class="mb-2">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" name="package-options" id="XTRA-pack" data-price="114.99" data-package="Commercial XTRA Pack" checked>
    <label class="form-check-label" for="XTRA-pack">
      <strong>Reccomended: Commercial XTRA Pack</strong> ($114.99)
    </label>
  </div>
  <ul>
    <li>Offers over 185 channels, Regional Sports Networks, and Music Choice Premium</li>
    <li>$174.99 for the next 12 months, and $194.99 afterwards</li>
  </ul>
</li>
</ol>

<h2 class="card-title">International Add-On Packages</h2>
<p class="card-text">Enhance your viewing experience with these international add-on packages for just $9.99 each:</p>
<ol>
<li class="mb-2">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" name="international-options" id="deportes-package" data-price="9.99" data-addon="DirecTV Deportes" checked>
    <label class="form-check-label" for="deportes-package">
      <strong>Recommended: DirecTV Deportes</strong>
</label>
</div>
<ul>
<li>ESPN Deportes, TUDN, TyC Sports, GOLTV</li>
</ul>
</li>
<li class="mb-2">
<div class="form-check">
<input class="form-check-input" type="checkbox" name="international-options" id="mexico-package" data-price="9.99" data-addon="Mexico Plus">
<label class="form-check-label" for="mexico-package">
<strong>Mexico Plus</strong>
</label>
</div>
<ul>
<li>MN, Universo, A3S, Telemundo, UMas, and more</li>
</ul>
</li>
<li class="mb-2">
<div class="form-check">
<input class="form-check-input" type="checkbox" name="international-options" id="americas-package" data-price="9.99" data-addon="Americas Plus">
<label class="form-check-label" for="americas-package">
<strong>Americas Plus</strong>
</label>
</div>
<ul>
<li>PERU Magico, Discovery en Espanol, Telemundo, UMas, Hola TV, and more</li>
</ul>
</li>
</ol>

</div>
</div>`;

          document.getElementById("package-container").innerHTML = packageInfo;

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
            .querySelectorAll("input[type='checkbox'][name='package-options']")
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
          updateTotalPrice();
        } else if (spanishBusiness === "none") {
          console.log("Spanish-speaking add-on package: None");
          // Handle the combination: Public Viewing, Yes, None

          const packageInfo = `
            <div class="card">
<div class="card-body" >
<h2 class="card-title">Recommended Packages</h2>
<p class="card-text">We recommend the following packages for your business:</p>
<ol>
<li class="mb-2">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" name="package-options" id="commercial-pack" data-price="29.99" data-package="Commercial Basic Plus">
    <label class="form-check-label" for="commercial-pack">
      <strong>Lowest Price Option: Commercial Basic Plus</strong> ($29.99)
    </label>
  </div>
  <ul>
    <li>Offers over 45 channels</li>
  </ul>
</li>
<li class="mb-2">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" name="package-options" id="business-pack" data-price="59.99" data-package="Business Select Pack">
    <label class="form-check-label" for="business-pack">
      <strong>Lower Price Option: Business Select Pack</strong> ($59.99)
    </label>
  </div>
  <ul>
    <li>Offers over 95 channels</li>
    <li>$79.99 after the 24-month period</li>
  </ul>
</li>
<li class="mb-2">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" name="package-options" id="entertainment-pack" data-price="89.99" data-package="Commercial Entertainment Pack">
    <label class="form-check-label" for="entertainment-pack">
      <strong>2nd Sports Option: Commercial Entertainment Pack</strong> ($89.99)
    </label>
  </div>
  <ul>
    <li>Offers over 105 channels, including ESPN & ESPN 2</li>
    <li>$99.99 after the 12-month period, and $119.99 afterwards</li>
  </ul>
</li>
<li class="mb-2">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" name="package-options" id="XTRA-pack" data-price="114.99" data-package="Commercial XTRA Pack" checked>
    <label class="form-check-label" for="XTRA-pack">
      <strong>Reccomended: Commercial XTRA Pack</strong> ($114.99)
    </label>
  </div>
  <ul>
    <li>Offers over 185 channels, Regional Sports Networks, and Music Choice Premium</li>
    <li>$174.99 for the next 12 months, and $194.99 afterwards</li>
  </ul>
</li>
</ol>


</div>
</div>`;

          document.getElementById("package-container").innerHTML = packageInfo;

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
            .querySelectorAll("input[type='checkbox'][name='package-options']")
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
          updateTotalPrice();
        } else if (spanishBusiness === "allChannels") {
          const packageInfo = `
            <div class="card">
<div class="card-body" >
<h2 class="card-title">Recommended Packages</h2>
<p class="card-text">We recommend the following packages for your business:</p>
<ol>
<li class="mb-2">
<div class="form-check">
<input class="form-check-input" type="checkbox" name="package-options" id="commercial-pack" data-price="39.98" data-package="Commercial Basic Plus + DirecTV Deportes">
<label class="form-check-label" for="commercial-pack">
  <strong>Lowest Price Option: Commercial Basic Plus + DirecTV Deportes</strong> ($29.99 + $9.99)
</label>
</div>
<ul>
<li>Offers over 45 channels in English + ESPN Deportes, TUDN, TyC Sports, GOLTV in Spanish</li>
</ul>
</li>
<li class="mb-2">
<div class="form-check">
<input class="form-check-input" type="checkbox" name="package-options" id="optimo-pack" data-price="99.99" data-package="COMERCIAL ÓPTIMO MÁS PACK">
<label class="form-check-label" for="optimo-pack">
  <strong>COMERCIAL ÓPTIMO MÁS PACK</strong> ($99.99)
</label>
</div>
<ul>
<li>Access to Over 125 Channels</li>
</ul>
</li>
<li class="mb-2">
<div class="form-check">
<input class="form-check-input" type="checkbox" name="package-options" id="ultra-pack" data-price="124.99" data-package="COMERCIAL MÁS ULTRATM PACK" checked>
<label class="form-check-label" for="ultra-pack">
  <strong>COMERCIAL MÁS ULTRATM PACK</strong> ($124.99)
</label>
</div>
<ul>
<li>Access to Over 150 Channels</li>
</ul>
</li>
</ol>


<h2 class="card-title">International Add-On Packages</h2>
<p class="card-text">Enhance your viewing experience with these international add-on packages for just $9.99 each:</p>
<ol>
<li class="mb-2">
<div class="form-check">
<input class="form-check-input" type="checkbox" name="international-options" id="mexico-package" data-price="9.99" data-addon="Mexico Plus">
<label class="form-check-label" for="mexico-package">
<strong>Mexico Plus</strong>
</label>
</div>
<ul>
<li>MN, Universo, A3S, Telemundo, UMas, and more</li>
</ul>
</li>
<li class="mb-2">
<div class="form-check">
<input class="form-check-input" type="checkbox" name="international-options" id="americas-package" data-price="9.99" data-addon="Americas Plus">
<label class="form-check-label" for="americas-package">
<strong>Americas Plus</strong>
</label>
</div>
<ul>
<li>PERU Magico, Discovery en Espanol, Telemundo, UMas, Hola TV, and more</li>
</ul>
</li>
</ol>



</div>
</div>`;

          document.getElementById("package-container").innerHTML = packageInfo;

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
            .querySelectorAll("input[type='checkbox'][name='package-options']")
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
          updateTotalPrice();
        }
      } else if (sportsPackage === "no") {
        if (spanishBusiness === "allChannels") {
          // Handle the combination: Public Viewing, No, Yes, All Spanish-speaking channels

          const packageInfo = `
            <div class="card">
<div class="card-body" >
<h2 class="card-title">Recommended Packages</h2>
<p class="card-text">We recommend the following packages for your business:</p>
<ol>
<li class="mb-2">
<div class="form-check">
<input class="form-check-input" type="checkbox" name="package-options" id="commercial-pack" data-price="39.98" data-package="Commercial Basic Plus + DirecTV Deportes" checked>
<label class="form-check-label" for="commercial-pack">
  <strong>Lowest Price Option: Commercial Basic Plus + DirecTV Deportes</strong> ($29.99 + $9.99)
</label>
</div>
<ul>
<li>Offers over 45 channels in English + ESPN Deportes, TUDN, TyC Sports, GOLTV in Spanish</li>
</ul>
</li>
<li class="mb-2">
<div class="form-check">
<input class="form-check-input" type="checkbox" name="package-options" id="optimo-pack" data-price="99.99" data-package="COMERCIAL ÓPTIMO MÁS PACK">
<label class="form-check-label" for="optimo-pack">
  <strong>COMERCIAL ÓPTIMO MÁS PACK</strong> ($99.99)
</label>
</div>
<ul>
<li>Access to Over 125 Channels</li>
</ul>
</li>
<li class="mb-2">
<div class="form-check">
<input class="form-check-input" type="checkbox" name="package-options" id="ultra-pack" data-price="124.99" data-package="COMERCIAL MÁS ULTRATM PACK">
<label class="form-check-label" for="ultra-pack">
  <strong>COMERCIAL MÁS ULTRATM PACK</strong> ($124.99)
</label>
</div>
<ul>
<li>Access to Over 150 Channels</li>
</ul>
</li>
</ol>


<h2 class="card-title">International Add-On Packages</h2>
<p class="card-text">Enhance your viewing experience with these international add-on packages for just $9.99 each:</p>
<ol>
<li class="mb-2">
<div class="form-check">
<input class="form-check-input" type="checkbox" name="international-options" id="mexico-package" data-price="9.99" data-addon="Mexico Plus">
<label class="form-check-label" for="mexico-package">
<strong>Mexico Plus</strong>
</label>
</div>
<ul>
<li>MN, Universo, A3S, Telemundo, UMas, and more</li>
</ul>
</li>
<li class="mb-2">
<div class="form-check">
<input class="form-check-input" type="checkbox" name="international-options" id="americas-package" data-price="9.99" data-addon="Americas Plus">
<label class="form-check-label" for="americas-package">
<strong>Americas Plus</strong>
</label>
</div>
<ul>
<li>PERU Magico, Discovery en Espanol, Telemundo, UMas, Hola TV, and more</li>
</ul>
</li>
</ol>



</div>
</div>`;

          document.getElementById("package-container").innerHTML = packageInfo;

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
            .querySelectorAll("input[type='checkbox'][name='package-options']")
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
          updateTotalPrice();
        } else if (spanishBusiness === "addOnPackage") {
          // Handle the combination: Public Viewing, No, Yes, Spanish-speaking add-on package
          // Handle the combination: Public Viewing, No, No
          console.log("were in");
          const packageInfo = `
            <div class="card">
<div class="card-body" >
<h2 class="card-title">Recommended Packages</h2>
<p class="card-text">We recommend the following packages for your business:</p>
<ol>
<li class="mb-2">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" name="package-options" id="commercial-pack" data-price="29.99" data-package="Commercial Basic Plus" checked>
    <label class="form-check-label" for="commercial-pack">
      <strong>Reccomended:  Commercial Basic Plus</strong> ($29.99)
    </label>
  </div>
  <ul>
    <li>Offers over 45 channels</li>
  </ul>
</li>
<li class="mb-2">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" name="package-options" id="business-pack" data-price="59.99" data-package="Business Select Pack">
    <label class="form-check-label" for="business-pack">
      <strong>Higher Price Option: Business Select Pack</strong> ($59.99)
    </label>
  </div>
  <ul>
    <li>Offers over 95 channels</li>
    <li>$79.99 after the 24-month period</li>
  </ul>
</li>
<li class="mb-2">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" name="package-options" id="entertainment-pack" data-price="89.99" data-package="Commercial Entertainment Pack">
    <label class="form-check-label" for="entertainment-pack">
      <strong>2nd Sports Option: Commercial Entertainment Pack</strong> ($89.99)
    </label>
  </div>
  <ul>
    <li>Offers over 105 channels, including ESPN & ESPN 2</li>
    <li>$99.99 after the 12-month period, and $119.99 afterwards</li>
  </ul>
</li>
<li class="mb-2">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" name="package-options" id="XTRA-pack" data-price="114.99" data-package="Commercial XTRA Pack">
    <label class="form-check-label" for="XTRA-pack">
      <strong>Best Value Option: Commercial XTRA Pack</strong> ($114.99)
    </label>
  </div>
  <ul>
    <li>Offers over 185 channels, Regional Sports Networks, and Music Choice Premium</li>
    <li>$174.99 for the next 12 months, and $194.99 afterwards</li>
  </ul>
</li>
</ol>

<h2 class="card-title">International Add-On Packages</h2>
<p class="card-text">Enhance your viewing experience with these international add-on packages for just $9.99 each:</p>
<ol>
<li class="mb-2">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" name="international-options" id="deportes-package" data-price="9.99" data-addon="DirecTV Deportes" checked>
    <label class="form-check-label" for="deportes-package">
      <strong>Recommended: DirecTV Deportes</strong>
</label>
</div>
<ul>
<li>ESPN Deportes, TUDN, TyC Sports, GOLTV</li>
</ul>
</li>
<li class="mb-2">
<div class="form-check">
<input class="form-check-input" type="checkbox" name="international-options" id="mexico-package" data-price="9.99" data-addon="Mexico Plus">
<label class="form-check-label" for="mexico-package">
<strong>Mexico Plus</strong>
</label>
</div>
<ul>
<li>MN, Universo, A3S, Telemundo, UMas, and more</li>
</ul>
</li>
<li class="mb-2">
<div class="form-check">
<input class="form-check-input" type="checkbox" name="international-options" id="americas-package" data-price="9.99" data-addon="Americas Plus">
<label class="form-check-label" for="americas-package">
<strong>Americas Plus</strong>
</label>
</div>
<ul>
<li>PERU Magico, Discovery en Espanol, Telemundo, UMas, Hola TV, and more</li>
</ul>
</li>
</ol>

</div>
</div>`;

          document.getElementById("package-container").innerHTML = packageInfo;

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
            .querySelectorAll("input[type='checkbox'][name='package-options']")
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
          updateTotalPrice();
        } else if (spanishBusiness === "none") {
          console.log("Spanish-speaking add-on package: None");
          // Handle the combination: Public Viewing, Yes, No

          const packageInfo = `
            <div class="card">
<div class="card-body" >
<h2 class="card-title">Recommended Packages</h2>
<p class="card-text">We recommend the following packages for your business:</p>
<ol>
<li class="mb-2">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" name="package-options" id="commercial-pack" data-price="29.99" data-package="Commercial Basic Plus" checked>
    <label class="form-check-label" for="commercial-pack">
      <strong>Lowest Price Option: Commercial Basic Plus</strong> ($29.99)
    </label>
  </div>
  <ul>
    <li>Offers over 45 channels</li>
  </ul>
</li>
<li class="mb-2">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" name="package-options" id="business-pack" data-price="59.99" data-package="Business Select Pack">
    <label class="form-check-label" for="business-pack">
      <strong>Higher Price Option: Business Select Pack</strong> ($59.99)
    </label>
  </div>
  <ul>
    <li>Offers over 95 channels</li>
    <li>$79.99 after the 24-month period</li>
  </ul>
</li>
<li class="mb-2">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" name="package-options" id="entertainment-pack" data-price="89.99" data-package="Commercial Entertainment Pack">
      <strong> Lower price Sports Package: Commercial Entertainment Pack</strong> ($89.99)
    </label>
  </div>
  <ul>
    <li>Offers over 105 channels, including ESPN & ESPN 2</li>
    <li>$99.99 after the 12-month period, and $119.99 afterwards</li>
  </ul>
</li>
<li class="mb-2">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" name="package-options" id="XTRA-pack" data-price="114.99" data-package="Commercial XTRA Pack">
    <label class="form-check-label" for="XTRA-pack">
      <strong>Reccomended: Commercial XTRA Pack</strong> ($114.99)
    </label>
  </div>
  <ul>
    <li>Offers over 185 channels, Regional Sports Networks, and Music Choice Premium</li>
    <li>$174.99 for the next 12 months, and $194.99 afterwards</li>
  </ul>
</li>
</ol>


</div>
</div>`;

          document.getElementById("package-container").innerHTML = packageInfo;

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
            .querySelectorAll("input[type='checkbox'][name='package-options']")
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
          updateTotalPrice();
        }
      }
    } else if (businessType === "private" || businessType === "individual") {
      // Similar nested if-else statements for private viewing

      if (sportsPackage === "yes") {
        if (spanishBusiness === "addOnPackage") {
          // Handle the combination: Public Viewing, Yes, Yes, All Spanish-speaking channels

          //update the script based on the boxes checked

          const packageInfo = `
            <div class="card">
<div class="card-body" >
<h2 class="card-title">Recommended Packages</h2>
<p class="card-text">We recommend the following packages for your business:</p>
<ol>
<li class="mb-2">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" name="package-options" id="commercial-pack" data-price="29.99" data-package="Commercial Basic Plus">
    <label class="form-check-label" for="commercial-pack">
      <strong>Lowest Price Option: Commercial Basic Plus</strong> ($29.99)
    </label>
  </div>
  <ul>
    <li>Offers over 45 channels</li>
  </ul>
</li>
<li class="mb-2">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" name="package-options" id="business-pack" data-price="59.99" data-package="Business Select Pack">
    <label class="form-check-label" for="business-pack">
      <strong>Lower Price Option: Business Select Pack</strong> ($59.99)
    </label>
  </div>
  <ul>
    <li>Offers over 95 channels</li>
    <li>$79.99 after the 24-month period</li>
  </ul>
</li>
<li class="mb-2">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" name="package-options" id="entertainment-pack" data-price="79.99" data-package="Business Entertainment Pack">
    <label class="form-check-label" for="entertainment-pack">
      <strong>2nd Sport Option: Business Entertainment Pack</strong> ($79.99)
    </label>
  </div>
  <ul>
    <li>Offers over 105 channels, including ESPN & ESPN 2</li>
    <li>$79.99 for 12 months, $99.99 afterwards</li>
  </ul>
</li>
<li class="mb-2">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" name="package-options" id="XTRA-pack" data-price="114.99" data-package="Business XTRA Pack" checked>
    <label class="form-check-label" for="XTRA-pack">
      <strong>Lower Price Sports Option: Business XTRA Pack</strong> ($114.99)
    </label>
  </div>
  <ul>
    <li>Offers over 185 channels, Regional Sports Networks, and Music Choice Premium</li>
    <li>$174.99 for the next 12 months, and $194.99 afterwards</li>
  </ul>
</li>
</ol>

<h2 class="card-title">International Add-On Packages</h2>
<p class="card-text">Enhance your viewing experience with these international add-on packages for just $9.99 each:</p>
<ol>
<li class="mb-2">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" name="international-options" id="deportes-package" data-price="9.99" data-addon="DirecTV Deportes" checked>
    <label class="form-check-label" for="deportes-package">
      <strong>Recommended: DirecTV Deportes</strong>
</label>
</div>
<ul>
<li>ESPN Deportes, TUDN, TyC Sports, GOLTV</li>
</ul>
</li>
<li class="mb-2">
<div class="form-check">
<input class="form-check-input" type="checkbox" name="international-options" id="mexico-package" data-price="9.99" data-addon="Mexico Plus">
<label class="form-check-label" for="mexico-package">
<strong>Mexico Plus</strong>
</label>
</div>
<ul>
<li>MN, Universo, A3S, Telemundo, UMas, and more</li>
</ul>
</li>
<li class="mb-2">
<div class="form-check">
<input class="form-check-input" type="checkbox" name="international-options" id="americas-package" data-price="9.99" data-addon="Americas Plus">
<label class="form-check-label" for="americas-package">
<strong>Americas Plus</strong>
</label>
</div>
<ul>
<li>PERU Magico, Discovery en Espanol, Telemundo, UMas, Hola TV, and more</li>
</ul>
</li>
</ol>

</div>
</div>`;

          document.getElementById("package-container").innerHTML = packageInfo;

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
            .querySelectorAll("input[type='checkbox'][name='package-options']")
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
          updateTotalPrice();
        } else if (spanishBusiness === "none") {
          console.log("Spanish-speaking add-on package: None");
          // Handle the combination: Public Viewing, Yes, None

          const packageInfo = `
            <div class="card">
<div class="card-body" >
<h2 class="card-title">Recommended Packages</h2>
<p class="card-text">We recommend the following packages for your business:</p>
<ol>
<li class="mb-2">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" name="package-options" id="commercial-pack" data-price="29.99" data-package="Commercial Basic Plus">
    <label class="form-check-label" for="commercial-pack">
      <strong>Lowest Price Option: Commercial Basic Plus</strong> ($29.99)
    </label>
  </div>
  <ul>
    <li>Offers over 45 channels</li>
  </ul>
</li>
<li class="mb-2">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" name="package-options" id="business-pack" data-price="59.99" data-package="Business Select Pack">
    <label class="form-check-label" for="business-pack">
      <strong>Lower Price Option: Business Select Pack</strong> ($59.99)
    </label>
  </div>
  <ul>
    <li>Offers over 95 channels</li>
    <li>$79.99 after the 24-month period</li>
  </ul>
</li>
<li class="mb-2">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" name="package-options" id="entertainment-pack" data-price="79.99" data-package="Business Entertainment Pack">
    <label class="form-check-label" for="entertainment-pack">
      <strong>2nd Sports Option: Business Entertainment Pack</strong> ($79.99)
    </label>
  </div>
  <ul>
    <li>Offers over 105 channels, including ESPN & ESPN 2</li>
    <li>$79.99 for 12 months, $99.99 afterwards</li>
  </ul>
</li>
<li class="mb-2">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" name="package-options" id="XTRA-pack" data-price="114.99" data-package="Business XTRA Pack" checked>
    <label class="form-check-label" for="XTRA-pack">
      <strong>Reccomended: Business XTRA Pack</strong> ($114.99)
    </label>
  </div>
  <ul>
    <li>Offers over 185 channels, Regional Sports Networks, and Music Choice Premium</li>
    <li>$174.99 for the next 12 months, and $194.99 afterwards</li>
  </ul>
</li>
</ol>


</div>
</div>`;

          document.getElementById("package-container").innerHTML = packageInfo;

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
            .querySelectorAll("input[type='checkbox'][name='package-options']")
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
          updateTotalPrice();
        } else if (spanishBusiness === "allChannels") {
          const packageInfo = `
            <div class="card">
<div class="card-body" >
<h2 class="card-title">Recommended Packages</h2>
<p class="card-text">We recommend the following packages for your business:</p>
<ol>
<li class="mb-2">
<div class="form-check">
<input class="form-check-input" type="checkbox" name="package-options" id="commercial-pack" data-price="39.98" data-package="Commercial Basic Plus + DirecTV Deportes">
<label class="form-check-label" for="commercial-pack">
  <strong>Lowest Price Option: Commercial Basic Plus + DirecTV Deportes</strong> ($29.99 + $9.99)
</label>
</div>
<ul>
<li>Offers over 45 channels in English + ESPN Deportes, TUDN, TyC Sports, GOLTV in Spanish</li>
</ul>
</li>
<li class="mb-2">
<div class="form-check">
<input class="form-check-input" type="checkbox" name="package-options" id="optimo-pack" data-price="99.99" data-package="COMERCIAL ÓPTIMO MÁS PACK" checked>
<label class="form-check-label" for="optimo-pack">
  <strong>COMERCIAL ÓPTIMO MÁS PACK</strong> ($99.99)
</label>
</div>
<ul>
<li>Access to Over 125 Channels</li>
</ul>
</li>
<li cl
</ol>


<h2 class="card-title">International Add-On Packages</h2>
<p class="card-text">Enhance your viewing experience with these international add-on packages for just $9.99 each:</p>
<ol>
<li class="mb-2">
<div class="form-check">
<input class="form-check-input" type="checkbox" name="international-options" id="mexico-package" data-price="9.99" data-addon="Mexico Plus">
<label class="form-check-label" for="mexico-package">
<strong>Mexico Plus</strong>
</label>
</div>
<ul>
<li>MN, Universo, A3S, Telemundo, UMas, and more</li>
</ul>
</li>
<li class="mb-2">
<div class="form-check">
<input class="form-check-input" type="checkbox" name="international-options" id="americas-package" data-price="9.99" data-addon="Americas Plus">
<label class="form-check-label" for="americas-package">
<strong>Americas Plus</strong>
</label>
</div>
<ul>
<li>PERU Magico, Discovery en Espanol, Telemundo, UMas, Hola TV, and more</li>
</ul>
</li>
</ol>



</div>
</div>`;

          document.getElementById("package-container").innerHTML = packageInfo;

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
            .querySelectorAll("input[type='checkbox'][name='package-options']")
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
          updateTotalPrice();
        }
      } else if (sportsPackage === "no") {
        if (spanishBusiness === "allChannels") {
          // Handle the combination: Public Viewing, No, Yes, All Spanish-speaking channels

          const packageInfo = `
            <div class="card">
<div class="card-body" >
<h2 class="card-title">Recommended Packages</h2>
<p class="card-text">We recommend the following packages for your business:</p>
<ol>
<li class="mb-2">
<div class="form-check">
<input class="form-check-input" type="checkbox" name="package-options" id="commercial-pack" data-price="39.98" data-package="Commercial Basic Plus + DirecTV Deportes" checked>
<label class="form-check-label" for="commercial-pack">
  <strong>Lowest Price Option: Commercial Basic Plus + DirecTV Deportes</strong> ($29.99 + $9.99)
</label>
</div>
<ul>
<li>Offers over 45 channels in English + ESPN Deportes, TUDN, TyC Sports, GOLTV in Spanish</li>
</ul>
</li>
<li class="mb-2">
<div class="form-check">
<input class="form-check-input" type="checkbox" name="package-options" id="optimo-pack" data-price="99.99" data-package="COMERCIAL ÓPTIMO MÁS PACK">
<label class="form-check-label" for="optimo-pack">
  <strong>COMERCIAL ÓPTIMO MÁS PACK</strong> ($99.99)
</label>
</div>
<ul>
<li>Access to Over 125 Channels</li>
</ul>
</li>
</ol>


<h2 class="card-title">International Add-On Packages</h2>
<p class="card-text">Enhance your viewing experience with these international add-on packages for just $9.99 each:</p>
<ol>
<li class="mb-2">
<div class="form-check">
<input class="form-check-input" type="checkbox" name="international-options" id="mexico-package" data-price="9.99" data-addon="Mexico Plus">
<label class="form-check-label" for="mexico-package">
<strong>Mexico Plus</strong>
</label>
</div>
<ul>
<li>MN, Universo, A3S, Telemundo, UMas, and more</li>
</ul>
</li>
<li class="mb-2">
<div class="form-check">
<input class="form-check-input" type="checkbox" name="international-options" id="americas-package" data-price="9.99" data-addon="Americas Plus">
<label class="form-check-label" for="americas-package">
<strong>Americas Plus</strong>
</label>
</div>
<ul>
<li>PERU Magico, Discovery en Espanol, Telemundo, UMas, Hola TV, and more</li>
</ul>
</li>
</ol>



</div>
</div>`;

          document.getElementById("package-container").innerHTML = packageInfo;

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
            .querySelectorAll("input[type='checkbox'][name='package-options']")
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
          updateTotalPrice();
        } else if (spanishBusiness === "addOnPackage") {
          // Handle the combination: Public Viewing, No, Yes, Spanish-speaking add-on package
          // Handle the combination: Public Viewing, No, No
          console.log("were in");
          const packageInfo = `
            <div class="card">
<div class="card-body" >
<h2 class="card-title">Recommended Packages</h2>
<p class="card-text">We recommend the following packages for your business:</p>
<ol>
<li class="mb-2">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" name="package-options" id="commercial-pack" data-price="29.99" data-package="Commercial Basic Plus" checked>
    <label class="form-check-label" for="commercial-pack">
      <strong>Lowest Price Option: Commercial Basic Plus</strong> ($29.99)
    </label>
  </div>
  <ul>
    <li>Offers over 45 channels</li>
  </ul>
</li>
<li class="mb-2">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" name="package-options" id="business-pack" data-price="59.99" data-package="Business Select Pack">
    <label class="form-check-label" for="business-pack">
      <strong>Higher Price Option:  Business Select Pack</strong> ($59.99)
    </label>
  </div>
  <ul>
    <li>Offers over 95 channels</li>
    <li>$79.99 after the 24-month period</li>
  </ul>
</li>
<li class="mb-2">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" name="package-options" id="entertainment-pack" data-price="79.99" data-package="Business Entertainment Pack">
    <label class="form-check-label" for="entertainment-pack">
      <strong>2nd Sports Option: Business Entertainment Pack</strong> ($79.99)
    </label>
  </div>
  <ul>
    <li>Offers over 105 channels, including ESPN & ESPN 2</li>
    <li>$79.99 for 12 months, $99.99 afterwards</li>
  </ul>
</li>
<li class="mb-2">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" name="package-options" id="XTRA-pack" data-price="114.99" data-package="Business XTRA Pack">
    <label class="form-check-label" for="XTRA-pack">
      <strong>Highest Value: Business XTRA Pack</strong> ($114.99)
    </label>
  </div>
  <ul>
    <li>Offers over 185 channels, Regional Sports Networks, and Music Choice Premium</li>
    <li>$174.99 for the next 12 months, and $194.99 afterwards</li>
  </ul>
</li>
</ol>

<h2 class="card-title">International Add-On Packages</h2>
<p class="card-text">Enhance your viewing experience with these international add-on packages for just $9.99 each:</p>
<ol>
<li class="mb-2">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" name="international-options" id="deportes-package" data-price="9.99" data-addon="DirecTV Deportes" checked>
    <label class="form-check-label" for="deportes-package">
      <strong>Recommended: DirecTV Deportes</strong>
</label>
</div>
<ul>
<li>ESPN Deportes, TUDN, TyC Sports, GOLTV</li>
</ul>
</li>
<li class="mb-2">
<div class="form-check">
<input class="form-check-input" type="checkbox" name="international-options" id="mexico-package" data-price="9.99" data-addon="Mexico Plus">
<label class="form-check-label" for="mexico-package">
<strong>Mexico Plus</strong>
</label>
</div>
<ul>
<li>MN, Universo, A3S, Telemundo, UMas, and more</li>
</ul>
</li>
<li class="mb-2">
<div class="form-check">
<input class="form-check-input" type="checkbox" name="international-options" id="americas-package" data-price="9.99" data-addon="Americas Plus">
<label class="form-check-label" for="americas-package">
<strong>Americas Plus</strong>
</label>
</div>
<ul>
<li>PERU Magico, Discovery en Espanol, Telemundo, UMas, Hola TV, and more</li>
</ul>
</li>
</ol>

</div>
</div>`;

          document.getElementById("package-container").innerHTML = packageInfo;

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
            .querySelectorAll("input[type='checkbox'][name='package-options']")
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
          updateTotalPrice();
        } else if (spanishBusiness === "none") {
          console.log("Spanish-speaking add-on package: None");
          // Handle the combination: Public Viewing, Yes, No

          const packageInfo = `
            <div class="card">
<div class="card-body" >
<h2 class="card-title">Recommended Packages</h2>
<p class="card-text">We recommend the following packages for your business:</p>
<ol>
<li class="mb-2">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" name="package-options" id="commercial-pack" data-price="29.99" data-package="Commercial Basic Plus" checked>
    <label class="form-check-label" for="commercial-pack">
      <strong>Lowest Price Option: Commercial Basic Plus</strong> ($29.99)
    </label>
  </div>
  <ul>
    <li>Offers over 45 channels</li>
  </ul>
</li>
<li class="mb-2">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" name="package-options" id="business-pack" data-price="59.99" data-package="Business Select Pack">
    <label class="form-check-label" for="business-pack">
      <strong>Lower Price Option: Business Select Pack</strong> ($59.99)
    </label>
  </div>
  <ul>
    <li>Offers over 95 channels</li>
    <li>$79.99 after the 24-month period</li>
  </ul>
</li>
<li class="mb-2">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" name="package-options" id="entertainment-pack" data-price="79.99" data-package="Business Entertainment Pack">
      <strong>2nd Sport Option: Business Entertainment Pack</strong> ($79.99)
    </label>
  </div>
  <ul>
    <li>Offers over 105 channels, including ESPN & ESPN 2</li>
    <li>$79.99 for 12 months, $99.99 afterwards</li>
  </ul>
</li>
<li class="mb-2">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" name="package-options" id="XTRA-pack" data-price="114.99" data-package="Business XTRA Pack">
    <label class="form-check-label" for="XTRA-pack">
      <strong>Reccomended: : Business XTRA Pack</strong> ($114.99)
    </label>
  </div>
  <ul>
    <li>Offers over 185 channels, Regional Sports Networks, and Music Choice Premium</li>
    <li>$174.99 for the next 12 months, and $194.99 afterwards</li>
  </ul>
</li>
</ol>


</div>
</div>`;

          document.getElementById("package-container").innerHTML = packageInfo;

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
            .querySelectorAll("input[type='checkbox'][name='package-options']")
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
          updateTotalPrice();
        }
      }
    }
  }

  // Call the updateTotalPrice function initially to set the recommended script text
  // Add event listener to the number of TVs input field
  //this is where all the reccomended script and info to closer logic is
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
      document.querySelectorAll("input[name='international-options']:checked")
    ).reduce((total, option) => total + parseFloat(option.dataset.price), 0);

    // Calculate the additional cost for TVs
    let numTvs = parseInt(document.getElementById("num-tvs").value);
    let tvCost = 0;

    let TVs = numTvs > 1 ? "TVs" : "TV";
    console.log(businessType);
    if (businessType == "public") {
      tvCost = numTvs > 1 ? (numTvs - 1) * 14.99 : 0;
    }
    if (businessType == "private") {
      //VIEWING: 1st–9th TV's: $8/mo. each; 10th–21st TV's: $4/mo. each; 22nd+ TV's: $2/mo. each.
      if (numTvs <= 9) {
        tvCost = numTvs > 1 ? (numTvs - 1) * 8 : 0;
      } else if (numTvs <= 21) {
        tvCost = 8 * (9 - 1) + 4 * (numTvs - 9);
      } else {
        tvCost = 8 * (9 - 1) + 4 * (21 - 9) + 2 * (numTvs - 21);
      }
    }
    if (businessType == "individual") {
      tvCost = numTvs > 1 ? (numTvs - 1) * 7.99 : 0;
    }

    let totalPrice = basePackagePrice + internationalPrice + tvCost;
    let selectedPackage = selectedPackageCheckbox.dataset.package;
    selectedInternational.push(
      //selectedInternationalCheckbox.dataset.addon
      Array.from(
        document.querySelectorAll("input[name='international-options']:checked")
      ).map((option) => option.dataset.addon)
    );

    let addOns = selectedInternational[0].length > 1 ? "add-ons" : "add-on";

    //make a string variable that prints "best sports value package" if sports package is selected and empty if not

    let packageInfo = "";
    let addOnINfo = "";
    let addOnPackageInfo = "";
    let addOnPrice = 0;
    let plus = "";
    let andMore = "";

    //public
    if (selectedPackage === "Commercial XTRA Pack") {
      packageInfo =
        " best overall value package, the Commercial Xtra Pack, It offers over 185 channels, including ESPN and Regional Sports Network. On top of this you also recieve Music Choice Premium for free which includes ad-free listening to over 80 channels, and all of this is included ";
    } else if (selectedPackage === "Commercial Entertainment Pack") {
      packageInfo =
        " best sports value package, the Commercial Entertainment Pack. It offers over 105 channels, including ESPN & ESPN 2,";
    } else if (selectedPackage === "Business Select Pack") {
      packageInfo = "Business Select Pack. It offers over 95 channels,";
    } else if (selectedPackage === "Commercial Basic Plus") {
      packageInfo = "Commercial Basic Plus. It offers over 45 channels,";
    } else if (selectedPackage === "Commercial Basic Plus + DirecTV Deportes") {
      packageInfo =
        "Commercial Basic Plus direcTV Deportes. It offers over 45 channels in English + ESPN Deportes, TUDN, TyC Sports, GOLTV in Spanish for";
      plus = "more ";
    } else if (selectedPackage === "COMERCIAL ÓPTIMO MÁS PACK") {
      packageInfo =
        " COMERCIAL ÓPTIMO MÁS PACK gives you access to Over 125 Channels for  $99.99 per month. ";
    } else if (selectedPackage === "COMERCIAL MÁS ULTRATM PACK") {
      packageInfo =
        " best overall value package, the COMERCIAL MÁS ULTRATM PACK, It offers over 150 channels";
    }

    //private
    else if (selectedPackage === "Business Entertainment Pack") {
      packageInfo =
        " best sports value package, the Business Entertainment Pack. It offers over 105 channels, including ESPN & ESPN 2,";
    } else if (selectedPackage === "Business XTRA Pack") {
      packageInfo =
        " best overall value package, the Business Xtra Pack, It offers over 185 channels, including ESPN and Regional Sports Network. On top of this you also recieve Music Choice Premium for free which includes ad-free listening to over 80 channels, and all of this is included ";
    }

    if (selectedInternational[0].includes("DirecTV Deportes")) {
      addOnPackageInfo += "ESPN Deportes, TUDN, TyC Sports";
      addOnPrice += 9.99;
    }

    if (selectedInternational[0].includes("Americas Plus")) {
      addOnPackageInfo +=
        "PERU Magico, Discovery en Espanol, Telemundo, UMas, Hola TV";
      addOnPrice += 9.99;
    }

    if (selectedInternational[0].includes("Mexico Plus")) {
      addOnPackageInfo += "MN, Universo, A3S, Telemundo, UMas";
      addOnPrice += 9.99;
    }

    if (
      selectedInternational[0].includes("Mexico Plus") ||
      selectedInternational[0].includes("Americas Plus")
    ) {
      andMore = " and more";
    }

    if (selectedInternational[0].length >= 1) {
      addOnInfo = `To add ${plus}spanish channels, I also recommend adding the international ${addOns} of  ${selectedInternational.join(
        ", "
      )} international package, which includes ${addOnPackageInfo} ${andMore} for just $${addOnPrice} per month.  
    \n By combining the ${selectedPackage} with the ${selectedInternational.join(
        ", "
      )} ${addOns}, you'll receive an extensive selection of channels tailored to your business needs for just $${totalPrice.toFixed(
        2
      )} per month.`;
    } else {
      addOnInfo = `for just $${totalPrice.toFixed(
        2
      )} per month with ${numTvs} ${TVs}`;
    }

    results.innerHTML = `<i>  Reccomended Script: <br> Right now we are offering FREE equipment, FREE standard installation, waiving all activation fees up front, PLUS giving you a FREE TV and Based on your preferences, I'd recommend our ${packageInfo}\n ${addOnInfo}`;
    document.getElementById(
      "recommended-script"
    ).innerHTML = `Information For Closers: <br>Selected Package: <strong>${selectedPackage}</strong> ${
      selectedInternational[0].length >= 1
        ? ` <br>Add on Packages: <strong> ${selectedInternational.join(
            ", "
          )}</strong> `
        : ""
    } <br> Number of TVs: <strong>${numTvs} ${TVs} </strong> <br> Price Per Month: <strong>$${totalPrice.toFixed(
      2
    )}</strong> <br>`;
    // Create the button element
    const copyButton = document.createElement("button");

    // Set the button text
    copyButton.textContent = "Copy text";
    // set button to btn btn-outline-primary"
    copyButton.className = "btn btn-outline-primary btn-sm";

    // Assign the copyToClipboard function to the button's onclick event
    copyButton.onclick = copyToClipboard;

    // Append the button to a specific element, in this example, we use an element with the ID 'button-container'
    document.getElementById("recommended-script").appendChild(copyButton);
    function copyToClipboard() {
      const textToCopy =
        document.getElementById("recommended-script").innerText;
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("Copy");
      textArea.remove();

      alert("Text copied to clipboard!");
    }
  }
  updateTotalPrice();
}

// Call the updateTotalPrice function initially to set the recommended script text
// $(document).ready(function() {
// Add click event listener to the submit button
$("#not-available-submit-btn").click(function () {
  // Collect the form data and concatenate it into one string
  var email = $("#email-input").val();
  var name = $("#name-input").val();
  var tv = $("input[name='tv-radio']:checked").val();
  var cable = $("#cable-input").val();
  var time = $("#time-input").val();
  //<input type="time" class="form-control" id="time-input">
  var infoString =
    "1. Time to reach owner: " +
    time +
    "\n\n" +
    "2. Owner Email: " +
    email +
    "\n\n" +
    "3. Name: " +
    name +
    "\n\n" +
    "4. Use TVs: " +
    tv +
    "\n\n" +
    "5. Current Cable Company: " +
    cable;

  // Copy the information to the clipboard
  navigator.clipboard.writeText(infoString);

  // Reset the form and hide it
  $("#notAvailableModal").modal("hide");

  // Show a success message after a delay of 500 milliseconds
  setTimeout(function () {
    alert("Text Copied");
  }, 500);
});

$(document).ready(function () {
  // Add click event listener to the "If Customer is available" button
  $("#customer-available-btn").click(function () {
    // Show the div when the button is clicked
    $("#customer-available-div").show();
  });
});

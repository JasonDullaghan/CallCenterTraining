/*
      function updatePrice() {
        Price = 0;
        if (document.getElementById("option1").checked) {
          Price += prices.spanishSportText;
        }
        if (document.getElementById("option2").checked) {
          Price += prices.spanishNotSportText;
        }
        document.getElementById("totalPrice").innerText =
          "$" + Price.toFixed(2);
      }
      function appendMoreOptionsButton(message, buttonMessage) {
        const moreOptionsButton = document.createElement("button");
        moreOptionsButton.innerText = buttonMessage;
        moreOptionsButton.onclick = function () {
          showMoreOptions(message);
          this.remove();
        };

        // Add the same styles as other buttons
        moreOptionsButton.style.marginRight = "10px";
        moreOptionsButton.style.padding = "10px 15px";
        moreOptionsButton.style.border = "none";
        moreOptionsButton.style.borderRadius = "4px";
        moreOptionsButton.style.backgroundColor = "#007bff";
        moreOptionsButton.style.color = "white";
        moreOptionsButton.style.fontWeight = "bold";
        moreOptionsButton.style.cursor = "pointer";
        moreOptionsButton.style.outline = "none";
        moreOptionsButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
        moreOptionsButton.onmouseover = function () {
          this.style.backgroundColor = "#0056b3";
        };
        moreOptionsButton.onmouseout = function () {
          this.style.backgroundColor = "#007bff";
        };

        result.innerHTML += "\n <br> <br>";
        results.appendChild(moreOptionsButton);
        //  document.body.appendChild(moreOptionsButton);
      }

      function showMoreOptions(message) {
        results.innerHTML += "<br>" + message;
        results.innerHTML +=
          "<br>" +
          " Mexico Plus: MN, Universo, A3S, Telemundo, UMas, and more <br> Americas PLus: PERU Magico, Discovery en Espanol, Telemundo, UMas, Hola TV, and more";
      }

      function displayPackageInfo(
        businessType,
        sportsPackage,
        spanishBusiness,
        spanishPackage
      ) {
        if (businessType === "public") {
          if (sportsPackage === "yes") {
            if (spanishBusiness === "yes") {
              if (spanishPackage === "allChannels") {
                const packageInfo = `
                <h2>Recommended Packages</h2>
<p>We recommend the following packages for your business:</p>
<ol>
  <li>
    <strong>Best Value: Business Entertainment Pack</strong> ($89.99)
    <ul>
      <li>Offers over 105 channels, including ESPN & ESPN 2</li>
      <li>$99.99 after the 12-month period, and $119.99 afterwards</li>
    </ul>
  </li>
  <li>
    <strong>Higher Price Option: Commercial XTRA Pack</strong> ($114.99)
    <ul>
      <li>Offers over 185 channels, Regional Sports Networks, and Music Choice Premium</li>
      <li>$174.99 for the next 12 months, and $194.99 afterwards</li>
    </ul>
  </li>
  <li>
    <strong>Lower Price Option: Business Select Pack</strong> ($59.99)
    <ul>
      <li>Offers over 95 channels</li>
      <li>$79.99 after the 24-month period</li>
    </ul>
  </li>
  <li>
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
    <strong>Recommended: DirecTV Deportes</strong>
    <ul>
      <li>ESPN Deportes, TUDN, TyC Sports, GOLTV</li>
    </ul>
  </li>
  <li>
    <strong>Mexico Plus</strong>
    <ul>
      <li>MN, Universo, A3S, Telemundo, UMas, and more</li>
    </ul>
  </li>
  <li>
    <strong>Americas Plus</strong>
    <ul>
      <li>PERU Magico, Discovery en Espanol, Telemundo, UMas, Hola TV, and more</li>
    </ul>
  </li>
</ol>
          `;
                document.getElementById("package-container").innerHTML =
                  packageInfo;
              }
            }
          }
        }
      }
        let Price = 0;
        const prices = {
          spanishSportText: 124.99,
          spanishNotSportText: 99.99,
          combineSpanish: 9.99,
          publicHighestPrice: 114.99,
        };
        results.innerText = "";
        let spanishSportText =
          "COMERCIAL MÁS ULTRA PACK $124.99 \n Access to Over 150 Channels including (ESPN, NFL NETWORK FS1, FS2, MLB NETWORK) First 24 Months ($144.99 afterwards)";
        let spanishNotSportText =
          "Comercial Optimo Mas Pack $99.99 First 24 months ($119.99 afterwards)";
        let lowestPriceOption =
          "Commericial Basic Plus offers over 45 channels ($29.99)";
        let publicHighestPrice =
          "Commercial XTRA Pack ($114.99) Offers over 185 channels + Regional Sports Networks + Music Choice Premium <br> Price listed above is for 12 months, next 12 months is ($174.99), afterwards ($194.99) \n";
        let businessSelect =
          "Business Select Pack ($59.99) Offers over 95 channels ($79.99 after 24 month period)";
        let businessEntertainment =
          "Business Entertainment Pack ($89.99) Offers over 105 channels Including ESPN & ESPN 2 ($99.99 after 12 month period, afterwards $119.99)";
        let DirecTVDeportes =
          "DirecTV Deportes: ESPN Deportes, TUDN. TyC Sports, GOLTV ";
        let MexicoPlus =
          " Mexico Plus: MN, Universo, A3S, Telemundo, UMas, and more";
        let AmericasPlus =
          "Americas PLus: PERU Magico, Discovery en Espanol, Telemundo, UMas, Hola TV, and more"; 
      
      */

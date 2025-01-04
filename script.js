document.addEventListener("DOMContentLoaded", function () {
  // Dynamic selection updates
  const housingTypeSelect = document.getElementById("housing-type");
  const cameraTypeSelect = document.getElementById("camera-type");
  const cameraType2Container = document.getElementById(
    "camera-type-2-container"
  );
  const audioSelect = document.getElementById("audio");
  const audioOptions = document.getElementById("audio-options");
  const megapixelSelect = document.getElementById("megapixel");
  const poeTypeContainer = document.getElementById("poe-type-container");
  const totalPriceElements = document.querySelectorAll(".total-price");
  const quantityInput = document.getElementById("quantity");
  const pcb = document.getElementById("pcb");
  const lensModel = document.getElementById("lens-model");
  const imgsDiv = document.getElementById("imgs").children;

  // console.log(megapixelSelect)

  function updateCameraOptions() {
    const cameraType = cameraTypeSelect.value;
    cameraType2Container.innerHTML = "";

    if (cameraType === "standalone") {
      cameraType2Container.innerHTML = `
                <label for="camera-type-2">Camera Type 2</label>
                <select id="camera-type-2">
                    <option value="">Select</option>
                    <option value="4g">4G</option>
                    <option value="wifi">WiFi</option>
                </select>
            `;
      const cameraType2Select = document.getElementById("camera-type-2");
      cameraType2Select.addEventListener("change", updateMegapixels);
      cameraType2Select.addEventListener("change", updateAudioOptions);
    } else if (cameraType === "special") {
      const housingType = housingTypeSelect.value;
      if (housingType === "dome") {
        cameraType2Container.innerHTML = `
                    <label for="camera-type-2">Camera Type 2</label>
                    <select id="camera-type-2">
                    <option value="">Select</option>
                        <option value="hd-fisheye">HD Fish-eye</option>
                        <option value="ip-fisheye">IP Fish-eye</option>
                        <option value="ip-two-way">IP Two-Way Audio</option>
                    </select>
                `;
        const cameraType2Select = document.getElementById("camera-type-2");
        cameraType2Select.addEventListener("change", updateMegapixels);
        cameraType2Select.addEventListener("change", updateAudioOptions);
      } else if (housingType === "bullet") {
        cameraType2Container.innerHTML = `
                    <label for="camera-type-2">Camera Type 2</label>
                    <select id="camera-type-2">
                    <option value="">Select</option>
                        <option value="hd-fisheye">HD Fish-eye</option>
                        <option value="ip-fisheye">IP Fish-eye</option>
                        <option value="hd-long-range">HD Long Range</option>
                        <option value="ip-long-range">IP Long Range</option>
                        <option value="ip-two-way">IP Two-Way Audio</option>
                    </select>
                `;
        const cameraType2Select = document.getElementById("camera-type-2");
        cameraType2Select.addEventListener("change", updateMegapixels);
        cameraType2Select.addEventListener("change", updateAudioOptions);
      }
    }
  }

  // Update megapixels based on camera selection
  function updateMegapixels(e) {
    const cameraType = e.target.value;
    let options = "";

    if (
      cameraType === "HD" ||
      cameraType === "hd-fisheye" ||
      cameraType === "hd-long-range"
    ) {
      options = `
      <option value="">Select</option>
                <option value="2mp">2MP</option>
                <option value="5mp">5MP</option>
            `;
    } else if (
      cameraType === "IP" ||
      cameraType === "ip-fisheye" ||
      cameraType === "ip-long-range" ||
      cameraType === "ip-two-way"
    ) {
      options = `
      <option value="">Select</option>
                <option value="3mp">3MP</option>
                <option value="4mp">4MP</option>
                <option value="5mp">5MP</option>
                <option value="6mp">6MP</option>
                <option value="8mp">8MP</option>
            `;
    } else if (cameraType === "4g") {
      options = `
      <option value="">Select</option>
      <option value="3mp">3MP</option>
      `;
    } else if (cameraType === "wifi") {
      options = `
      <option value="">Select</option>
      <option value="3mp">3MP</option>`;
    } else if (cameraTypeSelect.value === "standalone") {
      options = `
      <option value="">Select</option>
      <option value="3mp">3MP</option>`;
    }

    const cameraType2 = document.getElementById('camera-type-2')
    if(cameraType2){
      if(cameraType2.value.includes("two-way")){
        options = `
      <option value="">Select</option>
      <option value="4mp">4MP</option>`;
      }
    }

    const megapixelSelect = document.getElementById("megapixel");
    // console.log(megapixelSelect);
    megapixelSelect.innerHTML = "";
    megapixelSelect.innerHTML = options;
  }
  // Update audio options visibility
  function updateAudioOptions() {
    // console.log(cameraTypeSelect.value);

    if (
      cameraTypeSelect.value === "special" &&
      document.getElementById("camera-type-2").value === "ip-two-way"
    ) {
      audioOptions.classList.remove("hidden");
    } else {
      audioOptions.classList.add("hidden");
    }
  }

  // update PCB options
  function updatePCB() {
    let options = "";
    if (cameraTypeSelect.value == "HD") {
      options = `
      <option value="">Select</option>
                <option value="800B">800B</option>
                <option value="561F">561F</option>
            `;
    } else if (cameraTypeSelect.value == "IP") {
      options = `
      <option value="">Select</option>
      <option value="L34">L34</option>
      <option value="H2">H2</option>
      <option value="F5G">F5G</option>
  `;
    }

    const megaPix = document.getElementById('megapixel')
    if(megaPix){
      if(megaPix.value=='2mp'){
        options = `
      <option value="">Select</option>
                <option value="800B">800B</option>
                <option value="561F">561</option>
            `;
      }
    }

    const pcb = document.getElementById("pcb");
    pcb.innerHTML = "";
    pcb.innerHTML = options;
  }

  // update lens mm options
  function updateLensMM() {
    let options = "";
    const cameraType2Select = document.getElementById("camera-type-2");
    if (cameraType2Select) {
      if (cameraType2Select.value.includes("fisheye")) {
        options = `
      <option value="">Select</option>
                <option value="1_8mm">1.8mm</option>
            `;
      } else if (cameraType2Select.value.includes("long-range")) {
        options = `
      <option value="">Select</option>
                <option value="8mm">8mm</option>
                <option value="12mm">12mm</option>
                <option value="motorized">Motorized VF 2.8~13.5mm</option>
            `;
      } else if (cameraType2Select.value.includes("4g")) {
        options = `
      <option value="">Select</option>
                <option value="2_8mm">2.8mm</option>
                <option value="3_6mm">3.6mm</option>
            `;
      } else if (cameraType2Select.value.includes("wifi")) {
        options = `
      <option value="">Select</option>
                <option value="2_8mm">2.8mm</option>
                <option value="3_6mm">3.6mm</option>
            `;
      } else {
        options = `
      <option value="">Select</option>
      <option value="2_8mm">2.8mm</option>
      <option value="3_6mm">3.6mm</option>
      <option value="6mm">6mm</option>
  `;
      }
    } else {
      options = `
      <option value="">Select</option>
      <option value="2_8mm">2.8mm</option>
      <option value="3_6mm">3.6mm</option>
      <option value="6mm">6mm</option>
  `;
    }

    const pcb = document.getElementById("lens-mm");
    pcb.innerHTML = "";
    pcb.innerHTML = options;
  }

  // Update PoE options visibility
  function updatePoEOptions() {
    if (
      cameraTypeSelect.value === "ip" ||
      cameraTypeSelect.value === "ip-fisheye" ||
      cameraTypeSelect.value === "ip-long-range"
    ) {
      poeTypeContainer.classList.remove("hidden");
    } else {
      poeTypeContainer.classList.add("hidden");
    }
  }

  // Calculate total price (based on selections)
  function calculatePrice() {
    const quantity = parseInt(quantityInput.value, 10) || 1;
    let basePrice = 0; // Dummy base price

    //check for housing type

    if(cameraTypeSelect.value==='HD'){
      basePrice += 40;
    }
    else if(cameraTypeSelect.value==='IP'){
      basePrice += 60;
    }
    else if(cameraTypeSelect.value==='standalone'){
      basePrice += 80;
    }
    else if(cameraTypeSelect.value==='special'){
      basePrice += 100;
    }

    // check for the pcb
    if (pcb.value === "800B") {
      basePrice += 200;
    } else if (pcb.value === "561F") {
      basePrice += 180;
    } else if (pcb.value === "L34") {
      basePrice += 280;
    } else if (pcb.value === "H2") {
      basePrice += 290;
    } else if (pcb.value === "F5G") {
      basePrice += 480;
    }

    //check for the lens mode
    if (lensModel.value === "811") {
      basePrice += 40;
    } else if (lensModel.value === "10083") {
      basePrice += 60;
    } else if (lensModel.value === "10081") {
      basePrice += 95;
    }

    // Get the selected radio button
    const selectedRadio = document.querySelector('input[name="image"]:checked');

    // Check if a radio button is selected
    if (selectedRadio) {
      const selectedValue = selectedRadio.value;
      if (housingTypeSelect.value === "dome" && selectedValue === "image1") {
        basePrice += 80;
      } else if (
        housingTypeSelect.value === "dome" &&
        selectedValue === "image2"
      ) {
        basePrice += 100;
      } else if (
        housingTypeSelect.value === "bullet" &&
        selectedValue === "image1"
      ) {
        basePrice += 100;
      } else if (
        housingTypeSelect.value === "bullet" &&
        selectedValue === "image2"
      ) {
        basePrice += 120;
      }
    }

    //additonals
    const additionals = document.querySelectorAll('#additionals input[type="checkbox"]');
    additionals.forEach((element)=>{
      // console.log(element.checked);
      
      if(element.checked){
        // console.log(element.name);
        if(element.name === "silica-gel"){
          basePrice += 5;
      }
      else if(element.name==="screw-packet"){
        basePrice +=5
      }
      else if(element.name==="user-manual"){
        basePrice +=5
      }
      
    }})
    

    const total = basePrice * quantity;
    totalPriceElements.forEach((totalPriceElement) => {
      totalPriceElement.textContent = `Total: ₹${total}`;
    });
  }

  
  function imageRender() {
    const housingType = document.getElementById("housing-type").value;

    const imageDiv = document.getElementById("imgs");
    imageDiv.style.visibility = "visible";

    const image1 = imageDiv.getElementsByTagName("img")[0];
    const image2 = imageDiv.getElementsByTagName("img")[1];
    if (housingType === "dome") {
      const dom1 = "./img/dome.jpeg";
      const dom2 = "./img/dom1.jpeg";

      if (imageDiv) {
        if (image1) {
          image1.src = dom1;
          image2.src = dom2;
          //   console.log(imageDiv);
        } else {
          console.error("No <img> tag found in the #imgs div");
        }
      } else {
        console.log("error");
      }
    } else {
      const bullet1 = "./img/bullet1.jpeg";
      const bullet2 = "./img/bullet2.jpeg";

      if (imageDiv) {
        if (image1) {
          image1.src = bullet1;
          image2.src = bullet2;
          //   console.log(imageDiv);
        } else {
          console.error("No <img> tag found in the #imgs div");
        }
      } else {
        console.log("error");
      }
    }
    const images = imageDiv.querySelectorAll("*");
    // console.log(images)

    images.forEach((child) => {
      child.addEventListener("click", () => {
        // Toggle between 'selected' and 'unselected' classes
        if (child.classList.contains("unselected")) {
          child.classList.remove("unselected");
          // child.classList.add('selected');
        } else {
          child.classList.remove("selected");
          child.classList.add("unselected");
        }
      });
    });
  }

  function updateSelections(){
    const waterProofCap = document.querySelector('input[name="waterproof-cap"]')
    let evapad = document.querySelector('input[name="eva-pad"]');

    if(housingTypeSelect.value ==='bullet'){
      waterProofCap.checked = true
      waterProofCap.disabled = true
      evapad.checked = true
    }
  }


// Event Listeners
housingTypeSelect.addEventListener("change", function () {
  imageRender();
  updateCameraOptions();
  updatePoEOptions();
  calculatePrice();
  updateSelections()
  // updateLensMM()
});
  cameraTypeSelect.addEventListener("change", function (e) {
    updateCameraOptions(e);
    updateMegapixels(e);
    updatePoEOptions();
    calculatePrice();
    imageRender();
    updatePCB();
  });

  megapixelSelect.addEventListener("change", () => {
    updateAudioOptions();
    updateLensMM();
    updatePCB()
  });

  pcb.addEventListener("change", () => {
    calculatePrice();
  });
  lensModel.addEventListener("change", () => {
    calculatePrice();
  });

  document
    .querySelector("#update-btn")
    .addEventListener("click", calculatePrice);

  audioSelect.addEventListener("change", updateAudioOptions);
  quantityInput.addEventListener("input", calculatePrice);
  calculatePrice(); // Initial price calculation
});

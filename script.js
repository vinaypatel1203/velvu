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
  const totalPriceElement = document.getElementById("total-price");
  const quantityInput = document.getElementById("quantity");

  // console.log(megapixelSelect)

  function updateCameraOptions() {
    const cameraType = cameraTypeSelect.value;
    cameraType2Container.innerHTML = "";

    if (cameraType === "standalone") {
      cameraType2Container.innerHTML = `
                <label for="camera-type-2">Camera Type 2</label>
                <select id="camera-type-2">
                    <option value="4g">4G</option>
                    <option value="wifi">WiFi</option>
                </select>
            `;
      const cameraType2Select = document.getElementById("camera-type-2");
      cameraType2Select.addEventListener("change", updateMegapixels);
    } else if (cameraType === "special") {
      const housingType = housingTypeSelect.value;
      if (housingType === "dome") {
        cameraType2Container.innerHTML = `
                    <label for="camera-type-2">Camera Type 2</label>
                    <select id="camera-type-2">
                        <option value="hd-fisheye">HD Fish-eye</option>
                        <option value="ip-fisheye">IP Fish-eye</option>
                        <option value="ip-two-way">IP Two-Way Audio</option>
                    </select>
                `;
        const cameraType2Select = document.getElementById("camera-type-2");
        cameraType2Select.addEventListener("change", updateMegapixels);
      } else if (housingType === "bullet") {
        cameraType2Container.innerHTML = `
                    <label for="camera-type-2">Camera Type 2</label>
                    <select id="camera-type-2">
                        <option value="hd-fisheye">HD Fish-eye</option>
                        <option value="ip-fisheye">IP Fish-eye</option>
                        <option value="hd-long-range">HD Long Range</option>
                        <option value="ip-long-range">IP Long Range</option>
                        <option value="ip-two-way">IP Two-Way Audio</option>
                    </select>
                `;
        const cameraType2Select = document.getElementById("camera-type-2");
        cameraType2Select.addEventListener("change", updateMegapixels);
      }
    }
  }

  // Update megapixels based on camera selection
  function updateMegapixels(e) {
    console.log(e.target.value);

    // const cameraType = cameraTypeSelect.value;
    const cameraType = e.target.value;
    // try {
    //     const cameraType2 = document.getElementById("camera-type-2").value
    //     cameraType = cameraType2
    // } catch (error) {
    //     console.log("Element not found..");

    // }
    let options = "";

    if (
      cameraType === "HD" ||
      cameraType === "hd-fisheye" ||
      cameraType === "hd-long-range"
    ) {
      options = `
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
                <option value="3mp">3MP</option>
                <option value="4mp">4MP</option>
                <option value="5mp">5MP</option>
                <option value="6mp">6MP</option>
                <option value="8mp">8MP</option>
            `;
    } else if (cameraType === "4g") {
      options = `<option value="3mp">3MP</option>`;
    } else if (cameraType === "wifi") {
      options = `<option value="3mp">3MP</option>`;
    }
    const megapixelSelect = document.getElementById("megapixel");
    // console.log(megapixelSelect);
    megapixelSelect.innerHTML = "";
    megapixelSelect.innerHTML = options;
  }
  // Update audio options visibility
  function updateAudioOptions() {
    if (audioSelect.value === "yes") {
      audioOptions.classList.remove("hidden");
    } else {
      audioOptions.classList.add("hidden");
    }
  }

  // update PCB options
  function updatePCB(){ 
    let options = '';
    if(housingTypeSelect.value == 'dome'){
      options = `
                <option value="2mp">2MP</option>
                <option value="5mp">5MP</option>
            `;    
    }
    else if(housingTypeSelect.value == 'bullet'){
      options = `
      <option value="2mp">15MP</option>
      <option value="5mp">51MP</option>
  `;  
    }

    const pcb = document.getElementById('pcb')
    pcb.innerHTML = ''
    pcb.innerHTML = options;

  }


   // update lens mm options
   function updateLensMM(){ 
    let options = '';
    if(housingTypeSelect.value == 'dome'){
      options = `
                <option value="2mp">2MP</option>
                <option value="5mp">5MP</option>
            `;    
    }
    else if(housingTypeSelect.value == 'bullet'){
      options = `
      <option value="2mp">15MP</option>
      <option value="5mp">51MP</option>
  `;  
    }

    const pcb = document.getElementById('lens-mm')
    pcb.innerHTML = ''
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
    let basePrice = 100; // Dummy base price

    // Adjust price based on selections (simplified example)
    if (cameraTypeSelect.value === "special") {
      basePrice += 50; // Special camera adds $50
    }

    const total = basePrice * quantity;
    totalPriceElement.textContent = `Total: $${total}`;
  }

  // Event Listeners
  housingTypeSelect.addEventListener("change", function () {
    imageRender();
    updateCameraOptions();
    updatePoEOptions();
    calculatePrice();
    updatePCB()
    updateLensMM()
  });
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
    }
    else{
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
    const images = imageDiv.querySelectorAll("*")
    // console.log(images)

    images.forEach(child => {

  child.addEventListener('click', () => {
    // Toggle between 'selected' and 'unselected' classes
    if (child.classList.contains('unselected')) {
      child.classList.remove('unselected');
      child.classList.add('selected');
    } else {
      child.classList.remove('selected');
      child.classList.add('unselected');
    }
  });
});
  }

  cameraTypeSelect.addEventListener("change", function (e) {
    updateCameraOptions(e);
    updateMegapixels(e);
    updatePoEOptions();
    calculatePrice();
    imageRender();
  });

  audioSelect.addEventListener("change", updateAudioOptions);
  quantityInput.addEventListener("input", calculatePrice);
  calculatePrice(); // Initial price calculation
});

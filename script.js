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
  const lensMM = document.getElementById("lens-mm");
  const imgsDiv = document.getElementById("imgs").children;
  const bodyTypeSelect = document.getElementById('body-type')
  const nightVisionSelect = document.getElementById('night-vision')
  const modelSelect = document.getElementById('model')

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
        cameraType2Select.addEventListener('change', updateAudio)
        cameraType2Select.addEventListener('change', updateNightVision)
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
    const megapx = document.getElementById("megapixel").value;
    let options = "";
    let cameraType2 = document.getElementById('camera-type-2')
    if(cameraType2){
      if(cameraTypeSelect.value == "IP" && megapx == "5mp" && cameraType2.value.includes("two-way")){
        options = `
      <option value="">Select</option>
                <option value="A52">A52</option>
            `;
      }
      const pcb = document.getElementById("pcb");
    pcb.innerHTML = "";
    pcb.innerHTML = options;
    return;
    }

    if (cameraTypeSelect.value == "HD" && megapx == "2mp") {
      options = `
      <option value="">Select</option>
                <option value="800B">800B</option>
                <option value="561F">561F</option>
            `;
    }else if (cameraTypeSelect.value == "HD" && megapx == "5mp") {
      options = `
                <option value="">Select</option>
                <option value="2253">2253</option>
            `;
    }else if (cameraTypeSelect.value == "IP" && megapx == "5mp" && nightVisionSelect.value == "dark-light") {
      options = `
      <option value="">Select</option>
      <option value="H4PJ">H4PJ</option>
  `;}
     else if (cameraTypeSelect.value == "IP" && megapx == "5mp") {
      options = `
      <option value="">Select</option>
      <option value="L34">L34</option>
      <option value="Z55">Z55</option>
      <option value="H2">H2</option>
      <option value="H4PJ">H4PJ</option>
      <option value="F5G">F5G</option>
      <option value="A52">A52</option>
  `;
    }else if (cameraTypeSelect.value == "IP" && megapx == "6mp") {
      options = `
      <option value="">Select</option>
      <option value="sonySensor">Sony Sensor</option>
  `;
    }else if(document.getElementById("camera-type-2").value === 'wifi' && megapx == "3mp"){
      options = `
      <option value="">Select</option>
      <option value="wifi">WIFI</option>
  `;
    }else if(document.getElementById("camera-type-2").value === '4g' && megapx == "3mp"){
      options = `
      <option value="">Select</option>
      <option value="4g">4G</option>
  `;
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
      <option value="1_8mm">1.8mm</option>
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

  function updateLensModel() {
    let options = "";
    const megapx = document.getElementById("megapixel").value;
    const lensMM = document.getElementById("lens-mm").value;
    console.log(lensMM, megapx);
    
    const lensModel = document.getElementById("lens-model");
    const cameraTypeSelect = document.getElementById("camera-type");

    if (cameraTypeSelect.value === 'HD' && lensMM==='3_6mm' && megapx === '2mp') {
      options = `
    <option value="">Select</option>
              <option value="CW811">CW811</option>
              <option value="10083_Eco">10083 Eco</option>
          `;
    }else if (cameraTypeSelect.value === 'HD' && lensMM==='1_8mm') {
      options = `
    <option value="">Select</option>
              <option value="fisheye_Eco">Fisheye Eco</option>
          `;
    }else if (cameraTypeSelect.value === 'IP' && lensMM==='1_8mm') {
      options = `
    <option value="">Select</option>
              <option value="fisheye_Heavy">Fisheye Heavy</option>
          `;
    }else if (cameraTypeSelect.value === 'IP' && lensMM==='vari_focal') {
      options = `
    <option value="">Select</option>
              <option value="vari_focal">Vari Focal</option>
          `;
    }else if (lensMM==='3_6mm') {
      options = `
    <option value="">Select</option>
              <option value="10083_Heavy">10083 Heavy</option>
              <option value="10081_Eco">10081 Eco</option>
              <option value="10081_Heavy">10081 Heavy</option>
              <option value="10116">10116</option>
              <option value="CW811">CW811</option>
              <option value="10083_Eco">10083 Eco</option>
          `;
    }else if (lensMM==='6mm') {
      options = `
    <option value="">Select</option>
              <option value="10098_Heavy">10098 Heavy</option>
          `;
    }else if (lensMM==='2_8mm') {
      options = `
    <option value="">Select</option>
              <option value="10077_Eco">10077 Eco</option>
              <option value="10077_Heavy">10077 Heavy</option>
          `;
    }else if (lensMM==='8mm') {
      options = `
    <option value="">Select</option>
              <option value="8mm">8MM</option>
              `;
    }else if (lensMM==='12mm') {
      options = `
    <option value="">Select</option>
              <option value="12mm">12MM</option>
              `;
    }
    lensModel.innerHTML = "";
    lensModel.innerHTML = options;

  }

  // Update PoE options visibility
  function updatePoEOptions() {
    const cameraType2 = document.getElementById('camera-type-2')  
      
    if (cameraTypeSelect.value === "IP") {      
      poeTypeContainer.classList.remove("hidden");
    } 
    else if(cameraType2){            
        if(cameraType2.value==="ip-fisheye"||cameraType2.value==="ip-long-range"||cameraType2.value.includes('ip-two-way')){
          poeTypeContainer.classList.remove("hidden");
      }else{
        poeTypeContainer.classList.add("hidden");
      }
    }
    else{
      poeTypeContainer.classList.add("hidden");
    }
  }

  function updateModel(){
    const modelSelect = document.getElementById('model')
    const housingType = housingTypeSelect.value;
    let nightVision = document.getElementById('night-vision').value
    const cameraType2Select = document.getElementById('camera-type-2')
    let cameraType2 = cameraType2Select ? cameraType2Select.value.toLowerCase() : null;
    const bodyType = document.getElementById('body-type').value

    if(nightVision==='smart-dual-light'){
      nightVision = 'Dual'
    }else if(nightVision==='full-color'){
      nightVision = 'color'
    }
    else if(cameraType2.includes('long')){
          cameraType2 = 'long-range';      
    }

    if(cameraType2){
      if(cameraType2.includes('fish')){
        cameraType2 = 'fish';
      }
    }

    let options = "";


    // Define the models based on the conditions
    const models = [
      {
        "modelSelect": "MB-OI10-M",
        "bodyType": "metal",
        "cameraType2": null,
        "housingType": "bullet",
        "nightVision": "Color / Dual"
      },
      {
        "modelSelect": "MB-OI20-M (Black)",
        "bodyType": "metal",
        "cameraType2": null,
        "housingType": "bullet",
        "nightVision": "Color / Dual"
      },
      {
        "modelSelect": "MB-0I20-M",
        "bodyType": "metal",
        "cameraType2": null,
        "housingType": "bullet",
        "nightVision": "Color / Dual"
      },
      {
        "modelSelect": "MB-OI30-M",
        "bodyType": "metal",
        "cameraType2": null,
        "housingType": "bullet",
        "nightVision": "Color / Dual"
      },
      {
        "modelSelect": "MB-OI40-M",
        "bodyType": "metal",
        "cameraType2": null,
        "housingType": "bullet",
        "nightVision": "Dual"
      },
      {
        "modelSelect": "MB-VI10-M",
        "bodyType": "metal",
        "cameraType2": null,
        "housingType": "bullet",
        "nightVision": "Color / Dual"
      },
      {
        "modelSelect": "MB-VI20-M",
        "bodyType": "metal",
        "cameraType2": null,
        "housingType": "bullet",
        "nightVision": "Color / Dual"
      },
      {
        "modelSelect": "MB-V150F-M",
        "bodyType": "metal",
        "cameraType2": "Fish Eye",
        "housingType": "bullet",
        "nightVision": "Color / Dual"
      },
      {
        "modelSelect": "MD-O120-M",
        "bodyType": "metal",
        "cameraType2": null,
        "housingType": "dome",
        "nightVision": "Color / Dual"
      },
      {
        "modelSelect": "MD-VI40M-S",
        "bodyType": "metal",
        "cameraType2": null,
        "housingType": "dome",
        "nightVision": "Color / Dual"
      },
      {
        "modelSelect": "MD-V150-M",
        "bodyType": "metal",
        "cameraType2": null,
        "housingType": "dome",
        "nightVision": "Color / Dual"
      },
      {
        "modelSelect": "OEM 4G bullet",
        "bodyType": "Plastic",
        "cameraType2": "4G / WiFi",
        "housingType": "bullet",
        "nightVision": "Dual"
      },
      {
        "modelSelect": "OEM 4G dome",
        "bodyType": "Plastic",
        "cameraType2": "4G / WiFi",
        "housingType": "dome",
        "nightVision": "Dual"
      },
      {
        "modelSelect": "OEM HD dome 4 Light",
        "bodyType": "Plastic",
        "cameraType2": null,
        "housingType": "dome",
        "nightVision": "Color"
      },
      {
        "modelSelect": "PB-OI20-M",
        "bodyType": "Plastic",
        "cameraType2": null,
        "housingType": "bullet",
        "nightVision": "Color"
      },
      {
        "modelSelect": "PB-VH30",
        "bodyType": "Plastic",
        "cameraType2": "Fish Eye",
        "housingType": "bullet",
        "nightVision": "Color"
      },
      {
        "modelSelect": "PD-OI10-M",
        "bodyType": "Front metal",
        "cameraType2": null,
        "housingType": "dome",
        "nightVision": "Color / Dual"
      },
      {
        "modelSelect": "PD-OI20-M",
        "bodyType": "Plastic",
        "cameraType2": null,
        "housingType": "dome",
        "nightVision": "Color"
      },
      {
        "modelSelect": "PD-OI30-M",
        "bodyType": "Plastic",
        "cameraType2": null,
        "housingType": "dome",
        "nightVision": "Color"
      },
      {
        "modelSelect": "PD-OI40-M",
        "bodyType": "Plastic",
        "cameraType2": null,
        "housingType": "dome",
        "nightVision": "Color"
      },
      {
        "modelSelect": "MB-VI70-M",
        "bodyType": "metal",
        "cameraType2": "Vari-focal",
        "housingType": "bullet",
        "nightVision": "Color / Dual"
      },
      {
        "modelSelect": "MD-VI10-M",
        "bodyType": "metal",
        "cameraType2": null,
        "housingType": "dome",
        "nightVision": "Color / Dual"
      },
      {
        "modelSelect": "PB-VH20-M",
        "bodyType": "Plastic",
        "cameraType2": null,
        "housingType": "bullet",
        "nightVision": "Color / Dual"
      },
      {
        "modelSelect": "MD-VI30F-M",
        "bodyType": "metal",
        "cameraType2": "Fish Eye",
        "housingType": "dome",
        "nightVision": "Color / Dual"
      },
      {
        "modelSelect": "MB-VI80-M",
        "bodyType": "metal",
        "cameraType2": "long-range",
        "housingType": "bullet",
        "nightVision": "Color / Dual"
      },
      {
        "modelSelect": "MD-VI20M-S",
        "bodyType": "metal",
        "cameraType2": null,
        "housingType": "dome",
        "nightVision": "Color / Dual"
      },
      {
        "modelSelect": "MB-VW40M-S",
        "bodyType": "metal",
        "cameraType2": null,
        "housingType": "bullet",
        "nightVision": "Dual"
      },
      {
        "modelSelect": "PD-VH10F-M",
        "bodyType": "plastic",
        "cameraType2": 'Fish Eye',
        "housingType": "dome",
        "nightVision": "Dual"
      },
    ];


    let selectedModel = models.forEach((model) => {
     
      if(model.cameraType2 && cameraType2){

        if(model.cameraType2.toLowerCase().includes(cameraType2.toLowerCase())
          && model.bodyType.toLowerCase() === bodyType.toLowerCase()
          && model.housingType.toLowerCase() === housingType.toLowerCase()
          && model.nightVision.toLowerCase().includes( nightVision.toLowerCase())
            ){
              console.log("matched", model.modelSelect);  
              
              options += `<option value="${model.modelSelect}">${model.modelSelect}</option>`;
              return model;  
            }
      }else{
        if(!cameraType2 && !model.cameraType2 && model.bodyType.toLowerCase() === bodyType.toLowerCase()
          && model.housingType.toLowerCase() === housingType.toLowerCase()
          && model.nightVision.toLowerCase().includes( nightVision.toLowerCase())
            ){              
              options += `<option value="${model.modelSelect}">${model.modelSelect}</option>`;
              return model;  
            }
      } 
    });

    modelSelect.innerHTML = "";
    modelSelect.innerHTML = options;

  }


  function updateAudio(){
    const audio = document.getElementById("audio");    
    let options = "";
    audio.innerHTML = "";

      let cameraType2 = document.getElementById('camera-type-2')
      cameraType2 ? cameraType2 = cameraType2.value : cameraType2 = "";
      console.log(cameraType2);
      
      if(cameraType2.toLowerCase().includes('two-way')){
        options += `<option value="yes">Yes</option>`;
      }
      
    audio.innerHTML = options;
  }

  function updateNightVision(){
    const nightVision = document.getElementById("night-vision");
    let cameraType2 = document.getElementById('camera-type-2')
    cameraType2 ? cameraType2 = cameraType2.value : cameraType2 = "";
    console.log(cameraType2);
    let options = "";
    
    if(cameraType2.toLowerCase().includes('hd-fisheye')){
      options += `<option value="full-color">24 x 7 Full Color</option>`;
    }else if(cameraType2.toLowerCase().includes('ip-fisheye')){
      options += `<option value="smart-dual-light">Smart Dual Light</option>`;
    }
    else{
      options += `<option value="">Select</option>
                    <option value="normal">Normal</option>
                    <option value="dark-light">Dark Light</option>
                    <option value="smart-dual-light">Smart Dual Light</option>
                    <option value="full-color">24 x 7 Full Color</option>`;
    }
    nightVision.innerHTML = "";
    nightVision.innerHTML = options;

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

    if(nightVisionSelect.value === 'full-color'){
      basePrice += 0;
    }
    else if(nightVisionSelect.value === 'dark-light'){
      basePrice += 0;
    }
    else if(nightVisionSelect.value === 'smart-dual-light'){
      basePrice += 30;
    }
    else if(nightVisionSelect.value === 'normal'){
      basePrice += 30;
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

    const model = document.getElementById("model").value;
    console.log(model);
    

    const image1 = imageDiv.getElementsByTagName("img")[0];
    image1.src = `./img/${model}.png`;
    console.log(image1);
    
    // const image2 = imageDiv.getElementsByTagName("img")[1];
    // if (housingType === "dome") {
    //   const dom1 = "./img/dome.jpeg";
    //   const dom2 = "./img/dom1.jpeg";

    //   if (imageDiv) {
    //     if (image1) {
    //       image1.src = dom1;
    //       image2.src = dom2;
    //     } else {
    //       console.error("No <img> tag found in the #imgs div");
    //     }
    //   } else {
    //     console.log("error");
    //   }
    // } else {
    //   const bullet1 = "./img/bullet1.jpeg";
    //   const bullet2 = "./img/bullet2.jpeg";

    //   if (imageDiv) {
    //     if (image1) {
    //       image1.src = bullet1;
    //       image2.src = bullet2;
    //       //   console.log(imageDiv);
    //     } else {
    //       console.error("No <img> tag found in the #imgs div");
    //     }
    //   } else {
    //     console.log("error");
    //   }
    // }
    // const images = imageDiv.querySelectorAll("*");
    // // console.log(images)

    // images.forEach((child) => {
    //   child.addEventListener("click", () => {
    //     // Toggle between 'selected' and 'unselected' classes
    //     if (child.classList.contains("unselected")) {
    //       child.classList.remove("unselected");
    //       // child.classList.add('selected');
    //     } else {
    //       child.classList.remove("selected");
    //       child.classList.add("unselected");
    //     }
    //   });
    // });
  }

  function updateSelections(){
    const waterProofCap = document.querySelector('input[name="waterproof-cap"]')
    let evapad = document.querySelector('input[name="eva-pad"]');

    if(housingTypeSelect.value ==='bullet'){
      waterProofCap.checked = true
      waterProofCap.disabled = true
      evapad.disabled = false
    }
  }


// Event Listeners
housingTypeSelect.addEventListener("change", function () {
  // imageRender();
  updateCameraOptions();
  // updatePoEOptions();
  calculatePrice();
  updateSelections()
  // updateLensMM()
});
  cameraTypeSelect.addEventListener("change", function (e) {
    updateCameraOptions(e);
    updateMegapixels(e);
    updatePoEOptions();
    calculatePrice();
    // imageRender();
    updatePCB();
  });

  megapixelSelect.addEventListener("change", () => {
    updateAudioOptions();
    updateLensMM();
    updatePCB()
    updatePoEOptions();
  });
  nightVisionSelect.addEventListener("change", () => {
    updatePCB();
  });

  pcb.addEventListener("change", () => {
    calculatePrice();
  });
  lensMM.addEventListener("change", () => {
    updateLensModel();
  })
  lensModel.addEventListener("change", () => {
    calculatePrice();
  });

  bodyTypeSelect.addEventListener("change", () => {
    updateModel();
    imageRender();
  })
  modelSelect.addEventListener("change", () => {
    imageRender();
  })
  

  document
    .querySelector("#update-btn")
    .addEventListener("click", calculatePrice);

  audioSelect.addEventListener("change", updateAudioOptions);
  quantityInput.addEventListener("input", calculatePrice);
  calculatePrice(); // Initial price calculation
});

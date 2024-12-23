// Select the form and other necessary elements
const form = document.getElementById("camera-form");
const invoiceSection = document.getElementById("invoice-section");
const invoiceDetails = document.getElementById("invoice-details");
const downloadInvoiceButton = document.getElementById("download-invoice");
const imgsDiv = document.getElementById("imgs").children;

// Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get all form values
  const formData = new FormData(form);

  // Prepare the invoice details
  let invoiceContent = "<h3>Order Summary:</h3>";
  let totalPrice = 0;

  formData.forEach((value, key) => {
    invoiceContent += `
         <p><strong>${key
           .replace("-", " ")
           .toUpperCase()}:</strong> ${value}</p>`;

    // Example: Assuming some fields have prices associated with them
    if (key === "camera-type" && value === "HD") {
      totalPrice += 100; // Price for HD Camera
    } else if (key === "camera-type" && value === "IP") {
      totalPrice += 150; // Price for IP Camera
    }
    // Add more pricing logic for other fields as needed
  });

  // Append the total price to the invoice
  invoiceContent += `<p><strong>Total Price:</strong> $${totalPrice}</p>`;
  invoiceContent += `<div id="images-container"> </div>`;

  const images = document.createElement("images-container");

  imgsDiv.forEach(function (img) {
    // Option 1: Clone the image and append to the new container
    if (img.classList.contains("selected")) {
      const clonedImage = img.cloneNode(true); // Clone the image
      images.appendChild(clonedImage);
    }
  });

  // Display the invoice content
  invoiceDetails.innerHTML = invoiceContent;
  invoiceDetails.appendChild(images);
  invoiceSection.style.display = "block"; // Show the invoice section
  downloadInvoiceButton.style.display = "inline"; // Show the download button
});

downloadInvoiceButton.addEventListener("click", function () {
  const { jsPDF } = window.jspdf;

  // Use html2canvas to capture the invoiceDetails element
  html2canvas(invoiceDetails, { useCORS: true }).then(function (canvas) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const content = document.getElementById("invoice-section");

    doc.html(content, {
      callback: function (doc) {
        doc.save("Order_info.pdf");
      },
      x: 10, // x offset
      y: 10, // y offset
      width: 90, // Maximum width of content on A4 paper
      windowWidth: 1200,
    });
  });
});

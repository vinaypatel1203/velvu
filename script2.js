 // Select the form and other necessary elements
 const form = document.getElementById('camera-form');
 const invoiceSection = document.getElementById('invoice-section');
 const invoiceDetails = document.getElementById('invoice-details');
 const downloadInvoiceButton = document.getElementById('download-invoice');
 
 // Handle form submission
 form.addEventListener('submit', function(event) {
     event.preventDefault(); // Prevent form submission
 
     // Get all form values
     const formData = new FormData(form);
 
     // Prepare the invoice details
     let invoiceContent = '<h3>Order Summary:</h3>';
     let totalPrice = 0;
 
     formData.forEach((value, key) => {
         invoiceContent += `
         <p><strong>${key.replace('-', ' ').toUpperCase()}:</strong> ${value}</p>`;
 
         // Example: Assuming some fields have prices associated with them
         if (key === 'camera-type' && value === 'HD') {
             totalPrice += 100; // Price for HD Camera
         } else if (key === 'camera-type' && value === 'IP') {
             totalPrice += 150; // Price for IP Camera
         } 
         // Add more pricing logic for other fields as needed
     });
 
     // Append the total price to the invoice
     invoiceContent += `<p><strong>Total Price:</strong> $${totalPrice}</p>`;
 
     // Display the invoice content
     invoiceDetails.innerHTML = invoiceContent;
     invoiceSection.style.display = 'block'; // Show the invoice section
     downloadInvoiceButton.style.display = 'inline'; // Show the download button
 });
 
     downloadInvoiceButton.addEventListener('click', function() {
         const { jsPDF } = window.jspdf;
     
         // Use html2canvas to capture the invoiceDetails element
         html2canvas(invoiceDetails, { useCORS: true }).then(function(canvas) {
             const imgData = canvas.toDataURL('image/png');
             const imgWidth = 190; // Adjust width as needed
             const pageHeight = 295; // A4 page height in mm
             const imgHeight = (canvas.height * imgWidth) / canvas.width;
             const heightLeft = imgHeight;
     
             const doc = new jsPDF();
             let position = 0;
     
             // Add the image to the PDF
             doc.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
             position += heightLeft;
     
             // If the image height exceeds the page height, add a new page
             if (heightLeft >= pageHeight) {
                 doc.addPage();
                 position = 0; // Reset position for the new page
                 doc.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
             }
     
             // Save the PDF
             doc.save('invoice.pdf');
         }).catch(function(error) {
             console.error('Error generating PDF:', error);
         });
     });
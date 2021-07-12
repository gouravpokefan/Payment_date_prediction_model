console.log('Hello World');

// for ADD
// Get modal element
const modal = document.getElementById('simpleModal');
// Get open modal button
const modalBtn = document.getElementById('modalBtn');
 // Get close button
const closeBtn = document.getElementsByClassName('closeBtn')[0];

 // Listen for open click
 modalBtn.addEventListener('click', openModal);
 // Listen for close click
 closeBtn.addEventListener('click',closeModal);
 // Listen for outside click
 window.addEventListener('click', outsideClick);



 //Function to open modal
 function openModal() {
     modal.style.display = 'block';
 }

 // Function to close a modal
 function closeModal() {
     modal.style.display = 'none';
 }

 // Function to close modal if outside click
 function outsideClick(e) {
     if(e.target == modal){
         modal.style.displa = 'none';
     }
 }




 //FOR EDIT
 // Get modal element
const modal1 = document.getElementById('simpleModal1');
// Get open modal button
const modalBtn1 = document.getElementById('modalBtn1');
 // Get close button
const closeBtn1 = document.getElementsByClassName('closeBtn1')[0];

 // Listen for open click
 modalBtn1.addEventListener('click', openModal);
 // Listen for close click
 closeBtn1.addEventListener('click',closeModal);
 // Listen for outside click
 window.addEventListener('click', outsideClick);

 //Function to open modal
 function openModal() {
    modal1.style.display = 'block';
}

// Function to close a modal
function closeModal() {
    modal1.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick(e) {
    if(e.target == modal1){
        modal1.style.displa = 'none';
    }
}


//FOR DELETE
 // Get modal element
 const modal2 = document.getElementById('simpleModal2');
 // Get open modal button
 const modalBtn2 = document.getElementById('modalBtn2');
  // Get close button
 const closeBtn2 = document.getElementsByClassName('closeBtn2')[0];
 
  // Listen for open click
  modalBtn2.addEventListener('click', openModal);
  // Listen for close click
  closeBtn2.addEventListener('click',closeModal);
  // Listen for outside click
  window.addEventListener('click', outsideClick);
 
  //Function to open modal
  function openModal() {
     modal2.style.display = 'block';
 }
 
 // Function to close a modal
 function closeModal() {
     modal2.style.display = 'none';
 }
 
 // Function to close modal if outside click
 function outsideClick(e) {
     if(e.target == modal2){
         modal2.style.displa = 'none';
     }
 }




 /*const showHeaders = (headers) => {
     const tableArr = headers;
     console.log(tableArr);
     const tableMain = document.getElementById("table");
     let tableRowEle = '<tr class = "header>';
     tableArr.forEach(tableRow => {
         tableRowEle += `<th class = '${String(tableRow).toLowerCase()}'>` +String(tableRow)+'</th>';

     });
     tableRowEle += '</tr>';
     console.log(tableRowEle);
     tableMain.innerHTML = tableRowEle;
 }*/


 /*const showTableOnLoad = (data,check = true) =>{
     console.log(data);
     console.log(data[0]);
     console.log(Object.keys(data[0]))
     if(check)
     showHeaders(Object.keys(data[0]));
     const tableArr = data;
     const tableMain = document.getElementById("main");
     tableArr.forEach(tableRow =>{
            let tableRowEle = '<tr>';
            Object.entries(tableRow).forEach(entry =>{
                const[key , value] = entry;
                tableRowEle += `<td class="${key}">` + value + '</td>';
            });
            tableRowEle += '</tr>'
            tableMain.innerHTML += tableRowEle;
     });
 }

 //initial loading
 	const fetchTableData = ()=>{
 		fetch('http://localhost:8080/H2HBABBA1444/fetch.do')
 		.then(response =>{
 			return response.json()
 		})
 		.then(jsonResult =>{
 			showTableOnLoad(jsonResult)
 		})
 		.catch(error =>{
 			console.log(error)
 		})
 	}
 	
 	(
 		function(){
 			fetchTableData()
 		}
 	)()
 	*/
 
 
 
 /*const enterTableData = data => {
	    const tableBody = document.getElementById('main');
	  
	    let tabData = '';
	  
	    for (let row of data) {
	      tabData += `<tr>
	                      <td class ="align-right"><input type="checkbox" id="check-box"></td>
	                
	                      <td class="align-right">${row.cust_number}</td>
	                      <td class="align-right">${row.invoice_id}</td>
	                      <td class="align-right">${row.due_in_date}</td>
	                      <td class="align-right">${row.total_open_amount}</td>
	                      <td class="align-right">${row.predicted_payment_date|| "---"}</td> 
	                     
	                  </tr>`;
	      
	    }
	    tableBody.innerHTML += tabData;
	  };
	  //Fetching the json from back end
	  const getJsonData = () => {
	    fetch('http://localhost:8080/H2HBABBA1444/fetch.do')
	      .then(res => {
	        console.log(res);
	      })
	      .then(data => {
	        enterTableData(data);
	        console.log(data);
	      })
	      .catch(err => {
	        console.log('ERROR', err);
	        enterTableData([]);
	      });
	  };
	  //Initial Loading
	  (
			  function() {
				  getJsonData();
			  }
			  
	  )()*/
	
 
 
 

 const submit = ()=>{
     showHeaders();
     const Customer_Id = document.getElementById("Customer").value;
     const Invoice_id = document.getElementById("Invoice").value;
     const Due_date = document.getElementById("Due_date").value;
     const Invoice_amnt= document.getElementById("Invoice_amnt").value;
     const Predicted_date = document.getElementById("Predicted_date").value;
     table.innerHTML += `<tr><td>${Customer_Id}</td><td>${Invoice_id}</td><td>${Due_date}</td><td>${Invoice_amnt}</td><td>${Predicted_date}</td>`
     showTableOnLoad(false);
     console.log(Customer_Id,Invoice_id,Due_date,Invoice_amnt,Predicted_date);

 };
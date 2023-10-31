let myInfo = {
    name: "Pursalane Faye",
    address: "121 Main Street",
    city: "Pittsburgh",
    state: "Pennsylvania",
    zip: "16235",

    /* other properties not shown */
  };
  
  function printContact(contact) {
    console.log(`
    ${myInfo.name}
    ${myInfo.address}
    ${myInfo.city}, ${myInfo.state} ${myInfo.zip}`);
   

  }
  
  printContact(myInfo);
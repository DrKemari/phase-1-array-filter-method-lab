// Code your solution here
function findMatching(drivers, query) {
    return drivers.filter(driver =>
      driver.toLowerCase() === query.toLowerCase()
    );
  }

  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver =>
      driver.toLowerCase().startsWith(query.toLowerCase())
    );
  }
  
  function matchName(drivers, query) {
    return drivers.filter(driver =>
      driver.name === query
    );
  }

  const drivers = [
    { name: "Bobby", hometown: "Pittsburgh" },
    { name: "Sammy", hometown: "New York" },
    { name: "Sally", hometown: "Cleveland" },
    { name: "Annette", hometown: "Los Angeles" },
    { name: "Bobby", hometown: "Tampa Bay" }
  ];
  
  console.log(findMatching(["Bobby", "Sammy", "Sally"], "bobby"));
  
  console.log(fuzzyMatch(["Bobby", "Sammy", "Sally"], "Sa"));
  
  console.log(matchName(drivers, "Bobby"));
  
  
  
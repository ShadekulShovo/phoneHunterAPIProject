const searchPhone = () => {
  document.getElementById("searchResult").innerHTML = "";

  const searchFild = document.getElementById("inputSection");

  const searchText = searchFild.value;
  console.log(searchText);

  searchFild.value = "";

  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => displaySearchResult(data.data));
};

// Main

const displaySearchResult = (data) => {
  console.log(data);
  const searchResult = document.getElementById("searchResult");

  data.forEach((phoneData) => {
    console.log(phoneData);
    const div = document.createElement("div");
    div.innerHTML = `
            
            <div class="col">
            <div class="card h-100">
              <img src="${phoneData.image}" class="card-img-top w-50 p-3 rounded mx-auto d-block" alt="...">
              <div class="card-body">
                <h5 class="card-title">Name: ${phoneData.phone_name}</h5>
                <h6>Brand: ${phoneData.brand}</h6>
                <div>
                <button onclick="loadPhoneName('${phoneData.slug}')" type="button" class="btn btn-primary">Show Details</button>
                
                </div>
    
              </div>
            </div>
          </div>
            `;
    searchResult.appendChild(div);
  });
};

const loadPhoneName = (id) => {
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  console.log(url);

  fetch(url)
    .then((response) => response.json())
    .then((data) => displayphoneDetail(data));
};

// Cards

// Details section

const displayphoneDetail = (phone) => {
  const countryDiv = document.getElementById("phoneDetails");
  countryDiv.innerHTML = `
    
        <h2></h2>
        <div class="card mb-3 mt-3">
            <div class="row g-0">
            <div class="col-md-4">
                 <img src="${
                   phone.data.image
                 }" class="img-fluid mt-5 rounded mx-auto d-block" alt="...">
            </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title fw-bold">${phone.data.name}</h5>
                    <p class="card-text lh-lg">
                    
                    <br> <span class="fw-bold">Brand: </span> ${
                      phone.data.brand
                    }
                    
                    <br> <span class="fw-bold">ReleaseDate: </span> ${
                      phone.data.releaseDate
                        ? phone.data.releaseDate
                        : "No ReleaseDate info"
                    }
    
                     <br> <span class="fw-bold">ChipSet: </span> ${
                       phone.data.mainFeatures.storage
                     }
                     <br><span class="fw-bold">Memory: </span> ${
                       phone.data.mainFeatures.memory
                     }
                    
                    <br><span class="fw-bold">Display Size : </span> ${
                      phone.data.mainFeatures.displaySize
                    }
                    <br><span class="fw-bold">Storage : </span> ${
                      phone.data.mainFeatures.storage
                    }
                    <br><span class="fw-bold">Sensors : </span> ${
                      phone.data.mainFeatures.sensors
                    }
                    <br><span class="fw-bold">Bluetooth : </span> ${
                      phone.data.others.Bluetooth
                    }
                    <br><span class="fw-bold">WLAN : </span> ${
                      phone.data.others.WLAN
                    }
                    <br><span class="fw-bold">GPS : </span> ${
                      phone.data.others.GPS
                    }
                    <br><span class="fw-bold">USB : </span> ${
                      phone.data.others.USB
                    }
                    <br><span class="fw-bold">Radio : </span> ${
                      phone.data.others.Radio
                    }
                    <br><span class="fw-bold">NFC : </span> ${
                      phone.data.others.NFC
                    }
                  
                    
                    
                    
                    </p>
                    
                    
                </div>
        </div>
        </div>
        </div>
        
        `;
  console.log(phone);
};

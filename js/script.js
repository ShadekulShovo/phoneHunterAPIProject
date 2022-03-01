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

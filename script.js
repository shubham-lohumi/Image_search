const searchForm = document.getElementById("search-form");
const searchbox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");
let keyword = "";
const accessKey = "3S3CNyuPAp65EJ1LglKZ6XMA_hErFnnLtzXqoTlIbGM";
let page = 1;
async function searchImage() {
  const prev=searchbox.value;
  if(keyword!==prev){
    page=1;
    keyword = prev;
    searchResult.innerHTML=""; 
  }

  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
  const respose = await fetch(url);
  const data = await respose.json();
  const results = data.results;
  results.map((result) => {
    
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.classList.add("hover-image");
    const imagelink = document.createElement("a");
    imagelink.href = result.links.html;
    imagelink.target = "_blank";
    imagelink.appendChild(image);
    image.style.height = "300px";
    image.style.width = "300px";
    image.style.objectFit = "cover";
    image.style.borderRadius = "6px";
    

    searchResult.appendChild(imagelink);
  });
  showMoreBtn.style.display = "block";
}
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchImage();
});

showMoreBtn.addEventListener("click", async () => {
  page++;
  await searchImage();
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
});

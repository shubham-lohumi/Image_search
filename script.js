const searchForm =document.getElementById("search-form");
const searchbox =document.getElementById("search-box");
const searchResult =document.getElementById("search-result");
const showMoreBtn =document.getElementById("show-more-btn");
let keyword="";
const accessKey="3S3CNyuPAp65EJ1LglKZ6XMA_hErFnnLtzXqoTlIbGM";
let page=1;
async function searchImage() {
    keyword=searchbox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const respose=await fetch(url);
    const data =await respose.json();
    const results=data.results;
    results.map((result)=>{
        const image=document.createElement("img");
        image.src=result.urls.small;
        const imagelink=document.createElement("a");
        imagelink.href=result.links.html;
        imagelink.target="_blank";


        imagelink.appendChild(image);
        searchResult.appendChild(imagelink);
    });
    showMoreBtn.style.display="block";
}
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImage();
});
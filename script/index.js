//To load items
function loadCategories(){
    //1-Fetch the data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    
    //2-Convert promise to json
    .then(response => response.json())

    //3-sent data to display categories
    .then(data => displayCategories(data.categories))
    

}

// To load videos
function loadVideos(){
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(response => response.json())
    .then(data => displayVideos(data.videos))
}


//function to display categories
function displayCategories(categories){
    //4-get the container where we have to show the data
    const categoryContainer = document.getElementById('category-container');

    //loop operation on array of object

    for(cat of categories){
        // console.log(cat);

        //create element
        const categoryDiv = document.createElement('div');
        categoryDiv.innerHTML = `
        <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `
      //append
      categoryContainer.append(categoryDiv);
    }
     
}


//function to display Videos
const displayVideos =(videos)=>{
    const videoContainer = document.getElementById('video-container');

    videos.forEach(video => {
        //console.log(video)

        const videoCard = document.createElement('div');
        videoCard.innerHTML = `
        <div class="card bg-base-100 shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        `

        videoContainer.append(videoCard);
        
    });


}


loadCategories();
loadVideos();

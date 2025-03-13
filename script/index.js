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

//to filter content types



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
        <button onclick="loadCategoryVideos(${cat.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `
      //append
      categoryContainer.append(categoryDiv);
    }
     
}


//function to display Videos
const displayVideos =(videos)=>{
    const videoContainer = document.getElementById('video-container');

    //To clear all data and load by button click
    videoContainer.innerHTML = "";

    videos.forEach(video => {
        //console.log(video)

        const videoCard = document.createElement('div');
        videoCard.innerHTML = `
        <div class="card bg-base-100">
            <figure class="relative">
              <img class="w-full h-[150px] object-cover"
                src="${video.thumbnail}"
                alt="Shoes" />
                <span class="absolute text-sm bottom-2 right-2 bg-black text-white px-2 rounded">3hrs 56 min ago</span>
            </figure>
            
            <div class="flex gap-3 px-0 py-5">
                <div class="profile">
                    <div class="avatar">
                        <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                          <img src="${video.authors[0].profile_picture}" />
                        </div>
                      </div>

                </div>
                <div class="intro">
                    <h2 class="text-sm font-semibold">Shape of You</h2>
                    <p class="text-sm text-gray-400 flex gap-1">${video.authors[0].profile_name} <img class="w-5 h-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt=""></p>
                    <p class="text-sm text-gray-400 flex gap-">${video.others.views}</p>

                </div>
              
            </div>
          </div>
        `

        videoContainer.append(videoCard);
        
    });


}

const loadCategoryVideos =(id)=>{
  
  const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}
  
  `
  console.log(url);

  fetch(url)
  .then(response => response.json())
  .then(data =>displayVideos(data.category))

}


loadCategories();
// loadVideos();

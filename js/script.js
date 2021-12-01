async function searchVideos() {

    let div = document.getElementById("videos_div");

    let videos = document.getElementById("video").value;
    // console.log('videos:', videos)

    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${videos}&type=video&key=${your_API_Key}&maxResults=10&regionCode=IN`);

    let data = await res.json();
    // console.log('data:', data)

    for({
        id: {videoId},
        
        } of data.items){
            
            let video_frame = document.createElement("iframe");
            
            video_frame.src = `https://www.youtube.com/embed/${videoId}`;
            video_frame.allow="fullscreen";
            video_frame.classList.add("video");

            div.appendChild(video_frame);
    }

}
searchVideos();

const container = document.querySelector(".container");

document.querySelector("#menu-button").addEventListener("click", () => {
    container.classList.toggle("active");
});

function verifyResizeWindows() {
    if(window.innerWidth <= 768) {
        container.classList.remove('active');
    }
    else {
        container.classList.add('active');
    }
}

verifyResizeWindows();

window.addEventListener('resize', () => {
    verifyResizeWindows();
});

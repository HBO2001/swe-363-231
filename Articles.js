posts =
[

    {
        src:"https://wallpapers.com/images/high/wrestling-ring-background-vilcr2za82qstuam.webp",

        date: new Date ("2023-10-02:00:00.000Z"),

        title:"My Opinion on Wrestling",

        brief:"How good is wrestling today? Is the wrestling business successful in the past few years? How good is the weekly product made by companies like WWE, AEW etc.",

        link: "#",

        tags:["Wrestling", "WWE", "AEW"]
        
    },

    {

        src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c03839d6-5a63-47cf-830e-3a506235e717/dfstx3d-88cd5c41-0839-43d9-b21b-1351267c259d.png/v1/fill/w_1382,h_578,q_70,strp/japan_city_streets__widescreen__by_khurtspencer_dfstx3d-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MwMzgzOWQ2LTVhNjMtNDdjZi04MzBlLTNhNTA2MjM1ZTcxN1wvZGZzdHgzZC04OGNkNWM0MS0wODM5LTQzZDktYjIxYi0xMzUxMjY3YzI1OWQucG5nIiwiaGVpZ2h0IjoiPD04MDQiLCJ3aWR0aCI6Ijw9MTkyMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC9jMDM4MzlkNi01YTYzLTQ3Y2YtODMwZS0zYTUwNjIzNWU3MTdcL2todXJ0c3BlbmNlci00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.cuFzEaXKmAu2vu3XvCAXR938j-w6dmURfveRqzUUSCs",

        date: new Date ("2023-09-15:00:00.000Z"),

        title: "Japanese Culture",

        brief: "Learn about everything related to Japanese culture, like the food, temples, traditions, and people",

        link: "#",

        tags:["Japan", "Fuji", "Ramen"]

    },

    {

        src: "https://i.ytimg.com/vi/G6Cnoyyhu3o/maxresdefault.jpg",
  
        date: new Date ("2023-09-15:00:00.000Z"),

        title: "Japanese Culture",

        brief: "Many people know about all-time comedy classic shows like Friends, Fresh Prince of Bel-air, and Drake & Josh. Other Genres like horror, drama, and romance have their popular shows, but what about the lesser famous genres like thriller, Anime, Stop Motion",

        link: "#",

        tags:["TV", "Thriller", "Anime"]


    },

]

let postsHTML = ``

for (post of posts){

    // generate tags 
    tagsElement = `<ul class="tags">`
    for (tag of post.tags) {
        tagsElement += `<li><a>${tag}</a></li>`
    }
    tagsElement += `</ul>` 

    // Generate the post
    elementString = 
    `<div class="blog-post">
            <img src="${post.src}" alt="Sample Image">
            <div class="date">${post.date.toDateString()}</div>
            <h3>${post.title}</h3>
            <p>${post.brief}</p>
            <a href="${post.link}">Read More</a>
            ${tagsElement}
        </div>
    `
    //concat with postsHTML
    postsHTML += elementString
}

//append the child to posts
document.querySelector("#posts").innerHTML = postsHTML 
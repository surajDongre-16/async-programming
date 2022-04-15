

let moving_img=[
    "https://i.ytimg.com/vi/bweRG6WueuM/maxresdefault.jpg",
"https://www.thebatman.com/images/share.jpg",
"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/03/25/1196050-rrr-full-form-final.jpg",
"https://vl-media.fr/wp-content/uploads/2022/01/Doctor-strange.jpg"
]

let slide=document.getElementById("slideshow")
let i=0;

let img=document.createElement("img")
setInterval(function(){
    if(i==moving_img.length){
    i=0
    }
    slide.innerHTML=null
    img.src=moving_img[i]
    slide.append(img)
    i++

},3000)


let info=[
            {name : "RRR", release : "25 Mar 2022", imdb : 8.9, poster : "https://www.pinkvilla.com/imageresize/_rrr_postponed.jpg?width=752&format=webp&t=pvorg"},
            {name : "Gangubai Kathiawadi ", release : "25 Feb 2022 ", imdb : 7, poster : "https://static.toiimg.com/photo/89414066.jpeg"},
            {name : "Bachchhan Paandey ", release : "18 Mar 2022 ", imdb : 7.8  , poster : "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Bachchhan_Paandey_poster.jpg/220px-Bachchhan_Paandey_poster.jpg"},
            {name : "Radhe Shyam ", release : "11 Mar 2022 ", imdb : 6.9, poster : "https://images.indianexpress.com/2020/10/Beats-Of-Radhe-Shyam-1200.jpg"},
            {name : "Attack: Part 1", release : "1 Apr 2022", imdb : 8.3, poster : "https://m.media-amazon.com/images/M/MV5BMzQxMGMzM2YtMWEwNi00ZGRkLWI1ZmMtMWJlZGE4NmIyMzBlXkEyXkFqcGdeQXVyOTE2NDU1NDM@._V1_.jpg"},
            {name : "Spider-Man: No Way Home", release : "16 Dec 2021", imdb : 8.5 , poster : "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg"},
            {name : "Jhund", release : "4 Mar 2022", imdb : 9 , poster : "https://m.media-amazon.com/images/M/MV5BNmZmODk1ODAtOGI5My00MTZhLTgyOTUtZTUxNDNiMDM5ZjcyXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg"},
            {name : "Geharaiyan", release : "11 Feb 2022", imdb : 6.1 , poster : "https://aniportalimages.s3.amazonaws.com/media/details/4444444444444rwerwerwrwer.jpg"},
            {name : "The Kashmir Files", release : "11 Mar 2022 ", imdb : 8.3 , poster : "https://feeds.abplive.com/onecms/images/uploaded-images/2022/02/08/784603cb50f7397ba58cf07c5e73ab2a_original.jpg"},
            {name : "K.G.F: Chapter 2", release : "14 Apr 2022", imdb : 9.8  , poster : "https://cdn.gulte.com/wp-content/uploads/2022/04/the-battleground-looks-set-its-going-to-be-intense-trailer-of-kgf-chapter-2-to-be-launched-on-27th-march-at-6-40-pm-001.jpg"},
            {name : "Shang-Chi and The Legend of The Ten Rings", release : "2 Sept 2021", imdb : 7.4 , poster : "https://images.thedirect.com/media/article_full/shang-chi-review-mcu.jpg"},
            {name : "Pawankhind", release : "18 Feb 2022", imdb : 9.9, poster : "https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Pawankhind_film.jpg/220px-Pawankhind_film.jpg"},
            {name : "Bhuj: The Pride of India", release : "13 Aug 2021", imdb :5.4  , poster : "https://images.indianexpress.com/2021/07/WhatsApp-Image-2021-07-06-at-16.58.16.jpeg"},
            {name : "Bheemla Nayak", release : "25 Feb 2022", imdb : 7.6 , poster : "https://upload.wikimedia.org/wikipedia/en/b/bb/Bheemla_Nayak.jpg"},
            {name : "Harry Potter 20th Anniversary: Return to Hogwarts", release : "1 Jan 2022", imdb : 8 , poster : "https://m.media-amazon.com/images/M/MV5BNTZkNWEyZTgtYzJlOS00OWNiLTgwZjMtZGU5NTRhNDNjOTRhXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_FMjpg_UX1000_.jpg"},
            {name : "Pushpa: The Rise", release : "17 Dec 2021", imdb : 7.9 , poster : "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/pushpa--the-rise-et00129538-08-12-2021-01-21-46.jpg"},
            {name : "Badhaai Do", release : "11 Feb 2022", imdb :  7.3  , poster : "https://assetscdn1.paytm.com/images/cinema/2_1-14a1e050-89e2-11ec-924d-7774e76f6de2.jpg"},
            {name : "Tadap", release : " 3 Dec 2021", imdb : 5.6 , poster : "https://m.media-amazon.com/images/M/MV5BMWUyNzBjNmEtOGM2NS00NDg3LTkzYjEtM2ZkNjc0NTRlODBlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg"},
            {name : "Shiddat", release : "1 Oct 2021", imdb : 8.1 , poster : "https://m.media-amazon.com/images/M/MV5BZWFiMjVlYTMtMzlhYy00MDcxLWFlNmEtMGJkNmRhNjE5N2ViXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg"},
            {name : "Sanak", release : "15 Oct 2021", imdb : 6.9 , poster : "https://m.media-amazon.com/images/M/MV5BODg3NzhlMjktODA2MS00YTJkLWEyYWMtNGYxMzYwYTViMWQwXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg"}

]
localStorage.setItem("movies", JSON.stringify(info))
let display_data=JSON.parse(localStorage.getItem("movies")) || []

displayData()

function high(){
    console.log("im in")
    display_data.sort(function (a, b) {
        return b.imdb - a.imdb;

    });
    displayData();
}
function low(){
    display_data.sort(function (a, b) {
        return a.imdb - b.imdb;
    
    });
        displayData();
}

function displayData(){
    document.getElementById("movies").innerHTML=null

    display_data.forEach(function(el){
        let box=document.createElement("div")
        box.setAttribute("class","box")
        
        let img_box=document.createElement("div")
        img_box.setAttribute("class","img_div")
        let poster=document.createElement("img")
        poster.setAttribute("class","poster")
        poster.src=el.poster
        
        img_box.append(poster)
        
        let details=document.createElement("div")
        details.setAttribute("class","details")
        let name=document.createElement("h3")
        name.innerText=el.name
        
        let rating=document.createElement("p")
        rating.innerText=`IMDb: ${el.imdb}`
        
        let date=document.createElement("p")
        date.innerText=`Release Date: ${el.release}`
        details.append(name,rating,date)
        box.append(img_box,details)
        
        document.getElementById("movies").append(box)
    })
        
}

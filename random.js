function Random(){
    let x=Math.round(Math.random()*3)
    let playlist=new Array()
    playlist[0]="album1.html"
    playlist[1]="artist1.html"
    playlist[2]="artist2.html"
    playlist[3]="playlist1.html"

    document.location=playlist[x]
}

const navLink = document.querySelectorAll('.nav-link')
const video = document.getElementById('videoAssets')
const iconButton = document.getElementById('iconControl')
let playButton = false


navLink.forEach((el)=>{
    if(el.href === window.location.href){
        el.classList.add('active')
    }
})


const controlVideo = () => {
    playButton = !playButton
    console.log("playButton", playButton)
    videoAction()
}

const videoAction = () => {
    if(playButton){
        iconButton.classList.add('d-none')
        video.play()
        console.log(iconButton.classList)
    }else {
        iconButton.classList.remove('d-none')
        video.pause()
        console.log(iconButton.classList)
    }
}







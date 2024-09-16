let box = document.querySelector('.box')
let images =[
    'https://bigthink.com/wp-content/uploads/2023/02/AdobeStock_558949687.jpg',
    'https://d.newsweek.com/en/full/2316078/astronaut-space-laptop.webp?w=1600&h=900&q=88&f=a13e89267aa890feb45fd27d35e0624f',
    'https://i.ytimg.com/vi/937stSQMr64/maxresdefault.jpg',
    'https://wallpapers.com/images/featured/space-sjryfre8k8f6i3ge.jpg',
    'https://d.newsweek.com/en/full/2308285/artists-illustration-galaxy-space.jpg?w=1600&h=1200&q=88&f=92e6dc128fcd3fe4a88f2ab390ec37bc',
    'https://www.wallpaperflare.com/static/87/981/130/space-planet-universe-galaxy-wallpaper.jpg'
]
window.addEventListener('scroll', () => {
let scrollPosition = window.scrollY;
let viewportHeight = window.innerHeight;
let imageIndex = Math.floor(scrollPosition / viewportHeight % images.length)
box.style.backgroundImage = `url(${images[imageIndex]})`;
})
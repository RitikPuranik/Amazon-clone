function scrollCarousel(button, direction) {
    const container = button.closest('.carousel-container');
    const track = container.querySelector('.carousel-track');
    const scrollAmount = track.clientWidth * 0.7;
    track.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

const sliders = document.querySelectorAll('.calculator__slider');

sliders.forEach(slider => {
    const updateBackground = () => {
        const min = Number(slider.min);
        const max = Number(slider.max);
        const value = Number(slider.value);

        const percentage = ((value - min) / (max - min)) * 100;
        slider.style.setProperty('--value', `${percentage}%`);
    };

    updateBackground();

    slider.addEventListener('input', updateBackground);
});

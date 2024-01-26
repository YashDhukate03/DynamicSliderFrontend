function updateSlider(sliderType) {
    const qualitySlider = document.getElementById('quality');
    const costSlider = document.getElementById('cost');
    const prioritySlider = document.getElementById('priority');

    // Get the values of each slider
    const qualityValue = parseInt(qualitySlider.value);
    const costValue = parseInt(costSlider.value);
    const priorityValue = parseInt(prioritySlider.value);

    // Check the highest priority and update other sliders accordingly
    if (sliderType === 'quality' && qualityValue > costValue && qualityValue > priorityValue) {
        costSlider.value = Math.min(costValue, priorityValue);
        prioritySlider.value = Math.min(costValue, priorityValue);
    } else if (sliderType === 'cost' && costValue > qualityValue && costValue > priorityValue) {
        qualitySlider.value = Math.min(qualityValue, priorityValue);
        prioritySlider.value = Math.min(qualityValue, priorityValue);
    } else if (sliderType === 'priority' && priorityValue > qualityValue && priorityValue > costValue) {
        qualitySlider.value = Math.min(qualityValue, costValue);
        costSlider.value = Math.min(qualityValue, costValue);
    }
}

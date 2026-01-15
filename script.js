let label = document.querySelectorAll(".form-input label")

label.forEach((element) => {
    let string = ""
    for (index in element.textContent) {
        string += `<span style="transition-delay: ${index * 0.05}s">${element.textContent[index]}</span>`
    }
    element.innerHTML = string
});
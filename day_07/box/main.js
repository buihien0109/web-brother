let defaultColors = [
    '#3498db',
    '#9b59b6',
    '#e74c3c',
    '#2c3e50',
    '#d35400',
];

let colors = [...defaultColors];

const renderBox = arr => {
    $(".boxes").html("");

    let html = "";
    arr.forEach((color, index) => {
        html += `
            <div 
                class="box" 
                style="background-color: ${color};"
                onclick="removeBox(${index})"
            >
            </div>
        `
    });

    $(".boxes").html(html)

    // Update total box
    $(".points").html(arr.length);
}

$("#btn").click(() => {
    colors = [...colors, ...defaultColors];
    renderBox(colors);
})

const removeBox = index => {
    colors.splice(index, 1);
    renderBox(colors);
}

renderBox(colors);
function randomize() {
    var range = document.getElementById("range").value;
    var mode = document.getElementById("mode").value;

    var options = [];

    // 根据选择的范围，填充选项数组
    if (range === "A") {
        options = ["A1", "A2", "A3"];
    } else if (range === "B") {
        options = ["B1", "B2", "B3"];
    } else if (range === "C") {
        options = ["C1", "C2", "C3"];
    }
    // 添加其他选项的处理

    var result = document.getElementById("result");

    if (mode === "mode1") {
        var randomIndex = Math.floor(Math.random() * options.length);
        var selectedOption = options[randomIndex];
        result.textContent = "随机选中的选项是：" + selectedOption;
    } else if (mode === "mode2") {
        var randomIndex = Math.floor(Math.random() * options.length);
        var selectedBigOption = options[randomIndex];

        // 根据选择的大选项，获取对应的子选项数组
        var subOptions = [];

        // 在这里添加相应的子选项数组

        var randomSubIndex = Math.floor(Math.random() * subOptions.length);
        var selectedSubOption = subOptions[randomSubIndex];
        result.textContent = "随机选中的大选项是：" + selectedBigOption + "，随机选中的子选项是：" + selectedSubOption;
    }
}

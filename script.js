var selectedRanges = [];
var selectedMode = "";

function randomize() {
    var rangeCheckboxes = document.querySelectorAll("#rangeSelection input[type='checkbox']:checked");
    var modeSelect = document.getElementById("mode");

    if (rangeCheckboxes.length > 0) {
        selectedRanges = [];
        for (var i = 0; i < rangeCheckboxes.length; i++) {
            selectedRanges.push(rangeCheckboxes[i].value);
        }
        selectedMode = modeSelect.value;

        var options = [];

        // 根据用户选择的大选项范围，填充选项数组
        for (var i = 0; i < selectedRanges.length; i++) {
            var range = selectedRanges[i];
            if (range === "家园") {
                options = options.concat(["家园F1", "家园F2", "家园F3"]);
            } else if (range === "勺园") {
                options = options.concat(["勺园"]);
            } else if (range === "农园") {
                options = options.concat(["农园F1", "农园F2"]);
            } else if (range === "学一") {
                options = options.concat(["学一"]);
            } else if (range === "学五") {
                options = options.concat(["学五F1","学五F2"]);
            }
            // 添加其他大选项范围的处理
        }

        var result = document.getElementById("result");

        if (selectedMode === "mode1") {
            var randomIndex = Math.floor(Math.random() * options.length);
            var selectedOption = options[randomIndex];
            result.textContent = "随机选中的吃饭地点是：" + selectedOption;
        } else if (selectedMode === "mode2") {
            var randomIndex = Math.floor(Math.random() * selectedRanges.length);
            var selectedBigOption = selectedRanges[randomIndex];

            // 根据选择的大选项，获取对应的子选项数组
            var subOptions = [];

            if (selectedBigOption === "家园") {
                subOptions = ["家园F1", "家园F2", "家园F3"];
            } else if (selectedBigOption === "勺园") {
                subOptions = ["勺园"];
            } else if (selectedBigOption === "农园") {
                subOptions = ["农园F1", "农园F2"];
            } else if (selectedBigOption === "学一") {
                subOptions = ["学一"];
            } else if (selectedBigOption === "学五") {
                subOptions = ["学五F1","学五F2"];
            }
            // 添加其他大选项范围的子选项处理

            var randomSubIndex = Math.floor(Math.random() * subOptions.length);
            var selectedSubOption = subOptions[randomSubIndex];
            result.textContent = "随机选中的食堂是：" + selectedBigOption + "，随机选中的楼层是：" + selectedSubOption;
        }
    } else {
        alert("请选择至少一个食堂。");
    }
}

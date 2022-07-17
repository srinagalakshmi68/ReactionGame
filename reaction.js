const btn1 = document.getElementById("start-button");
// console.log(btn1);

const randomNumberGenerator = (start, end) => {
    const number = start + Math.floor(Math.random() * (end - start + 1));
    return number;
}

let startTime, currTime;

const getDifference = (startTime, endTime) => {
    console.log(startTime, endTime);

    let ans = (endTime - startTime) + "ms";
    return ans;



    //console.log(startTime.getHours());
}
const showShape = () => {
    // height
    // border-radius
    // background-color
    // left
    // top

    if (startTime != undefined) {
        currTime = new Date();
        const timeTaken = document.getElementById("time-taken");
        timeTaken.innerHTML = getDifference(startTime, currTime);
        startTime = currTime;

    } else {
        startTime = new Date();
    }
    startTime = new Date().getMinutes();
    console.log(startTime);
    const main = document.getElementById("main");
    // console.log(main.style);
    const parentWidth = main.offsetWidth;
    const parentHeight = main.offsetHeight;
    const shape = document.getElementById("shape");

    shape.style.height = `${randomNumberGenerator(50, parentWidth*0.3)}px`;
    shape.style.width = shape.style.height;

    var borderRadius = randomNumberGenerator(0, 50);
    // console.log(borderRadius);
    shape.style.borderRadius = `${borderRadius}%`;

    // shape.style.borderRadius = `${randomNumberGenerator(0,50)}%`;

    var left = randomNumberGenerator(0, parentWidth * 0.7);
    var top = randomNumberGenerator(0, parentHeight - shape.offsetHeight);


    // console.log(left, parentWidth, parentHeight);
    shape.style.left = left + "px";
    shape.style.top = top + "px";

    // console.log(left, top);
    const color = `rgb(${randomNumberGenerator(0,255)}, ${randomNumberGenerator(0,255)}, ${randomNumberGenerator(0,255)})`;
    shape.style.backgroundColor = color;

    shape.style.display = "block";

    const btn1 = document.getElementById("start-button");
    btn1.disabled = true;
}
btn1.addEventListener('click', showShape);
// btn1.addEventListener('click', () => {
//     console.log("btn1 is clicked");
// });

const shape = document.getElementById("shape");

shape.addEventListener('click', showShape);

const btn2 = document.getElementById("reset-button");
btn2.addEventListener('click', () => {
    shape.style.display = "none";
    btn1.disabled = false;
    const timeTaken = document.getElementById("time-taken");
    timeTaken.innerHTML = " ";
})
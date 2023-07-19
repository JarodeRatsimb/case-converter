//----------Upper-case section-----------\\

//Get the Upper Case button
const upButton = document.getElementById("upper-case");

/**
 * callback to insert in the event handler for the upper case button
 */
const turnToUpper = function () {
    const returnUp = document.getElementById("txtval");
    returnUp.value = returnUp.value.toUpperCase();
}

//Call the event listener function on the Upper Case Button
upButton.addEventListener("click", turnToUpper);

//----------lower-case section-----------\\
const lowButton = document.getElementById("lower-case");

/**
 * callback to insert in the event handler for the lower case button
 */
const turnToLower = function () {
    const returnLow = document.getElementById("txtval");
    returnLow.value = returnLow.value.toLowerCase();
}

//Call the event listener function on the Lower Case Button
lowButton.addEventListener("click", turnToLower);

//----------proper-case section-----------\\

// Get the Proper Case button
const propButton = document.querySelector("#proper-case");

/**
 * callback to insert in the event handler for the proper case button
 */
const turnToProper = function () {
    const returnProp = document.getElementById("txtval");
    let str = returnProp.value.toLowerCase().split(" ");
    str.forEach(function (item, index) {
        str[index] = item[0].toUpperCase();
        str[index] += item.substring(1);
    })
    returnProp.value = str.join(" ");
}

//Call the event listener function on the Proper Case Button
propButton.addEventListener("click", turnToProper);

//----------proper-case section-----------\\

// Get the Proper Case button
const senButton = document.querySelector("#sentence-case");

/**
 * callback to insert in the event handler for the proper case button
 */
const turnToSentence = function () {
    const returnSen = document.getElementById("txtval");
    let str = returnSen.value.toLowerCase().split(". ");
    str.forEach(function (item, index) {
        str[index] = item[0].toUpperCase();
        str[index] += item.substring(1);
    })
    returnSen.value = str.join(". ");
}

//Call the event listener function on the Proper Case Button

senButton.addEventListener("click", turnToSentence);

//----------proper-case section-----------\\

/**
*Function to download converted string
*/
function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
document.getElementById("save-text-file").addEventListener("click", function() {
    let text = document.getElementById("txtval").value;
    console.log(text);
    let filename = "text.txt"
    download(filename ,text);
}, false);

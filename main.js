

const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")
const rowElements = document.querySelectorAll(".row")


function getCellElements (currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}


replaceAllButton.addEventListener("click", function(){
    let findInput = document.querySelector(".find-input").value
    let replaceInput = document.querySelector(".replace-input").value
    
    
    for (rowIndex = 0; rowIndex < rowElements.length; rowIndex += 1){
        let rowElement = rowElements[rowIndex]
        currentRowElement = getCellElements(rowElement)

        for (cellIndex = 0; cellIndex < currentRowElement.length; cellIndex += 1) {
         let currentCell = currentRowElement[cellIndex].innerHTML
             
            if (currentCell.includes(findInput)) {
                let changedText = currentCell.replace(findInput, replaceInput)
                currentRowElement[cellIndex].innerHTML = changedText
            }
        }
    }
})


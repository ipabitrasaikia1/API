
async function getData(url){

    let res = await fetch(url)
    let data = res.json();
 
    return(data)
}


function append(data,container){
    console.log("DATA :",data)

    data.forEach(({strMeal,strCategory,strMealThumb,strTags}) => {

        let div = document.createElement("div")
        div.style = "width:90%;margin:auto"
        let p = document.createElement("p")
        p.style = "Font-weight:bold"
        p.innerText = strMeal;

        let category = document.createElement("p")
        category.textContent = strCategory;

        let imgDiv = document.createElement("div")
        imgDiv.style = "box-sizing : border-box;width:100%;height:500px"
        let img = document.createElement("img")
        img.src = strMealThumb;
        img.style = "height:100%"

        let type = document.createElement("p")
        type.textContent = "Type : " + strTags

        imgDiv.append(img)
        div.append(imgDiv,p,category,type)

        container.append(div)

        
    });

}

export {getData,append}

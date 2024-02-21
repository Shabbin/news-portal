const fetchApis = () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    fetch(url)
        .then(res => res.json())
        .then(data => clickApis(data.data))

};

const clickApis = data => {
    const navBar = document.getElementById('navBar');
    navBar.innerHTML = '';
    const createDiv = document.createElement('div');
    createDiv.classList.add('container-fluid');
    createDiv.innerHTML = '';
    console.log(data);
    createDiv.innerHTML =
        `
<a class="navbar-brand" href="#"> <span class ="btn bg-warning "onclick = "info()" ><strong>Info</strong></span> <strong>Portal</strong></a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse " style ="margin-left : 840px">

    <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">News</a>
        </li>
       
        <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Blog</a>
        </li>
        <li class="nav-item">
        <img src="IMG_20201228_215923.jpg" class="rounded-circle w- img-fluid" alt="Cinque Terre">
    </li>
    </ul>


    
</div>


`
    navBar.appendChild(createDiv);



    const listBar = document.getElementById('navbarList');
    const createNav = document.createElement('div');
    createNav.classList.add('container-fluid')
    createNav.innerHTML =
        `


    <ul class="navbar-nav ">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
            <a onclick = "categories('${data.news_category[0].category_id}')" class="nav-link" href="#">Breaking News</a>
        </li>
        <li class="nav-item">
        <a  onclick = "categories('${data.news_category[1].category_id}')"   class="nav-link" href="#">Regular News</a>
        </li>
        <li class="nav-item">
        <a   onclick = "categories('${data.news_category[2].category_id}')" class="nav-link" href="#">International News</a>
        </li>
        <li class="nav-item">
        <a   onclick = "categories('${data.news_category[3].category_id}')" class="nav-link" href="#">Sports</a>
        </li>
        <li class="nav-item">
        <a onclick = "categories('${data.news_category[4].category_id}')" class="nav-link" href="#">Entertainment</a>
        </li>
        <li class="nav-item">
        <a  onclick = "categories('${data.news_category[5].category_id}')" class="nav-link" href="#">Culture</a>
        </li>
        <li class="nav-item">
        <a onclick = "categories('${data.news_category[6].category_id}')" class="nav-link" href="#">Arts</a>
        </li>
        <li class="nav-item">
        <a onclick = "categories('${data.news_category[7].category_id}')" class="nav-link" href="#">All News</a>
        </li>
    </ul>
</div>


`
    listBar.appendChild(createNav);



}





const categories = data => {


    fetchId(data);



}

const fetchId = (id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => showData(data.data))
}


const showData = (data) => {
    const send = document.getElementById('sendall');
    send.innerHTML = ''
    data.forEach(datas => {
        const createDiv = document.createElement('div');

        createDiv.innerHTML =

            `
        <div class="container px-4 text-center">
<div class="row gx-5 ">
    <div class="col-4">
        <div class="p-3 "><img src="${datas.image_url}" class="img-fluid" alt=""></div>
    </div>
    <div class="col">
        <div class="p-3">
            <h1 >${datas.title}</h1>
            <p>${datas.details}</p>
        </div>
        <!-- Button trigger modal -->
        <button  type="button" class="btn btn-primary w-50 mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
           See More...
        </button>
    
        <!-- Modal -->
    
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">${datas.title}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    ${datas.details}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    
                        </div>
                   
        
        
        </div>
        <div class="container overflow-hidden text-center w-50 text-center" style="position:relative;left:180px; top:5px;">
            <div class="row gx-5">
                <div class="col d-flex">
                    <div class="p- w-50 " ><img class="img-fluid w-50"
                            src="${datas.author.img}" alt="">

                    </div>
                    <div class="w-25" >
                        <h1 class="h4" style="font-size : 10px; margin-top:5px;">${datas.author.name}</h1>
                        <h1 class="h5 "style="font-size : 10px;">${datas.author.published_date}</h4>
                    </div>

                </div>
                <div class="col d-flex me-5 " style="position: relative; right: 35px;">
                    <div class="p-3"><i class="fa-regular fa-eye"></i></div>
                    <div class="p-3  " style="position: relative; right: 25px;">${datas.total_view}</div>
                    <div class="col ">
                        <div class=" mt-3 ms-2 w-25 d-flex"><i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>

                        </div>
                        

   
    
    </div>

            </div>
        </div>

    </div>
</div>

</div>





        `

        const info = (data) => {

            const getId = document.getElementById('')


        }







        send.appendChild(createDiv);
    })


}



fetchApis()





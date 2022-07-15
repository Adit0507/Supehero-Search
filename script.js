// 104436082344391	= ACCESS TOKEN
const allTabsBody = document.querySelectorAll('.tab-body-single');
const allTabsHead= document.querySelectorAll('.tab-head-single')
const searchForm = document.querySelector('.app-header-search');

let searchList = document.getElementById('search-list');

let activeTab =1, allData;

const init = () =>{
    showActiveTabBody();
    showActiveTabHead();
}

const showActiveTabHead = () => allTabsHead[activeTab -1].classList.add('active-tab')

const showActiveTabBody = () => {
    hideAllTabBody();
    allTabsBody[activeTab - 1].classList.add('show-tab');
}

const hideAllTabBody = () => allTabsBody.forEach(singleTabBody => singleTabBody.classList.remove('show-tab'));
const hideAllTabHead = () => allTabsHead.forEach(singleTabHead => singleTabHead.classList.remove('active-tab'))

window.addEventListener('DOMContentLoaded', () => init());

allTabsHead.forEach(singleTabHead => {
    singleTabHead.addEventListener('click', () => {
        hideAllTabHead();
        activeTab = singleTabHead.dataset.id;   
        showActiveTabHead();
        showActiveTabBody();
    });
});

const getInputValue = (event) => {
    event.preventDefault();
    let searchText = searchForm.search.value;
    fetchAllSuperhero(searchText);
};

// search form submission
searchForm.addEventListener('submit', getInputValue);

const fetchAllSuperhero = async(searchText) => {
    let url = `https://www.superheroapi.com/api.php/104436082344391/search/${searchText}`;
    try{
        const response = await response.json();
        if(allData.response === 'success'){
            showSearchList(allData.results);
        }
    }catch(error){
        console.log(error)
    }
}

const showSearchList = (data) => {
    searchList.innerHTML = "";
    data.forEach(dataItem => {
        const divElem = document.createElement('div');
        divElem.classList.add('search-list-item');
        divElem.innerHTML= `
            <img src="${dataItem.image.url ? dataItem.image.url : ""}" alt="">
            <p> </p>
        `;

    })
}
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


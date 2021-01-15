import refs from './refs';
import requestsHendler from './apiService';

refs.buttonRef.addEventListener('click', () => {
    let page = localStorage.getItem('page');
    if (page === null) {
        localStorage.setItem('page', 1);
    } else {
        const nextPage = Number(page) + 1;
        localStorage.setItem('page', nextPage);
    }

    const query = refs.formRef.children[0].value;
    page = localStorage.getItem('page');

    requestsHendler.fetchImages(query, page);
});
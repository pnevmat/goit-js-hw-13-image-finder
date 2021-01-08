import refs from './refs';
import requestsHendler from './apiService';

refs.buttonRef.addEventListener('click', () => {
    if (localStorage.getItem('page') === null) {
        localStorage.setItem('page', 1);
    } else {
        const nextPage = Number(localStorage.getItem('page')) + 1;
        localStorage.setItem('page', nextPage);
    }

    const query = refs.formRef.children[0].value;
    const page = localStorage.getItem('page');

    requestsHendler.fetchImages(query, page);
});
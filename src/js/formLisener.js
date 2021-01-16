import refs from './refs';
import requestsHendler from './apiService';

refs.buttonRef.disabled = true;

refs.formRef.addEventListener('submit', (event) => {
    event.preventDefault();
    
    setTimeout(() => {
        localStorage.setItem('page', requestsHendler.page);
        localStorage.removeItem('defScrollRange');
    
        const query = event.target.children[0].value;
        const page = localStorage.getItem('page');
    
        requestsHendler.fetchImages(query, page);
    }, 1000);
})
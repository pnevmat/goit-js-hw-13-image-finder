import refs from './refs';
import requestsHendler from './apiService';

refs.buttonRef.disabled = true;

refs.formRef.addEventListener('input', (event) => {
    event.preventDefault();
    
    if (event.target.value.length >= 3) {
        setTimeout(() => {
            localStorage.setItem('page', requestsHendler.page);
            localStorage.removeItem('defScrollRange');
    
            const query = event.target.value;
            const page = localStorage.getItem('page');
    
            requestsHendler.fetchImages(query, page);
        }, 1000);
    } else {return;};
})
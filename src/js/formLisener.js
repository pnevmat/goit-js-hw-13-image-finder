import refs from './refs';
import requestsHendler from './apiService';

refs.formRef.addEventListener('input', (event) => {
    event.preventDefault();
    const query = event.target.value;
    requestsHendler.fetchImages(query);
})
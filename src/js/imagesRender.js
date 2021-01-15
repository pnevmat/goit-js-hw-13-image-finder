import imagesTemplate from '../templates/imagesTemplate.hbs';
import refs from './refs';

const imagesRender = {
    getImgArray: async ({hits}) => {
        if (Number(localStorage.getItem('page')) === 1) {
            refs.imageListRef.innerHTML = '';
        }
        
        const imgMarkup = imagesTemplate(hits);
       
        return imagesRender.render(imgMarkup);
    },
    
    render: async (imgMarkup) => {
        refs.imageListRef.insertAdjacentHTML('beforeend', imgMarkup);
        if (refs.buttonRef.disabled === true) {

            refs.buttonRef.disabled = false;
            refs.buttonRef.classList.remove('is-hidden');
        }

        if (Number(localStorage.getItem('page')) === 1) {
            localStorage.setItem('defScrollRange', refs.imageListRef.clientHeight);
        }

        if (Number(localStorage.getItem('page')) > 1) {
            const scrollDistance = Number(refs.imageListRef.clientHeight - localStorage.getItem('defScrollRange') + 280);

            window.scrollTo({
                top: scrollDistance,
                behavior: 'smooth'
            });
        }
    }
}

export default imagesRender;
import imagesTemplate from '../templates/imagesTemplate.hbs';
import refs from './refs';

const imagesRender = {
    getImgArray: async ({hits}) => {
        const imgMarkup = await imagesTemplate(hits);
        return imagesRender.render(imgMarkup);
    },
    
    render: async (imgMarkup) => {
        await refs.imageListRef.insertAdjacentHTML('beforeend', imgMarkup);
    }
}

export default imagesRender;
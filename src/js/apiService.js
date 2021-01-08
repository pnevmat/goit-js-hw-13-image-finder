import axios from "axios";
import imagesRender from './imagesRender';

const requestsHendler = {
    rootUrl: 'https://pixabay.com/api/',
    imageType: 'photo',
    orientation: 'horizontal',
    page: 1,
    perPage: 12,
    key: '19686819-03f2ab0cba3a581dcc64d8dd3',
    fetchImages: async (query, page) => {
        const {data} = await axios.get(
            `${requestsHendler.rootUrl}?image_type=${requestsHendler.imageType}
            &orientation=${requestsHendler.orientation}&q=${query}&page=${page}
            &per_page=${requestsHendler.perPage}&key=${requestsHendler.key}`
        )
        console.log(data);
        return imagesRender.getImgArray(data);
    }
};

export default requestsHendler;
import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import { ErrorMsg, Layout } from './Layout';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { serviceGetImages } from 'api';

export class App extends Component {
  state = {
    gallery: [],
    query: {
      searchString: '',
      page: 1,
      perPage: 12,
      totalHits: 0,
      timeStamp: null,
    },
    loader: false,
    error: false,
    showModal: false,
    bigImgUrl: '',
  };
}

export const App = () => {
  return <div>React homework template</div>;
};

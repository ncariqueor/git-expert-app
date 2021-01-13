import {useState, useEffect} from 'react';
import {getGifs} from '../helpers/getGifs';

export const useFetchGif = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category).then(res => {
            setState({
                data: res,
                loading: false
            });

        });
    }, [category]);

    return state;
};
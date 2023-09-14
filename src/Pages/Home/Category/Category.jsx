/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData} from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    // const {id}= useParams(); 
    // console.log(id);
    const categoryNews=useLoaderData();
    console.log('category news=',categoryNews);

    return (
        <div>
            {
                categoryNews.map(news=><NewsCard key={news._id} news={news}>
                </NewsCard>)
            }
        </div>
    );
};

export default Category;
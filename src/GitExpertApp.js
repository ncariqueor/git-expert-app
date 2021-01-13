import {useState} from 'react';
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GitExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     //setCategories([...categories, 'HunterXHunter']);
    //     setCategories(cats => [...cats, 'HunterXHunter']);
    // };

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <ol>
                {
                    categories.map(item => (
                        <GifGrid
                            key={item}
                            category={item}
                        />
                        )
                    )
                }
            </ol>
        </>
    );
};

export default GitExpertApp;
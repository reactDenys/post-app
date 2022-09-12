import React, {useState} from 'react'
import "./App.css";
import PostList from "./components/PostList/PostList";
import FormItem from "./UI/FormItem/FormItem";
import PostFilter from "./components/PostFilter/PostFilter";
import MyModal from "./UI/MyModal/MyModal";
import MyButton from "./UI/MyButton/MyButton";
import {useSortedPosts} from "./hooks/useSortedPosts";

function App() {
    let [posts, setPost] = useState([
        {id: 1, title: 'JavaScript', description: 'Description'},
        {id: 2, title: 'Aython2', description: 'Pyt'},
        {id: 3, title: 'Python', description: 'About'},
        {id: 4, title: 'JavaScript4', description: 'Description'},
    ])

    let [filter, setFilter] = useState({option: '', searchQuery: ''})
    let [modal, setModal] = useState(false)

    let searchedAndSortedPosts = useSortedPosts(filter.option, posts, filter.searchQuery)

    const createPost = newPost => {
        setPost([...posts, newPost])
        setModal(false)
    }

    const deletePost = post => {
        setPost(posts.filter(postItem => postItem !== post))
    }

    return (
        <div className={'content'}>
            <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>Create a post</MyButton>
            <MyModal value={modal} setValue={setModal}>
                <FormItem createPost={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <PostList deletePost={deletePost} posts={searchedAndSortedPosts} title='Post list'/>

        </div>
    );
}

export default App;

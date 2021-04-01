import React, {useState, useEffect} from 'react';

const Tabs = ({tabs, selectedTab}) => {

    return (
        <div style={{display: 'flex',}}>
            {tabs.map(tab =>
                <button key={tab.title} style={{
                    flex: 1,
                    background: selectedTab === tab.title ? 'coral' : 'lightblue'
                }}
                        onClick={tab.clickHandler}>
                    {tab.title}
                    {/*в onClick можна написати функцію onClick={() => tab.clickHandler(tab.title)}
                    або передавати в setSelectedTab, описано нижче */}
                </button>)}
        </div>
    )
};
const PostList = ({posts}) => {
    return(
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    <h3>{post.id}</h3>
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                </div>
                )
            )}
        </div>
    )
};
const CommentsList = ({comments}) => {
    return(
        <div>
            {comments.map(comment => (
                    <div key={comment.id}>
                        <h3>{comment.id}</h3>
                        <p>{comment.name}</p>
                        <p>{comment.body}</p>
                    </div>
                )
            )}
        </div>
    )
};
const AlbumsList = ({albums}) => {
    return(
        <div>
            {albums.map(album => (
                    <div key={album.id}>
                        <h3>{album.id}</h3>
                        <p>{album.title}</p>
                    </div>
                )
            )}
        </div>
    )
};
const PhotosList = ({photos}) => {
    return(
        <div>
            {photos.map(photo => (
                    <div key={photo.id}>
                        <h3>{photo.id}</h3>
                        <p>{photo.title}</p>
                        <p>{photo.url}</p>
                    </div>
                )
            )}
        </div>
    )
};
const TodosList = ({todos}) => {
    return(
        <div>
            {todos.map(todo => (
                    <div key={todo.id} >
                        <h3>{todo.id}</h3>
                        <p>{todo.title}</p>
                        <p>{todo.completed.toString()}</p>
                    </div>
                )
            )}
        </div>
    )
};
const UsersList = ({users}) => {
    return(
        <div>
            {users.map(user => (
                    <div key={user.id}>
                        <h3>{user.id}</h3>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                )
            )}
        </div>
    )
};
const baseUrl = (resource) => `https://jsonplaceholder.typicode.com/${resource}`

const POSTS = 'posts'
const COMMENTS = 'comments'
const ALBUMS = 'albums'
const PHOTOS = 'photos'
const TODOS = 'todos'
const USERS = 'users'

function App() {
    const onTabChangeHandler = (tab) => {
        if(tab !== selectedTab){ //умова, при якій, клікаючи ще раз на кнопку,
            setSelectedTab(tab); // буде відмальовуватися і-я.
            setList([]); // в іншому випадку, клікаючи по кнопці, все зникає
        }
    }
    const tabs = [
        {title: POSTS, clickHandler: () => onTabChangeHandler(POSTS)},
        {title: COMMENTS, clickHandler: () => onTabChangeHandler(COMMENTS)},
        {title: ALBUMS, clickHandler: () => onTabChangeHandler(ALBUMS)},
        {title: PHOTOS, clickHandler: () => onTabChangeHandler(PHOTOS)},
        {title: TODOS, clickHandler: () => onTabChangeHandler(TODOS)},
        {title: USERS, clickHandler: () => onTabChangeHandler(USERS)},
    ];
    // const tabs = [
    //     {title: 'posts', clickHandler: () => onTabChangeHandler('posts')},
    //     {title: 'comments', clickHandler: () => onTabChangeHandler('comments')},
    //     {title: 'albums', clickHandler: () => onTabChangeHandler('albums')},
    //     {title: 'photos', clickHandler: () => onTabChangeHandler('photos')},
    //     {title: 'todos', clickHandler: () => onTabChangeHandler('todos')},
    //     {title: 'users', clickHandler: () => onTabChangeHandler('users')},
    // ]; //замінюємо всюди дані з глобальних const, які оголошуються поза компонентами
    const [selectedTab, setSelectedTab] = useState(tabs[0].title);
    const [list, setList] = useState([]);


    const fetchData = async () => {
        const response = await fetch(baseUrl(selectedTab));
        const data = await response.json();
        setList(data)
    }
    useEffect(() => {
        fetchData();

        // return  () => {
        //     setList([])
        // }

    }, [selectedTab])

    return (
        <div>
            <Tabs tabs={tabs} selectedTab={selectedTab}/>
            {selectedTab === POSTS && <PostList posts={list}/>}
            {selectedTab === COMMENTS && <CommentsList comments={list}/>}
            {selectedTab === ALBUMS && <AlbumsList albums={list}/>}
            {selectedTab === PHOTOS && <PhotosList photos={list}/>}
            {selectedTab === TODOS && <TodosList todos={list}/>}
            {/*todoList завалиться, оскільки в list прилітає вміст попередньої кнопки.
            Щоб цього не сталося, нам треба попередньо чистити вміст сторінки.
            Для цього створюємо окрему функцію onTabChangeHandler() в App()
            Або в useEffect() підчищати за допомогою return*/}
            {selectedTab === 'users' && <UsersList users={list}/>}


        </div>
    );
}

export default App;

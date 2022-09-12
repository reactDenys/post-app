import React from 'react';
import MyInput from "../../UI/MyInput/MyInput";
import MySelect from "../../UI/MySelect/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                type='text'
                placeholder='Search...'
                value={filter.searchQuery}
                onChange={e => setFilter({...filter, searchQuery: e.target.value})}
            />
            <MySelect
                defaltValue="Sort"
                options={[
                    {value: 'title', name: 'By title'},
                    {value: 'description', name: 'By description'}
                ]}
                value={filter.option}
                onChange={e => setFilter({...filter, option: e})}
            />
        </div>
    );
};

export default PostFilter;
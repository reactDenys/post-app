import {useMemo} from "react";

export const useSort = (option, posts) => {
    let sortedPosts = useMemo( () => {
        if (option) {
            return [...posts].sort((a, b) => a[option].toLowerCase().localeCompare(b[option]))
        }
        return posts
    }, [option, posts])

    return sortedPosts;
}

export const useSortedPosts = (option, posts, searchQuery) => {
    let sortedPosts = useSort(option, posts)
    let searchedAndSortedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
    }, [searchQuery, sortedPosts])

    return searchedAndSortedPosts
}
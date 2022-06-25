import {google }  from 'googleapis'

export async function getServerSideProps({query}){
    return {
        props:{
            rank
        }
    }
}
export default function Post({rank}){
    return <article>
        <h1>{rank}</h1>
    </article>
}
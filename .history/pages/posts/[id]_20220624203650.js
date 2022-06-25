import {google }  from 'googleapis'

export async function getServerSideProps({query}){
    const auth= await google.auth.getClient({scopes:['https://www.googleapis.com/auth/spreadsheets.readonly']})
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
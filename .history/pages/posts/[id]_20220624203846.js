import {google }  from 'googleapis'

export async function getServerSideProps({query}){
    //auth
    const auth= await google.auth.getClient({scopes:['https://www.googleapis.com/auth/spreadsheets.readonly']})
    
    const sheets=google.sheets({version:'v4', auth})

    //Query
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
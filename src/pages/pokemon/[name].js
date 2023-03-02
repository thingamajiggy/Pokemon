import { prettyPrintJson } from 'pretty-print-json';

const Pokemon = (props) => {
    return (
        <pre dangerouslySetInnerHTML={{__html: prettyPrintJson.toHtml(props.pokemon)}} />
    )
}

export default Pokemon;

export async function getServerSideProps({params}) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
    const data = await response.json()
  
    return {
      props: {
        pokemon: data,
      }
    }
}
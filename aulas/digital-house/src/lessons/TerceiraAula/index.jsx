import './style.scss'
import iron_man from '../../assets/images/iron_man.webp'
import hulk from '../../assets/images/hulk.webp'
import viuva_negra from '../../assets/images/viuva_negra.webp'

export function TerceiraAula() {

    const componentsList= [
        {
            name: 'Card-1',
            description: 'Exercício aula 03',
            image: iron_man
        },
        {
            name: 'Card-2',
            description: 'Exercício aula 03',
            image: hulk
        },
        {
            name: 'Card-3',
            description: 'Exercício aula 03',
            image: viuva_negra
        },
    ]

    return (
        <div>
            <h1>Lista de componentes</h1>
            <ul>
                {
                    components.map(component => (
                        <li>
                            <img src={component.image} alt=""/>
                            <h1>{component.name}</h1>
                            <p>{component.description}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
import './style.scss'
import iron_man from './../../assets/images/iron_man.webp'
import hulk from './../../assets/images/hulk.webp'
import viuva_negra from './../../assets/images/viuva_negra.webp'

export function QuartaAula() {

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
        <div className='quarta-aula-component'>
            <h1 className='main-title'>Componentes identificados</h1>

            <ul className='components-finded'>

                {
                    componentsList.map(component => (
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
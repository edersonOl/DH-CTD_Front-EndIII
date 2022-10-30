import './style.scss'
import iron_man from './../../assets/images/iron_man.webp'
import hulk from './../../assets/images/hulk.webp'
import viuva_negra from './../../assets/images/viuva_negra.webp'
import { QuintaAulaItem } from './../../components/QuintaAulaItem'

export function QuintaAula() {

    const componentsList= [
        {
            id: 1,
            name: 'Card-1',
            description: 'Exercício aula 03',
            image: iron_man
        },
        {
            id: 2,
            name: 'Card-2',
            description: 'Exercício aula 03',
            image: hulk
        },
        {
            id: 3,
            name: 'Card-3',
            description: 'Exercício aula 03',
            image: viuva_negra
        },
    ]

    return (
        <div className='quinta-aula'>
            <h1 className='main-title'>Componentes identificados</h1>

            <ul className='components-finded'>

            {
                    componentsList.map(
                        component => {
                            return (
                                <QuintaAulaItem
                                    key={component.id}
                                    item={component} />
                            )
                        }
                    )
            }
            </ul>
        </div>
    )
}
import { createContext, useState } from "react";

export const CardContext = createContext()

export const HandleCardContext = ({children}) => {

    const [cards, setCards] = useState([
        {
            id: 1,
            title: 'Educação de Qualidade',
            image: 'https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-4.svg',
        },
        {
            id: 2,
            title: 'Educação de Qualidade',
            image: 'https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-4.svg',
        },
        {
            id: 3,
            title: 'Educação de Qualidade',
            image: 'https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-4.svg',
        },
        {
            id: 4,
            title: 'Educação de Qualidade',
            image: 'https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-4.svg',
        },
        {
            id: 5,
            title: 'Educação de Qualidade',
            image: 'https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-4.svg',
        },
        {
            id: 6,
            title: 'Educação de Qualidade',
            image: 'https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-4.svg',
        },
        {
            id: 7,
            title: 'Educação de Qualidade',
            image: 'https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-4.svg',
        },
        {
            id: 8,
            title: 'Educação de Qualidade',
            image: 'https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-4.svg',
        }
    ])

    return(
        <CardContext.Provider value={{ cards }}>
            {children}
        </CardContext.Provider>
    )
}
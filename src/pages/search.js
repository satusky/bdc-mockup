import React, { useState } from 'react'
import { PageContent } from '../components/layout'
import { MonarchSearch } from '../components/form'
import { Title, Paragraph } from '../components/typography'
import { LineBreak } from '../components/layout'

const SearchPage = () => {
    const [query, setQuery] = useState('')

    return (
        <PageContent width="95%" maxWidth="1080px" center gutters>

            <Title>Search</Title>

            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ea dolorem natus unde aspernatur, rerum excepturi maiores nobis in iusto adipisci, voluptate quod quas fugit voluptatum. Nostrum maiores dignissimos deleniti.
            </Paragraph>
            
            <MonarchSearch />

        </PageContent>
    )
}

export default SearchPage

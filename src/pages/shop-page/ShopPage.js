import React from "react"

import collections from './shopData'
import './ShopPage.scss'
import CollectionPreview from "../../components/collection-preview"


class ShopPage extends React.Component {
    state = { collections }

    render() {
        const { collections } = this.state
        return (
            <div className="shop-page">
                {
                    collections.map(({ id, ...overCollectionProps }) => (
                        <CollectionPreview key={id} {...overCollectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage
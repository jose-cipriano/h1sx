import { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import { AnnouncementProvider } from '../../contexts/announcement'
import BasicDetails from './basic-details'
import Characteristics from './characteristics'

import { Button } from '../../components/common/button'
import styles from '../../styles/Layout.module.css'
import Tabstyles from '../../styles/Tabs.module.css'
import listingStyles from './listings.module.css'
export default function Listings() {
    const [toggleState, setToggleState] = useState(1)
    const toggleTab = (id) => {
        setToggleState(id)
    }
    const [canPublish, setCanPublish] = useState(false)

    const handleBasicDetailsSubmit = () => {
        console.log('handleBasicDetailsSubmit')
    }

    const handleNextForm = () => {
        setToggleState((prev) => {
            if (prev !== 5) {
                return prev + 1
            } else {
                setCanPublish(true)
                return prev
            }
        })
    }

    return (
        <div className={styles.PageContainer}>
            <div className={styles.fullPageGrid}>
                <fieldset className={styles.fieldsetBox}>
                    <legend>Listings</legend>
                    <div className={listingStyles.tabsBlock}>
                        <button
                            className={
                                toggleState === 1
                                    ? `${Tabstyles.Tabs} ${Tabstyles.ActiveTabs}`
                                    : Tabstyles.Tabs
                            }
                            onClick={() => {
                                toggleTab(1)
                            }}
                        >
                            1 basic details
                        </button>
                        <button
                            className={
                                toggleState === 2
                                    ? `${Tabstyles.Tabs} ${Tabstyles.ActiveTabs}`
                                    : Tabstyles.Tabs
                            }
                            onClick={() => {
                                toggleTab(2)
                            }}
                        >
                            2 characteristics
                        </button>
                        <button
                            className={
                                toggleState === 3
                                    ? `${Tabstyles.Tabs} ${Tabstyles.ActiveTabs}`
                                    : Tabstyles.Tabs
                            }
                            onClick={() => {
                                toggleTab(3)
                            }}
                        >
                            3 media gallery
                        </button>
                        <button
                            className={
                                toggleState === 4
                                    ? `${Tabstyles.Tabs} ${Tabstyles.ActiveTabs}`
                                    : Tabstyles.Tabs
                            }
                            onClick={() => {
                                toggleTab(4)
                            }}
                        >
                            4 services
                        </button>
                        <button
                            className={
                                toggleState === 5
                                    ? `${Tabstyles.Tabs} ${Tabstyles.ActiveTabs}`
                                    : Tabstyles.Tabs
                            }
                            onClick={() => {
                                toggleTab(5)
                            }}
                        >
                            5 availability & rates
                        </button>
                        <div className={listingStyles.actionBtn}>
                            <Button
                                style={{
                                    marginRight: '10px',
                                    backgroundColor: 'transparent',
                                    color: 'black',
                                    border: '1px solid black',
                                }}
                            >
                                create/publish
                            </Button>
                            <Button onClick={handleNextForm}>Next</Button>
                        </div>
                    </div>
                    {toggleState === 1 && <BasicDetails onSubmit={handleBasicDetailsSubmit} />}
                    {toggleState === 2 && <Characteristics />}
                </fieldset>
            </div>
        </div>
    )
}

Listings.getLayout = function getLayout(page) {
    return (
        <AnnouncementProvider>
            <Layout>{page}</Layout>
        </AnnouncementProvider>
    )
}

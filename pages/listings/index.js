// libs
import { useState } from 'react'
import { Form, Formik } from 'formik'
import { toast } from 'react-toastify'
import Layout from '../../components/layout/Layout'
import { AnnouncementProvider } from '../../contexts/announcement'

// multipart forms
import BasicDetailsForm from './basicDetails'
import CharacteristicsForm from './characteristics'
import MediaGalleryForm from './mediaGallery'
import SubmitField from './submitField'
// styles
import styles from '../../styles/Layout.module.css'
import Tabstyles from '../../styles/Tabs.module.css'
import listingStyles from './listings.module.css'
// utils
import { listingSchema } from '../../utils/schema'
import { API_ENDPOINTS } from '../../utils/api-endpoints'
import fetchJson from '../../lib/fetchJson'

const steps = [
    'basic details',
    'characteristics',
    'media gallery',
    'services',
    'availability & rates',
]
export default function Listings() {
    const [status, setStatus] = useState('idle')
    const [activeStep, setActiveStep] = useState(0)
    const [listingId, setListingId] = useState('')
    const isLastStep = activeStep === steps.length - 1
    const isFirstStep = activeStep === 0

    const createListingBasicDetails = async ({
        listingName,
        age,
        gender,
        code,
        listingPicture,
        aboutMe,
        contactMethods,
        locationCountry,
        locationCity,
    }) => {
        setStatus('pending')
        try {
            const res = await fetchJson(API_ENDPOINTS.BASICDETAILS, {
                method: 'POST',
                headers: { 'Content-Type': 'multipart/form-data' },
                body: JSON.stringify({
                    listingName,
                    age,
                    gender,
                    code,
                    listingPicture,
                    aboutMe,
                    contactMethods,
                    locationCountry,
                    locationCity,
                }),
            })

            toast(res.message)
            setStatus('resolve')
            return res
        } catch (err) {
            console.log(err)
            toast(err.message)
        }
    }

    const createCharacteristics = async ({
        nationality,
        i_speak,
        orientation,
        i_meet,
        available_for,
        height,
        weight,
        cup_size,
        b_type,
        p_length,
        p_girth,
        hair_color,
        eye_color,
        intimate_hair,
        bodyart,
        smoking,
        drinking,
        party_play,
    }) => {
        setStatus('pending')
        try {
            const res = await fetchJson(API_ENDPOINTS.CHARACTERISTICS, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    nationality,
                    i_speak,
                    orientation,
                    i_meet,
                    available_for,
                    height,
                    weight,
                    cup_size,
                    b_type,
                    p_length,
                    p_girth,
                    hair_color,
                    eye_color,
                    intimate_hair,
                    bodyart,
                    smoking,
                    drinking,
                    party_play,
                    listingId,
                }),
            })

            toast(res.message)
            setStatus('resolve')
            return res
        } catch (err) {
            console.log(err)
            toast(err.message)
        }
    }

    // const createMediaGallery = async ({

    // })

    const handleNextForm = async (values) => {
        switch (activeStep) {
            case 0:
                try {
                    const res = await createListingBasicDetails(values)
                    if (res.success) {
                        console.log(res.data)
                        setListingId(res.data)
                        toast(res.message)
                        setActiveStep(1)
                    } else {
                        console.log('failed step 1')
                    }
                } catch (err) {
                    console.log('err', err)
                }
                break
            case 1:
                try {
                    const res = await createCharacteristics(values, listingId)
                    if (res.success) {
                        toast(res.message)
                        setActiveStep(2)
                    } else {
                        console.log('failed step 2')
                    }
                } catch (err) {
                    console.log('err', err)
                }
            default:
                break
        }
    }

    function _renderStepContent({
        step,
        touched,
        errors,
        handleBlur,
        handleChange,
        setFieldValue,
        values,
    }) {
        switch (step) {
            case 0:
                return (
                    <BasicDetailsForm
                        errors={errors}
                        handleBlur={handleBlur}
                        handleChange={handleChange}
                        setFieldValue={setFieldValue}
                        touched={touched}
                        values={values}
                    />
                )
            case 1:
                return (
                    <CharacteristicsForm
                        touched={touched}
                        errors={errors}
                        handleBlur={handleBlur}
                        handleChange={handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <MediaGalleryForm
                        errors={errors}
                        setFieldValue={setFieldValue}
                        values={values}
                    />
                )
            default:
                return null
        }
    }

    function _renderClassName(step) {
        switch (step) {
            case 0:
                return listingStyles.flexForm
            default:
                return listingStyles.flexForm
        }
    }

    return (
        <div className={styles.PageContainer}>
            <div className={styles.fullPageGrid}>
                <fieldset className={styles.fieldsetBox}>
                    <legend>Listings</legend>
                    <div className={listingStyles.tabsBlock}>
                        {steps.map((step, idx) => {
                            return (
                                <button
                                    key={idx}
                                    className={
                                        activeStep === idx
                                            ? `${Tabstyles.Tabs} ${Tabstyles.ActiveTabs}`
                                            : Tabstyles.Tabs
                                    }
                                >
                                    {idx + 1} {step}
                                </button>
                            )
                        })}
                    </div>
                    <Formik
                        initialValues={{
                            listingName: '',
                            age: 21,
                            gender: '',
                            listingPicture: null,
                            contactMethods: [],
                            locationCountry: 'Cyprus',
                            locationCity: 'Limassol',
                            thumbnails: null,
                            // nationality: '',
                            // i_speak: '',
                            // orientation: '',
                            // i_meet: 'Males',
                            // available_for: 'Incall',
                            // height: 140,
                            // weight: 40,
                            // cup_size: '',
                            // b_type: '',
                            // p_length: 11,
                            // p_girth: 8,
                            // hair_color: '',
                            // eye_color: '',
                            // intimate_hair: '',
                            // body_art: 'Piercing',
                            // smoking: '',
                            // drinking: '',
                            // party_play: ''
                        }}
                        validationSchema={listingSchema[activeStep]}
                        onSubmit={handleNextForm}
                    >
                        {({ touched, errors, handleBlur, handleChange, setFieldValue, values }) => {
                            return (
                                <Form className={_renderClassName(activeStep)}>
                                    {_renderStepContent({
                                        step: activeStep,
                                        touched,
                                        errors,
                                        handleBlur,
                                        handleChange,
                                        setFieldValue,
                                        values,
                                    })}
                                    <SubmitField disabled={!isLastStep} />
                                </Form>
                            )
                        }}
                    </Formik>
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

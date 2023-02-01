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
import ServicesForm from './services'
import AvailabilityForm from './availability'
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
            setStatus('resolve')
            return res
        } catch (err) {
            console.log(err)
            toast(err.message)
        }
    }

    const createMediaGallery = async ({ listingPicture, thumbnails }) => {
        setStatus('pending')
        try {
            const res = await fetchJson(API_ENDPOINTS.MEDIAGALLERY, {
                method: 'POST',
                headers: { 'Content-Type': 'multipart/form-data' },
                body: JSON.stringify({
                    listingPicture,
                    thumbnails,
                    listingId,
                }),
            })
            setStatus('resolve')
            return res
        } catch (err) {
            console.log(err)
            toast(err.message)
        }
    }

    const createServices = async (services) => {
        setStatus('pending')
        console.log('services', services)
        try {
            const res = await fetchJson(API_ENDPOINTS.SERVICES, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    services,
                    listingId,
                }),
            })
            setStatus('resolve')
            return res
        } catch (err) {
            console.log(err)
            toast(err.message)
        }
    }

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
                break
            case 2:
                try {
                    const res = await createMediaGallery(values, listingId)
                    if (res.success) {
                        toast(res.message)
                        setActiveStep(3)
                    } else {
                        console.log('failed step 3')
                    }
                } catch (err) {
                    console.log('err', err)
                }
                break
            case 3:
                try {
                    const res = await createServices(values.services, listingId)
                    if (res.success) {
                        toast(res.message)
                        setActiveStep(4)
                    } else {
                        console.log('failed step 4')
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
            case 3:
                return (
                    <ServicesForm
                        touched={touched}
                        errors={errors}
                        setValues={(values) => setFieldValue('services', values)}
                        values={values.services}
                    />
                )
            case 4:
                return (
                    <AvailabilityForm
                        setValues={(values) => setFieldValue('availability', values)}
                        values={values.availability}
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
                            nationality: 'Hungarian',
                            i_speak: 'English',
                            height: 170,
                            weight: 55,
                            p_length: 20,
                            p_girth: 14,
                            services: [
                                { title: '69', type: null, price: 15 },
                                { title: 'Anal Sex', type: null, price: 15 },
                                { title: 'Body Cumshot', type: null, price: 15 },
                                { title: 'Classic Massage', type: null, price: 15 },
                                { title: 'Erotic Massage', type: null, price: 15 },
                                { title: 'Nuru Massage', type: null, price: 15 },
                                { title: 'BDSM', type: null, price: 15 },
                                { title: 'Bondage', type: null, price: 15 },
                                { title: 'Dominance', type: null, price: 15 },
                                { title: 'Companion for Lunch', type: null, price: 15 },
                                { title: 'Companion for Vacations', type: null, price: 15 },
                                { title: 'Overnight (12h)', type: null, price: 15 },
                            ],
                            availability: {
                                workingHours: [
                                    { when: 'Monday', active: false, from: '17:00', to: '21:30' },
                                    { when: 'Tuesday', active: false, from: '17:00', to: '21:30' },
                                    {
                                        when: 'Wednesday',
                                        active: false,
                                        from: '17:00',
                                        to: '21:30',
                                    },
                                    { when: 'Thursday', active: false, from: '17:00', to: '21:30' },
                                    { when: 'Friday', active: false, from: '17:00', to: '21:30' },
                                    { when: 'Saturday', active: false, from: '17:00', to: '21:30' },
                                    { when: 'Sunday', active: false, from: '17:00', to: '21:30' },
                                ],
                                call: [
                                    {
                                        title: 'InCall',
                                        availability: false,
                                        rate: [{ duration: '20min', price: 50 }],
                                    },
                                    {
                                        title: 'outCall',
                                        availability: false,
                                        rate: [{ duration: '20min', price: 50 }],
                                    },
                                ],
                            },
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

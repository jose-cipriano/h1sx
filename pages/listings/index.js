// libs
import { useState } from 'react'
import { Form, Formik } from 'formik'
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

const steps = [
    'basic details',
    'characteristics',
    'media gallery',
    'services',
    'availability & rates',
]
export default function Listings() {
    const [activeStep, setActiveStep] = useState(0)
    const isLastStep = activeStep === steps.length - 1

    const handleNextForm = () => {
        if (!isLastStep) {
            setActiveStep((prev) => prev + 1)
        }
    }

    function _renderStepContent(step, touched, errors, handleBlur, handleChange, setFieldValue) {
        switch (step) {
            case 0:
                return (
                    <BasicDetailsForm
                        errors={errors}
                        handleBlur={handleBlur}
                        handleChange={handleChange}
                        setFieldValue={setFieldValue}
                    />
                )
            case 1:
                return (
                    <CharacteristicsForm
                        touched={touched}
                        errors={errors}
                        handleBlur={handleBlur}
                        handleChange={handleChange}
                    />
                )
            case 2:
                return (
                    <MediaGalleryForm
                        touched={touched}
                        errors={errors}
                        handleBlur={handleBlur}
                        handleChange={handleChange}
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
                        initialValues={{ age: 18 }}
                        validationSchema={listingSchema[activeStep]}
                        onSubmit={handleNextForm}
                    >
                        {({
                            touched,
                            errors,
                            handleBlur,
                            handleChange,
                            setFieldValue,
                            isSubmitting,
                            isValidating,
                        }) => {
                            return (
                                <Form className={_renderClassName(activeStep)}>
                                    {_renderStepContent(
                                        activeStep,
                                        touched,
                                        errors,
                                        handleBlur,
                                        handleChange,
                                        setFieldValue,
                                        isSubmitting,
                                        isValidating,
                                        isValidating,
                                    )}
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

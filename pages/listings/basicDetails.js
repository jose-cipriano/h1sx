import { useState, useEffect } from 'react'
import Input from '../../components/common/form/input'
import ImageInput from '../../components/common/form/image-input'
import TextArea from '../../components/common/form/text-area'
import PhoneNumberInput from '../../components/common/form/phone-number-input'
import SingleSelect from '../../components/common/form/single-select'
import basicDetailsStyles from './basicDetails.module.css'
import GroupSelect from '../../components/common/form/group-select'
import Select from '../../components/common/form/select'
import { API_ENDPOINTS } from '../../utils/api-endpoints'
import fetchJson from '../../lib/fetchJson'
import { toast } from 'react-toastify'

const BasicDetailsForm = ({ errors, handleChange, handleBlur, setFieldValue, values, touched }) => {
    const contactMethods = ['Call', 'SMS', 'WhatsApp', 'Viber', 'Telegram']
    const genders = ['Female', 'Transgender', 'Male']
    const ages = new Array(50).fill().map((item, index) => 21 + index)
    const [countries, setCountries] = useState([])
    const [cities, setCities] = useState([])
    const getCountries = async () => {
        try {
            const res = await fetchJson(API_ENDPOINTS.COUNTRY, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })
            const resCountries = res.data.map((c) => c.name)
            setCountries(resCountries)
        } catch (err) {
            console.log(err)
            toast(err.message)
        }
    }

    const getCities = async () => {
        try {
            const res = await fetchJson(API_ENDPOINTS.CITY, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })
            const resCities = res.data.map((c) => c.name)
            setCities(resCities)
        } catch (err) {
            console.log(err)
            toast(err.message)
        }
    }

    useEffect(() => {
        getCountries()
        getCities()
    }, [])

    return (
        <>
            <div className={basicDetailsStyles.info_1}>
                <div className={basicDetailsStyles.info_1__1}>
                    <Input
                        id="listingName"
                        name="listingName"
                        label="LISTING NAME"
                        values={values}
                        type="text"
                        background="white"
                        placeholder="please enter your name/alias"
                        autoComplete="off"
                        error={errors.listingName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <Select
                        id="age"
                        name="age"
                        label="Age"
                        defaultValue={21}
                        options={ages}
                        error={errors.age}
                        values={values}
                    />
                    <SingleSelect
                        id="gender"
                        name="gender"
                        label="Gender"
                        error={errors.gender}
                        touched={touched}
                        options={genders}
                        values={values}
                    />
                    <PhoneNumberInput
                        id="code"
                        setFieldValue={setFieldValue}
                        name="code"
                        error={errors?.code}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        values={values}
                    />
                </div>
                <div className={basicDetailsStyles.info_1__2}>
                    <ImageInput
                        id="listingPicture"
                        label="Listing Picture"
                        name="listingPicture"
                        error={errors?.listingPicture}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        setFieldValue={setFieldValue}
                        values={values}
                        height="400px"
                    />
                </div>
            </div>
            <div className={basicDetailsStyles.info_2}>
                <div>
                    <TextArea
                        id="aboutMe"
                        label="About Me"
                        name="aboutMe"
                        type="text"
                        error={errors?.aboutMe}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        values={values}
                    />
                </div>
                <div className={basicDetailsStyles.location}>
                    <div>
                        <GroupSelect
                            id="contactMethods"
                            name="contactMethods"
                            label="Contact Methods"
                            options={contactMethods}
                            error={errors?.contactMethods}
                            values={values}
                        />
                    </div>
                    <div>
                        <Select
                            id="locationCountry"
                            label="Location Country"
                            name="locationCountry"
                            options={countries}
                            defaultValue="Cyprus"
                            error={errors?.locationCountry}
                            values={values}
                        />
                        <Select
                            id="locationCity"
                            label="Location City"
                            name="locationCity"
                            options={cities}
                            defaultValue="Limassol"
                            error={errors?.locationCity}
                            values={values}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BasicDetailsForm

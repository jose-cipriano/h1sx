import Input from '../../components/common/form/input'
import ImageInput from '../../components/common/form/image-input'
import TextArea from '../../components/common/form/text-area'
import PhoneNumberInput from '../../components/common/form/phone-number-input'
import SingleSelect from '../../components/common/form/single-select'
import basicDetailsStyles from './basicDetails.module.css'
import GroupSelect from '../../components/common/form/group-select'

const BasicDetailsForm = ({ errors, handleChange, handleBlur, setFieldValue, values, touched }) => {
    const contactMethods = ['Call', 'SMS', 'WhatsApp', 'Viber', 'Telegram']
    const genders = ['Female', 'Transgender', 'Male']
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
                    <Input
                        id="age"
                        name="age"
                        label="Age"
                        type="number"
                        defaultValue={18}
                        background="white"
                        placeholder="Add Age"
                        autoComplete="off"
                        error={errors.age}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        values={values}
                    />
                    <SingleSelect
                        id="gender"
                        name="gender"
                        label="Gender"
                        error={errors.gender}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        touched={touched}
                        options={genders}
                        values={values}
                    />
                    <PhoneNumberInput
                        id="code"
                        setFieldValue={setFieldValue}
                        name="code"
                        type="string"
                        background="white"
                        autoComplete="off"
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
                        background="white"
                        autoComplete="off"
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
                        background="white"
                        placeholder="About Me"
                        autoComplete="off"
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
                        <Input
                            id="locationCountry"
                            name="locationCountry"
                            label="Location Country"
                            type="text"
                            background="white"
                            placeholder="Add Country"
                            autoComplete="off"
                            error={errors?.locationCountry}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            values={values}
                        />
                        <Input
                            id="locationCity"
                            label="Location City"
                            name="locationCity"
                            type="text"
                            background="white"
                            placeholder="Add City/District"
                            autoComplete="off"
                            error={errors?.locationCity}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            values={values}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BasicDetailsForm

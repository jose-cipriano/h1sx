import Input from '../../components/common/form/input'
import ImageInput from '../../components/common/form/image-input'
import TextArea from '../../components/common/form/text-area'
import PhoneNumberInput from '../../components/common/form/phone-number-input'
import Select from '../../components/common/form/select'
import basicDetailsStyles from './basicDetails.module.css'
import GroupSelect from '../../components/common/form/group-select'

const BasicDetailsForm = ({ errors, handleChange, handleBlur, setFieldValue, values }) => {
    const contactMethods = [
        { label: 'Call', value: 'Call' },
        { label: 'SMS', value: 'SMS' },
        { label: 'WhatsApp', value: 'WhatsApp' },
        { label: 'Viber', value: 'Viber' },
        { label: 'Telegram', value: 'Telegram' },
    ]
    return (
        <>
            <div className={basicDetailsStyles.info_1}>
                <div className={basicDetailsStyles.info_1__1}>
                    <Input
                        id="listingName"
                        label="Listing Name"
                        name="listingName"
                        type="text"
                        background="white"
                        placeholder="Add Listing Name"
                        autoComplete="off"
                        error={errors.listingName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <Input
                        id="age"
                        label="Age"
                        name="age"
                        type="number"
                        defaultValue={18}
                        background="white"
                        placeholder="Add Age"
                        autoComplete="off"
                        error={errors.age}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <Select
                        name="gender"
                        id="gender"
                        label="Select Gender"
                        error={errors.gender}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    >
                        <option value="man">Man</option>
                        <option value="woman">Woman</option>
                    </Select>
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
                    />
                    <GroupSelect
                        id="contactMethods"
                        label="Contact Methods"
                        options={contactMethods}
                        error={errors?.contactMethods}
                        onChange={handleChange}
                        upTo={5}
                        values={values}
                    />
                </div>
                <div className={basicDetailsStyles.info_1__2}>
                    <ImageInput
                        id="listingPicture"
                        label="Listing Picture (2:3 Ratio)"
                        name="listingPicture"
                        background="white"
                        autoComplete="off"
                        error={errors?.listingPicture}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        setFieldValue={setFieldValue}
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
                    />
                </div>
                <div className={basicDetailsStyles.location}>
                    <div>
                        <Input
                            id="mapWithLocation"
                            label="Listing Name"
                            name="mapWithLocation"
                            type="text"
                            background="white"
                            placeholder="Map with location pin"
                            autoComplete="off"
                            error={errors?.mapWithLocation}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div>
                        <Input
                            id="locationCountry"
                            label="Location Country"
                            name="locationCountry"
                            type="text"
                            background="white"
                            placeholder="Add Country"
                            autoComplete="off"
                            error={errors?.locationCountry}
                            onChange={handleChange}
                            onBlur={handleBlur}
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
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BasicDetailsForm

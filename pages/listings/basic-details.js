import Input from '../../components/common/form/input'
import FileInput from '../../components/common/form/file-input'
import TextArea from '../../components/common/form/text-area'
import PhoneNumberInput from '../../components/common/form/phone-number-input'
import { Form, Formik } from 'formik'
import Tabstyles from '../../styles/Tabs.module.css'
import Spinner from '../../components/common/spinner'
import Select from '../../components/common/form/select'
import BasicDetailsStyles from './BasicDetailsStyles.module.css'
import { validationSchema } from '../../utils/schema'

export default function BasicDetails({ onSubmit }) {
    return (
        <Formik
            initialValues={{ age: 18 }}
            validationSchema={validationSchema.basicDetailSchema}
            onSubmit={onSubmit}
        >
            {({ touched, errors, handleBlur, handleChange }) => {
                return (
                    <Form className={BasicDetailsStyles.form}>
                        <div className={BasicDetailsStyles.info_1}>
                            <div className={BasicDetailsStyles.info_1__1}>
                                <Input
                                    id="listingName"
                                    label="Listing Name"
                                    name="listingName"
                                    type="text"
                                    background="white"
                                    placeholder="Add Listing Name"
                                    autoComplete="off"
                                    error={touched.listingName && errors?.listingName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
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
                                    error={touched.age && errors?.age}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                />
                                <Select
                                    name="gender"
                                    id="gender"
                                    label="Select Gender"
                                    error={touched.gender && errors?.gender}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="man">Man</option>
                                    <option value="woman">Woman</option>
                                </Select>
                                <PhoneNumberInput
                                    id="code"
                                    // label="Country Code & Phone Number"
                                    name="code"
                                    type="string"
                                    background="white"
                                    autoComplete="off"
                                    error={touched.code && errors?.code}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                />
                                <Input
                                    id="contactMethods"
                                    label="Contact Methods"
                                    name="contactMethods"
                                    type="string"
                                    background="white"
                                    placeholder="Contact Methods"
                                    autoComplete="off"
                                    error={touched.contactMethods && errors?.contactMethods}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                />
                            </div>
                            <div className={BasicDetailsStyles.info_1__2}>
                                <FileInput
                                    id="listingPicture"
                                    label="Listing Picture (2:3 Ratio)"
                                    name="listingPicture"
                                    background="white"
                                    autoComplete="off"
                                    error={touched.listingPicture && errors?.listingPicture}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                        </div>
                        <div className={BasicDetailsStyles.info_2}>
                            <div>
                                <TextArea
                                    id="aboutMe"
                                    label="About Me"
                                    name="aboutMe"
                                    type="text"
                                    background="white"
                                    placeholder="About Me"
                                    autoComplete="off"
                                    error={touched.aboutMe && errors?.aboutMe}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                />
                            </div>
                            <div className={BasicDetailsStyles.location}>
                                <div>
                                    <Input
                                        id="mapWithLocation"
                                        label="Listing Name"
                                        name="mapWithLocation"
                                        type="text"
                                        background="white"
                                        placeholder="Map with location pin"
                                        autoComplete="off"
                                        error={touched.mapWithLocation && errors?.mapWithLocation}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                    />
                                </div>
                                <div>
                                    <Input
                                        id="locationCountry"
                                        label="Listing Name"
                                        name="locationCountry"
                                        type="text"
                                        background="white"
                                        placeholder="Add Country"
                                        autoComplete="off"
                                        error={touched.locationCountry && errors?.locationCountry}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                    />
                                    <Input
                                        id="locationCity"
                                        label="Listing Name"
                                        name="locationCity"
                                        type="text"
                                        background="white"
                                        placeholder="Add City/District"
                                        autoComplete="off"
                                        error={touched.locationCity && errors?.locationCity}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        {/* <div className={Tabstyles.crFormCta}>
                            {status === 'pending' ? (
                                <Spinner />
                            ) : (
                                <input
                                    type="submit"
                                    value="ADD"
                                    className={Tabstyles.defaultButton}
                                />
                            )}
                        </div> */}
                    </Form>
                )
            }}
        </Formik>
    )
}

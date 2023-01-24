import * as yup from 'yup'

const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
const FILE_SIZE = 500
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png']

export const validationSchema = {
    loginSchema: yup.object({
        username: yup
            .string('Enter your username')
            .email('Enter a valid username')
            .required('Email is required'),
        password: yup.string('Enter your password').required('Password is required'),
    }),
    forgotSchema: yup.object({
        username: yup
            .string('Enter your username')
            .email('Enter a valid username')
            .required('Email is required'),
    }),
    resetSchema: yup.object({
        password: yup.string('Enter your username').required('Password is required'),
        confirmPwd: yup.string('Enter your username').required('Password is required'),
    }),
    countrySchema: yup.object({
        country: yup.string('Enter the Country').required('Country is required'),
    }),
    citySchema: yup.object({
        city: yup.string('Enter the City').required('City is required'),
    }),
    areaSchema: yup.object({
        area: yup.string('Enter the Area').required('Area is required'),
    }),
    streetSchema: yup.object({
        street: yup.string('Enter the Street').required('Street is required'),
    }),
    changeNameSchema: yup.object({
        name: yup.string('Enter the new name').required('Name is required'),
    }),
    categorySchema: yup.object({
        category: yup.string('Enter the category').required('Category is required'),
    }),
    serviceSchema: yup.object({
        service: yup.string('Enter the service').required('Service is required'),
    }),
    announcementSchema: yup.object({
        announcement: yup.string('Enter the announcement').required('Announcement is required'),
    }),
    accountSchema: yup.object({
        email: yup
            .string('Enter the email')
            .email('Enter a valid email')
            .required('Email is required'),
        password: yup.string('Enter the password').required('Password is required'),
        name: yup.string('Enter the name').required('Name is required'),
        surname: yup.string('Enter the surname').required('Surname is required'),
        consent: yup.string('Enter the consent').required('Consent is required'),
        role: yup.string('Enter the role').required('Role is required'),
        limit: yup.number().integer().positive().min(0),
    }),
    basicDetailSchema: yup.object({
        listingName: yup.string('Enter the Listing Name').required('Listing Name is required'),
        age: yup.number().integer().positive().min(18),
        gender: yup.string(),
        code: yup
            .string()
            .matches(phoneRegExp, 'Enter Valid phone number')
            .required('Phone number is required'),
        contactMethods: yup.string('Enter Contact Methods').required('Contact Method is required'),
        aboutMe: yup.string('Enter your detail').required('Your Information is required'),
        locationCountry: yup
            .string('Enter your Country')
            .required('Your Country location is required'),
        locationCity: yup.string('Enter your City').required('Your City location is required'),
        mapWithLocation: yup.string('Enter your location pin').required('This field is required'),
    }),
}

export const listingSchema = [
    yup.object({
        listingName: yup.string('Enter the Listing Name').required('Listing Name is required'),
        age: yup.number().integer().positive().min(18),
        gender: yup.string(),
        code: yup
            .string()
            .matches(phoneRegExp, 'Enter Valid phone number')
            .required('Phone number is required'),
        aboutMe: yup.string('Enter your detail').required('Your Information is required'),
        locationCountry: yup
            .string('Enter your Country')
            .required('Your Country location is required'),
        locationCity: yup.string('Enter your City').required('Your City location is required'),
        mapWithLocation: yup.string('Enter your location pin').required('This field is required'),
        contactMethods: yup
            .array()
            .of(yup.string().required('Required field'))
            .required('Required'),
        listingPicture: yup
            .object()
            .shape({
                file: yup
                    .mixed()
                    .test('fileSize', 'File Size is too large', (value) => value.size <= FILE_SIZE)
                    .test('fileType', 'Unsupported File Format', (value) =>
                        SUPPORTED_FORMATS.includes(value.type),
                    )
                    .required('A file is required.'),
            })
            .nullable(),
    }),
    yup.object({
        nationality: yup.string('Enter the Nationality').required('Nationality is required'),
        i_speak: yup.string('Enter the language').required('This field is required'),
        orientation: yup.string('Enter the Orientation').required('This field is required'),
        i_meet: yup.string('Enter this field').required('This field is required'),
        available_for: yup.string('Enter this field').required('This field is required'),
        height: yup.string('Enter this field').required('This field is required'),
        weight: yup.string('Enter this field').required('This field is required'),
        cup_size: yup.string('Enter this field').required('This field is required'),
        breast_type: yup.string('Enter this field').required('This field is required'),
        penis_length: yup.string('Enter this field').required('This field is required'),
        penis_girth: yup.string('Enter this field').required('This field is required'),
        hair_color: yup.string('Enter this field').required('This field is required'),
        eye_color: yup.string('Enter this field').required('This field is required'),
        intimate_hair: yup.string('Enter this field').required('This field is required'),
        bodyart: yup.string('Enter this field').required('This field is required'),
        smoking: yup.string('Enter this field').required('This field is required'),
        drinking: yup.string('Enter this field').required('This field is required'),
        party_play: yup.string('Enter this field').required('This field is required'),
    }),
    yup.object({
        uploadForMediaGallery: yup
            .object()
            .shape({
                file: yup
                    .mixed()
                    .test('fileSize', 'File Size is too large', (value) => value.size <= FILE_SIZE)
                    .test('fileType', 'Unsupported File Format', (value) =>
                        SUPPORTED_FORMATS.includes(value.type),
                    )
                    .required('A file is required.'),
            })
            .nullable(),
    }),
]

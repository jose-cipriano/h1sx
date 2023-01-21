import Input from '../../components/common/form/input'
import characteristicsStyles from './characteristics.module.css'

export const CharacteristicsForm = ({ touched, errors, handleChange, handleBlur }) => {
    return (
        <>
            <div className={characteristicsStyles.info_1}>
                <Input
                    id="nationality"
                    label="Nationality"
                    name="nationality"
                    type="text"
                    background="white"
                    placeholder="Nationality"
                    autoComplete="off"
                    error={errors.nationality}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <Input
                    id="i_speak"
                    label="I Speak"
                    name="i_speak"
                    type="text"
                    background="white"
                    placeholder="I Speak"
                    autoComplete="off"
                    error={errors.i_speak}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <Input
                    id="orientation"
                    label="Orientation"
                    name="orientation"
                    type="text"
                    background="white"
                    placeholder="Orientation"
                    autoComplete="off"
                    error={errors.orientation}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <Input
                    id="i_meet"
                    label="I Meet"
                    name="i_meet"
                    type="text"
                    background="white"
                    placeholder="I Meet"
                    autoComplete="off"
                    error={errors.i_meet}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <Input
                    id="available_for"
                    label="Available For"
                    name="available_for"
                    type="text"
                    background="white"
                    placeholder="Available For"
                    autoComplete="off"
                    error={errors.available_for}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </div>
            <div className={characteristicsStyles.info_2}>
                <Input
                    id="height"
                    label="Height"
                    name="height"
                    type="text"
                    background="white"
                    placeholder="Height"
                    autoComplete="off"
                    error={errors.height}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <Input
                    id="weight"
                    label="Weight"
                    name="weight"
                    type="text"
                    background="white"
                    placeholder="Weight"
                    autoComplete="off"
                    error={errors.weight}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <Input
                    id="cup_size"
                    label="Cup Size"
                    name="cup_size"
                    type="text"
                    background="white"
                    placeholder="Cup Size"
                    autoComplete="off"
                    error={errors.cup_size}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <Input
                    id="breast_type"
                    label="Breast Type"
                    name="breast_type"
                    type="text"
                    background="white"
                    placeholder="Breast Type"
                    autoComplete="off"
                    error={errors.breast_type}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <Input
                    id="penis_length"
                    label="Penis Length"
                    name="penis_length"
                    type="text"
                    background="white"
                    placeholder="Penis Length"
                    autoComplete="off"
                    error={errors.penis_length}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <Input
                    id="penis_girth"
                    label="Penis Girth"
                    name="penis_girth"
                    type="text"
                    background="white"
                    placeholder="Penis Girth"
                    autoComplete="off"
                    error={errors.penis_girth}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </div>
            <div className={characteristicsStyles.info_3}>
                <Input
                    id="hair_color"
                    label="Hair Color"
                    name="hair_color"
                    type="text"
                    background="white"
                    placeholder="Hair Color"
                    autoComplete="off"
                    error={errors.hair_color}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <Input
                    id="eye_color"
                    label="Eye Color"
                    name="eye_color"
                    type="text"
                    background="white"
                    placeholder="Eye Color"
                    autoComplete="off"
                    error={errors.eye_color}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <Input
                    id="intimate_hair"
                    label="Weight"
                    name="intimate_hair"
                    type="text"
                    background="white"
                    placeholder="Weight"
                    autoComplete="off"
                    error={errors.intimate_hair}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <Input
                    id="bodyart"
                    label="Bodyart"
                    name="bodyart"
                    type="text"
                    background="white"
                    placeholder="Bodyart"
                    autoComplete="off"
                    error={errors.bodyart}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </div>
            <div className={characteristicsStyles.info_4}>
                <Input
                    id="smoking"
                    label="Smoking"
                    name="smoking"
                    type="text"
                    background="white"
                    placeholder="Smoking"
                    autoComplete="off"
                    error={errors.smoking}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <Input
                    id="drinking"
                    label="Drinking"
                    name="drinking"
                    type="text"
                    background="white"
                    placeholder="Drinking"
                    autoComplete="off"
                    error={errors.drinking}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <Input
                    id="party_play"
                    label="Party & Play"
                    name="party_play"
                    type="text"
                    background="white"
                    placeholder="Party & Play"
                    autoComplete="off"
                    error={errors.party_play}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </div>
        </>
    )
}

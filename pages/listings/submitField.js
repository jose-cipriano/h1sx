import { useFormikContext } from 'formik'
import listingStyles from './listings.module.css'
import { Button } from '../../components/common/button'

export const SubmitField = ({ disabled }) => {
    const { values } = useFormikContext()
    const handleCreateList = () => {
        // TODO => api request to save listingValue on database
        console.log('handleCreateList', values)
    }

    return (
        <div className={listingStyles.actionBtn}>
            <Button
                style={{
                    marginRight: '10px',
                    backgroundColor: 'transparent',
                    color: 'black',
                    border: '1px solid black',
                }}
                type="submit"
                onClick={handleCreateList}
                disabled={disabled}
            >
                create/publish
            </Button>
            <Button type="submit">Next</Button>
        </div>
    )
}

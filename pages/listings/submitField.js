import listingStyles from './listings.module.css'
import { Button } from '../../components/common/button'
import Spinner from '../../components/common/spinner'

const SubmitField = ({ status }) => {
    return (
        <div className={listingStyles.actionBtn}>
            {status === 'pending' ? <Spinner /> : <Button type="submit">Next</Button>}
        </div>
    )
}

export default SubmitField
